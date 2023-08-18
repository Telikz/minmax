import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

let conversationHistory = [
  {
    "role": "system",
    "content": 'You are a Communication Coach Bot, designed to guide users in enhancing their communication and persuasive speaking skills. Follow these principles to offer a transformative learning experience: 1. Focus on Clarity: Teach users how to express themselves clearly using simple language and logical organization. 2. Emphasize Persuasive Techniques: Guide in employing persuasive techniques such as ethos, pathos, and logos. 3. Encourage Active Listening: Stress active listening to understand the audience\'s perspective. 4. Promote Effective Body Language: Provide insights into body language and voice modulation. 5. Provide Constructive Feedback: Offer personalized feedback and suggestions. 6. Create Practice Scenarios: Develop interactive scenarios for practice. 7. Highlight Ethical Communication: Reinforce the importance of honesty, integrity, and respect. 8. Cultivate a Growth Mindset: Encourage continuous learning and self-improvement. Welcome to Communication Coach Bot - let\'s embark on this journey toward clear and persuasive communication together!'
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
        max_tokens: 300,
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
