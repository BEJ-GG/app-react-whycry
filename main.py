from fastapi import FastAPI, UploadFile, File, Form, Depends
from scipy.signal import hilbert
from starlette.responses import RedirectResponse
from pydantic import BaseModel
import tensorflow as tf
import numpy as np
import librosa
import os
import soundfile as sf
from pyctuator.pyctuator import Pyctuator
from pydub import AudioSegment

# Definir a classe do objeto de entrada
class Audio(BaseModel):
    content: bytes

app = FastAPI()

# Pyctuator(
#     app,
#     "Monitoring WhyCry Service",
#     app_url="http://host.docker.internal:8000",
#     pyctuator_endpoint_url="http://host.docker.internal:8000/pyctuator",
#     registration_url="http://localhost:8080/instances"
# )

model = tf.keras.models.load_model("./model/")

@app.get("/")
async def root():
    return RedirectResponse(url="/docs")

# Rota para realizar a predição
@app.post("/predict")
async def predicao_audio(file: UploadFile):
    # Salvar o arquivo localmente
    with open("audio.wav", "wb") as f:
        f.write(await file.read())
        
        # Carregar o arquivo de áudio original
        audio = AudioSegment.from_file("audio.wav")

        # Definir as configurações desejadas para o novo formato
        num_channels = 1
        sample_width = 2
        frame_rate = 44100

        # Converter o áudio para o formato desejado
        converted_audio = audio.set_channels(num_channels).set_frame_rate(frame_rate).set_sample_width(sample_width)

        # Salvar o arquivo de áudio convertido
        converted_audio.export("audio.wav", format="wav")
        print("Testes conversor wav", converted_audio)

        # Carregar o arquivo de áudio usando o TensorFlow
        audio_binary = tf.io.read_file("audio.wav")
        audio, _ = tf.audio.decode_wav(audio_binary)

        # Converter o áudio para um tensor com tipo float32
        audio_tf = tf.squeeze(audio, axis=-1)
        audio_tf = tf.expand_dims(audio_tf, axis=0)

        # Realizar o pré-processamento necessário no áudio
        audio_final = preprocess_audio(audio_tf)

        input_shape = audio_final.shape.as_list()

        # Pegar tamanho do audio
        audio = audio_final

        # Pegar voluem do audio
        threshold = 0.5
        volume = obter_volume(audio, threshold)

        # # Extrair tonalidade, intensidade e pitch do choro
        choro, sr = librosa.load("audio.wav", sr=None)

        # Extrair recursos de áudio (intensidade, tonalidade e pitch)
        intensidade = np.mean(np.abs(audio))
        intensidadef = f"{intensidade:.3f}"

        audio_file, sr = librosa.load("audio.wav")

        # Estimar a frequência fundamental (pitch) usando o método Yin
        pitch, _ = librosa.piptrack(
            y=audio_file,
            sr=sr,
            fmin=librosa.note_to_hz("C2"),
            fmax=librosa.note_to_hz("C7"),
        )

        # Calcular a média do pitch
        pitch_mean = librosa.hz_to_midi(pitch[pitch > 0].mean())

        pitch_meanf = f"{pitch_mean:.2f} Hz"

        # Estimar o tom a partir da média do pitch
        tom = librosa.midi_to_note(pitch_mean)

        # Fazer a predição usando o modelo carregado
        test_audio = np.array(audio_final)

        padrao = obter_padrao_choro("audio.wav")

        print("\n")

        prediction = model.predict(test_audio)

        pred = np.argmax(prediction, axis=1)

        tipo_choro = pred[0]

        if tipo_choro == 0:
            choro = "Lower Gas/ Pequenos Gases - EAIR"
        elif tipo_choro == 1:
            choro = "Burp/Arroto - EH"
        elif tipo_choro == 2:
            choro = "Discomfort/Desconforto - HEH"
        elif tipo_choro == 3:
            choro = "Hungry/Fome - NEH"
        elif tipo_choro == 4:
            choro = "Tired/Cansado - OWH"
        else:
            choro = "Outro tipo"

        durationf = obter_duracao_audio("audio.wav")

        # Carregar o arquivo de áudio
        audio, _ = sf.read("audio.wav")

        # Pré-processamento do áudio
        audio_preprocessado = preprocess_audio(audio)

        # Expandir as dimensões do array para corresponder ao formato esperado pelo modelo
        entrada_modelo = np.expand_dims(audio_preprocessado, axis=0)

        # Realizar a inferência com o modelo
        resultado = model.predict(entrada_modelo)

        # Realizar o pós-processamento dos resultados
        palavras_reconhecidas = realizar_posprocessamento(resultado)

        # Deletar audio
    deletar_arquivo("audio.wav")

    return {
        "Audio": file.filename,
        "Tipo de choro": choro,
        "Volume": volume,
        "Input Shape": input_shape,
        "Predict": prediction.tolist(),
        "Duracao": durationf,
        "Intensidade": intensidadef,
        "Tom": tom,
        "Pitch": pitch_meanf,
        "Padrao": padrao,
        "Palavras": palavras_reconhecidas,
    }

@app.post("/choro")
async def tipo_choro(file: UploadFile):
    # Salvar o arquivo localmente
    print("Audio RECEBIDO: ", file)
    with open("audio.wav", "wb") as f:
        f.write(await file.read())
        
        # Carregar o arquivo de áudio original
        audio = AudioSegment.from_file("audio.wav")

        # Definir as configurações desejadas para o novo formato
        num_channels = 1
        sample_width = 2
        frame_rate = 44100

        # Converter o áudio para o formato desejado
        converted_audio = audio.set_channels(num_channels).set_frame_rate(frame_rate).set_sample_width(sample_width)

        # Salvar o arquivo de áudio convertido
        converted_audio.export("audio.wav", format="wav")
        print("Testes conversor wav", converted_audio)
        
        # Carregar o arquivo de áudio original
        audio = AudioSegment.from_file("audio.wav")

        # Definir as configurações desejadas para o novo formato
        num_channels = 1
        sample_width = 2
        frame_rate = 44100

        # Converter o áudio para o formato desejado
        converted_audio = audio.set_channels(num_channels).set_frame_rate(frame_rate).set_sample_width(sample_width)

        # Salvar o arquivo de áudio convertido
        converted_audio.export("audio.wav", format="wav")
        print("Testes conversor wav", converted_audio)

        # Carregar o arquivo de áudio usando o TensorFlow
        audio_binary = tf.io.read_file("audio.wav")
        # print("Audio Binary" + audio_binary)
        
        audio, _ = tf.audio.decode_wav(audio_binary)
        # print("Audio Decode" + audio.to)

        # Converter o áudio para um tensor com tipo float32
        audio_tf = tf.squeeze(audio, axis=-1)
        audio_tf = tf.expand_dims(audio_tf, axis=0)

        # Realizar o pré-processamento necessário no áudio
        audio_final = preprocess_audio(audio_tf)

        prediction = model.predict(np.array(audio_final))

        pred = np.argmax(prediction, axis=1)

        tipo_choro = pred[0]


        if tipo_choro == 0:
            choro = "Lower Gas - EAIR"
        elif tipo_choro == 1:
            choro = "Burp - EH"
        elif tipo_choro == 2:
            choro = "Discomfort - HEH"
        elif tipo_choro == 3:
            choro = "Hungry - NEH"
        elif tipo_choro == 4:
            choro = "Tired - OWH"
        else:
            choro = "Outro tipo"

        print("Choro: ", choro)
        
    deletar_arquivo("./audio.wav")
    return {"choro": choro}


@app.post("/palavra")
async def tipo_palavra(file: UploadFile):
    # Salvar o arquivo de áudio
    with open("audio.wav", "wb") as f:
        f.write(await file.read())
        
        # Carregar o arquivo de áudio original
        audio = AudioSegment.from_file("audio.wav")

        # Definir as configurações desejadas para o novo formato
        num_channels = 1
        sample_width = 2
        frame_rate = 44100

        # Converter o áudio para o formato desejado
        converted_audio = audio.set_channels(num_channels).set_frame_rate(frame_rate).set_sample_width(sample_width)

        # Salvar o arquivo de áudio convertido
        converted_audio.export("audio.wav", format="wav")
        print("Testes conversor wav", converted_audio)

    # Carregar o arquivo de áudio
    audio, _ = sf.read("audio.wav")

    # Pré-processamento do áudio
    audio_preprocessado = preprocess_audio(audio)

    # Expandir as dimensões do array para corresponder ao formato esperado pelo modelo
    entrada_modelo = np.expand_dims(audio_preprocessado, axis=0)

    # Realizar a inferência com o modelo
    resultado = model.predict(entrada_modelo)

    # Realizar o pós-processamento dos resultados
    palavras_reconhecidas = realizar_posprocessamento(resultado)

    # Retornar as palavras reconhecidas como resposta
    deletar_arquivo("audio.wav")
    return {"Palavras": palavras_reconhecidas}


def preprocess_audio(audio):
    # Redimensionar o áudio para as dimensões esperadas pelo modelo
    spectrogram = tf.signal.stft(audio, frame_length=255, frame_step=128)
    spectrogram = tf.abs(spectrogram)
    spectrogram = np.expand_dims(spectrogram, axis=-1)

    # Redimensionar para o tamanho esperado pelo modelo
    spectrogram = tf.image.resize(spectrogram, [124, 129])

    return spectrogram


def obter_duracao_audio(audio_path):
    # Carregar o áudio
    audio, sr = librosa.load(audio_path)

    # Calcular a duração em segundos
    duracao_segundos = len(audio) / sr

    # Formatar a saída
    duracao_formatada = f"{duracao_segundos:.1f} Segundos"

    return duracao_formatada


def obter_volume(audio, threshold):
    # Calcula a amplitude do áudio
    amplitude = np.max(np.abs(audio))

    # Classifica o áudio como alto ou baixo
    if amplitude > threshold:
        return "Alto"
    else:
        return "Baixo"


def obter_padrao_choro(audio_path):
    # Carregar o áudio
    audio, _ = librosa.load(audio_path)

    # Calcular o envelope de amplitude do áudio
    amplitude_envelope = np.abs(hilbert(audio))

    # Definir um limiar para identificar trechos de choro
    limiar = np.mean(amplitude_envelope) * 1.5

    # Encontrar os índices onde a amplitude está acima do limiar
    indices_choro = np.where(amplitude_envelope > limiar)[0]

    # Calcular as diferenças entre os índices para identificar pausas e variações no ritmo
    diferenca_indices = np.diff(indices_choro)

    # Verificar se há pausas regulares ou variações no ritmo
    pausas_regulares = np.all(diferenca_indices == diferenca_indices[0])
    variacoes_ritmo = not np.all(diferenca_indices == diferenca_indices[0])

    # Verificar se há choro contínuo ou intermitente
    if len(indices_choro) > 0:
        if pausas_regulares:
            padrao = "Choro com pausas regulares"
        elif variacoes_ritmo:
            padrao = "Choro com variações no ritmo"
        else:
            padrao = "Choro contínuo"
    else:
        padrao = "Sem choro detectado"

    return padrao


def deletar_arquivo(caminho_arquivo):
    if os.path.exists(caminho_arquivo):
        try:
            with open(caminho_arquivo, "r") as arquivo:
                # Realiza operações de leitura/escrita aqui, se necessário
                pass
            # Arquivo é fechado automaticamente ao sair do bloco 'with'
            os.remove(caminho_arquivo)
            print(f"O arquivo {caminho_arquivo} foi deletado com sucesso.")
        except Exception as e:
            print(f"Erro ao fechar o arquivo: {str(e)}")
    else:
        print("O arquivo não existe.")


classes = ["Neh", "Eh", "Eair" "Heh", "Owh"]  # Classes correspondentes às palavras


def realizar_posprocessamento(resultado, limite_probabilidade=0.5):
    # Aplicar qualquer pós-processamento necessário para obter as palavras reconhecidas

    # Encontrar a classe com a probabilidade mais alta para cada exemplo
    palavras_reconhecidas = np.argmax(resultado, axis=1)

    # Obter as probabilidades máximas para cada exemplo
    probabilidades_maximas = np.max(resultado, axis=1)

    # Filtrar as palavras reconhecidas com base no limite de probabilidade
    palavras_reconhecidas_filtradas = [
        classes[indice] if probabilidade >= limite_probabilidade else "Desconhecido"
        for indice, probabilidade in zip(palavras_reconhecidas, probabilidades_maximas)
    ]

    return palavras_reconhecidas_filtradas
