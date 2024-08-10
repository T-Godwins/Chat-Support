// import { ElevenLabsClient, play } from "elevenlabs";

// const elevenlabs = new ElevenLabsClient({
//   apiKey: process.env.ELEVENLABS_API_KEY
// })

// const audioStream = await elevenlabs.generate({
//     stream: true,
//     voice: "Adam",
//     text: "This is a... streaming voice",
//     model_id: "eleven_multilingual_v2"
//   });
  
//   stream(audioStream)

import { ElevenLabsClient, ElevenLabs } from "elevenlabs";

const client = new ElevenLabsClient({ apiKey: process.env.ELEVENLABS_API_KEY });
await client.textToSpeech.convert("pMsXgVXv3BLzUgSXRplE", {
    optimize_streaming_latency: ElevenLabs.OptimizeStreamingLatency.Zero,
    output_format: ElevenLabs.OutputFormat.Mp32205032,
    text: "It sure does, Jackie\u2026 My mama always said: \u201CIn Carolina, the air's so thick you can wear it!\u201D",
    voice_settings: {
        stability: 0.1,
        similarity_boost: 0.3,
        style: 0.2
    }
});
