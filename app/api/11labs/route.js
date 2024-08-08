import { ElevenLabsClient, play } from "elevenlabs";

const elevenlabs = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY
})

const audioStream = await elevenlabs.generate({
    stream: true,
    voice: "Bella",
    text: "This is a... streaming voice",
    model_id: "eleven_multilingual_v2"
  });
  
  stream(audioStream)