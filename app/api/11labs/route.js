import { ElevenLabsClient } from "elevenlabs";

const client = new ElevenLabsClient({ apiKey: process.env.ELEVENLABS_API_KEY });

// export async function POST(req, res) {
//   const { text } = await req.json();

//   try {
//     const audioStream = await client.textToSpeech.convert("pMsXgVXv3BLzUgSXRplE", {
//       optimize_streaming_latency: ElevenLabs.OptimizeStreamingLatency.Zero,
//       output_format: ElevenLabs.OutputFormat.Mp32205032,
//       text: text,
//       voice_settings: {
//         stability: 0.1,
//         similarity_boost: 0.3,
//         style: 0.2,
//       },
//     });

//     // Send back the audio stream or a URL to the audio file
//     res.status(200).json({ audioStreamUrl: audioStream.url });
//   } catch (error) {
//     console.error("Error generating speech:", error);
//     res.status(500).json({ error: "Error generating speech" });
//   }
// }

export default client;