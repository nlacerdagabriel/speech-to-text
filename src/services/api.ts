import axios from "axios"
const APIKey = "936103147cc34f4e9a3a465672905a4d"
const refreshInterval = 5000

const assembly = axios.create({
  baseURL: "https://api.assemblyai.com/v2",
  headers: {
    authorization: APIKey,
    "content-type": "application/json",
  },
})

export const getTranscript = async (audioURL: string, callback: any) => {
  const response = await assembly.post("/transcript", {
    audio_url: audioURL,
    language_code: "pt",
  })

  const checkCompletionInterval = setInterval(async () => {
    
    const transcript = await assembly.get(`/transcript/${response.data.id}`)
    const transcriptStatus = transcript.data.status

    if (transcriptStatus === "completed") {
      let transcriptText = transcript.data.text
      clearInterval(checkCompletionInterval)
      console.log('deu bom')
      console.log(transcriptText)
      callback(transcriptText)
    }else{
      console.log('ainda nao')
    }
  }, refreshInterval)
}