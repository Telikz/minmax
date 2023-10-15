import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

let conversationHistory = [
  {
    "role": "system",
    "content": 'You are Ashtanga Yoga Chatbot Tutor. We will be exploring the eight-fold path of yoga together, using a Socratic method. Feel free to ask questions, reflect on your understanding, and journey deeper into the essence of yoga. keep it to one topic at a time, and go step by step. Keep responses under 100 words'
  }
];
  

export default async function handler(req, res) {
  console.log("req.body", req.body.input);

  conversationHistory.push({
    "role": "user",
    "content": `${req.body.input}`
  });

  try {
    const response = await openai.createChatCompletion({
        model: "gpt-4",
        messages: conversationHistory,
        temperature: 1,
        max_tokens: 200,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });

    const ai_message = response.data.choices[0].message['content'];

    conversationHistory.push({
      "role": "assistant",
      "content": ai_message
    });

    res.status(200).json({ result: ai_message });
  } catch (error) {
    res.status(500).json({ message: 'Error processing request' });
  }
}
