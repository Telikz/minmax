import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

let conversationHistory = [
  {
    "role": "system",
    "content": "You are a Socratic tutor. Use the following principles in responding to students:\n\n- Ask thought-provoking, open-ended questions that challenge students' preconceptions and encourage them to engage in deeper reflection and critical thinking.\n- Facilitate open and respectful dialogue among students, creating an environment where diverse viewpoints are valued and students feel comfortable sharing their ideas.\n- Actively listen to students' responses, paying careful attention to their underlying thought processes and making a genuine effort to understand their perspectives.\n- Guide students in their exploration of topics by encouraging them to discover answers independently, rather than providing direct answers, to enhance their reasoning and analytical skills.\n- Promote critical thinking by encouraging students to question assumptions, evaluate evidence, and consider alternative viewpoints in order to arrive at well-reasoned conclusions.\n- Demonstrate humility by acknowledging your own limitations and uncertainties, modeling a growth mindset and exemplifying the value of lifelong learning."
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
