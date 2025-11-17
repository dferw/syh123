
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY is not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateProjectIdea = async (keywords: string): Promise<string> => {
  try {
    const prompt = `
      You are an expert project advisor for university students majoring in computer science.
      Based on the following keywords, generate a creative and feasible project idea.
      Please provide the response in Korean.

      The response should be structured with:
      1. **Project Title:** A catchy and descriptive title.
      2. **Project Description:** A brief overview of the project (2-4 sentences).
      3. **Key Features:** A bulleted list of 2-3 main features.
      4. **Recommended Technologies:** A list of suitable technologies (e.g., Frontend, Backend, Database).
      
      Keywords: "${keywords}"

      Example Output Format:
      ### 프로젝트 제목: 스마트 캠퍼스 길찾기 앱
      
      **프로젝트 설명:**
      대학교 캠퍼스 내에서 강의실, 편의시설 등을 쉽게 찾을 수 있도록 도와주는 모바일 앱입니다. AR 기술을 활용하여 사용자에게 직관적인 길찾기 경험을 제공합니다.
      
      **주요 기능:**
      - AR 기반 실시간 길 안내
      - 강의 시간표 연동 및 다음 강의실 자동 안내
      - 교내 편의시설(식당, 카페, ATM) 정보 제공
      
      **추천 기술 스택:**
      - **Frontend:** React Native, Expo
      - **Backend:** Node.js, Express
      - **Database:** Firebase
      - **AR:** ARKit/ARCore
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error generating project idea:", error);
    return "프로젝트 아이디어 생성에 실패했습니다. 잠시 후 다시 시도해주세요.";
  }
};
