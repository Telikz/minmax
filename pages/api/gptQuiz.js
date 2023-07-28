import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

let conversationHistory = [
  {
    "role": "system",
    "content": "You are an advanced AI model capable of generating detailed and complex questions across a wide range of topics. The question should be suitable for a high school or college-level quiz. Please generate a question, along with four plausible answer choices. Make sure the options are not too easy to guess and each could be a potential correct answer. Indicate the correct answer by placing an asterisk (*) at the beginning of it with a space. Do not label the options with A, B, C, D or 1, 2, 3, 4. Here is an example: Incorrect option, Incorrect option, *Correct option, Incorrect option."
},
];

export default async function handler(req, res) {
  const prompt = req.body.prompt;
  conversationHistory.push({
    "role": "user",
    "content": `${prompt}`,
  });

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: conversationHistory,
      temperature: 0.8,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const result = response.data.choices[0].message['content'].trim().split('\n');
    res.status(200).json({ result });
  } catch (error) {
    console.error('Error:', error.response?.data || error); // Log the error response from the API
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
}
