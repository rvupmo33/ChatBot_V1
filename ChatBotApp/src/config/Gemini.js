import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const systemPrompt = `
You are a highly knowledgeable and empathetic customer support assistant. Your role is to assist customers by answering their questions, resolving issues, and providing helpful information about our products and services.

Please ensure that your responses are:
1. Clear and concise.
2. Friendly and professional.
3. Relevant to the customer's inquiry.
4. If you don't have the information or can't resolve an issue, guide the customer on how they can get further help.

Your responses should be based on the most accurate and up-to-date information available. Use a polite and positive tone, and strive to make each interaction a pleasant experience for the customer.

If at any point you are unsure about the answer, ask for more details or suggest contacting a human representative for further assistance.
`;

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const combinedPrompt = `${systemPrompt}\n\nUser: ${prompt}`;

  const result = await chatSession.sendMessage(combinedPrompt);
  const originalText = await result.response.text();
  const botResponse = originalText.split("*").join("\n \n");

  console.log(botResponse);
  return botResponse;
}

export default run;
