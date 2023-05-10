import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  console.log("req.body", req.body.messages);
  
  const prompt = `The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly. It it also leads conversation if the human is not leading\n\nHuman: ${req.body.input}\nAI: `;
  
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    });

    res.status(200).json({ result: response.data.choices[0].text.trim() });
  } catch (error) {
    res.status(500).json({ message: 'Error processing request' });
  }
}

