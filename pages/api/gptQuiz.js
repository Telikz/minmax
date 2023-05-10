import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  try {
    const prompt = req.body.prompt;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.65,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.99,
      presence_penalty: 0.9,
    });
    const result = response.data.choices[0].text.trim().split('\n');
    res.status(200).json({ result });
  } catch (error) {
    console.error('Error:', error.response?.data || error); // Log the error response from the API
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
}
