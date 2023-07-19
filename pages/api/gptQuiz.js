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
  prompt:   'Generate a question related to everything along with 4 plausible answer choices. Indicate the correct answer with an asterisk (*) before the answer. Dont add any A B C Ds OR 1234s Example: Wrong Worng Wrong *Right , Wrong *Right Wrong Wrong ',
  temperature: 0.8,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
    });
    const result = response.data.choices[0].text.trim().split('\n');
    res.status(200).json({ result });
  } catch (error) {
    console.error('Error:', error.response?.data || error); // Log the error response from the API
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
}
