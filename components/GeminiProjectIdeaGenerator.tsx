
import React, { useState } from 'react';
import { generateProjectIdea } from '../services/geminiService';

export const GeminiProjectIdeaGenerator: React.FC = () => {
  const [keywords, setKeywords] = useState('');
  const [idea, setIdea] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!keywords.trim()) {
      setError('키워드를 입력해주세요.');
      return;
    }
    setIsLoading(true);
    setError('');
    setIdea('');
    try {
      const result = await generateProjectIdea(keywords);
      setIdea(result);
    } catch (err) {
      setError('아이디어 생성 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderFormattedIdea = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('###')) {
        return <h3 key={index} className="text-2xl font-bold text-cyan-400 mt-4 mb-2">{line.replace('###', '').trim()}</h3>;
      }
      if (line.startsWith('**')) {
        return <p key={index} className="font-semibold text-lg mt-3 mb-1 text-gray-200">{line.replace(/\*\*/g, '').trim()}</p>;
      }
      if (line.startsWith('- ')) {
         return <li key={index} className="ml-5 list-disc text-gray-300">{line.replace('- ', '').trim()}</li>;
      }
      return <p key={index} className="text-gray-300 my-1">{line}</p>;
    });
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-gray-700">
      <h2 className="text-3xl font-bold text-center mb-2 text-white">
        <span className="text-cyan-400">AI</span> 프로젝트 아이디어 생성기
      </h2>
      <p className="text-center text-gray-400 mb-6">관심있는 기술이나 주제 키워드를 입력해보세요!</p>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <input
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="예: React, D3.js, 데이터 시각화"
          className="flex-grow bg-gray-700 text-white placeholder-gray-500 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          disabled={isLoading}
        />
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="bg-cyan-600 text-white font-bold py-2 px-6 rounded-md hover:bg-cyan-700 transition-colors duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              생성 중...
            </>
          ) : (
            '아이디어 생성'
          )}
        </button>
      </div>

      {error && <p className="text-red-400 text-center mb-4">{error}</p>}
      
      {idea && (
        <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-gray-700">
          {renderFormattedIdea(idea)}
        </div>
      )}
    </div>
  );
};
