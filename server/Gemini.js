import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

async function gemini(pergunta) {
  const genAI = new GoogleGenerativeAI(process.env.VITE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: "Hello, I have 2 dogs in my house.",
      },
      {
        role: "model",
        parts: "Great to meet you. What would you like to know?",
      },
    ],
    generationConfig: {
      maxOutputTokens: 100,
    },
  });

  const result = await chat.sendMessage(pergunta)
  const response = await result.response
  const text = response.text()

  return text
}

export default gemini;