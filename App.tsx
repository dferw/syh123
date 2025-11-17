import React from 'react';
import type { Project } from './types';
import { ProjectCard } from './components/ProjectCard';
import { GeminiProjectIdeaGenerator } from './components/GeminiProjectIdeaGenerator';
import { GitHubIcon } from './components/icons/GitHubIcon';
import { LinkedInIcon } from './components/icons/LinkedInIcon';
import { MailIcon } from './components/icons/MailIcon';

const projects: Project[] = [
  {
    title: "실시간 주가 분석 대시보드",
    description: "React와 D3.js를 활용하여 실시간 주식 데이터를 시각화하는 동적 대시보드입니다. 사용자는 관심 종목을 추가하고, 다양한 차트를 통해 주가 추이를 직관적으로 파악할 수 있습니다.",
    tags: ["React", "TypeScript", "D3.js", "WebSocket", "Tailwind CSS"],
    imageUrl: "https://picsum.photos/seed/stockdashboard/600/400",
  },
  {
    title: "AI 기반 맛집 추천 챗봇",
    description: "사용자의 위치와 음식 취향을 기반으로 주변 맛집을 추천해주는 웹 기반 챗봇 서비스입니다. Google Gemini API를 사용하여 자연스러운 대화와 정확한 추천을 제공합니다.",
    tags: ["Next.js", "Gemini API", "Vercel AI SDK", "PostgreSQL"],
    imageUrl: "https://picsum.photos/seed/foodchatbot/600/400",
  },
  {
    title: "협업 코드 에디터",
    description: "여러 사용자가 동시에 코드를 편집하고 실행 결과를 확인할 수 있는 웹 기반 협업 IDE입니다. CRDT 알고리즘을 적용하여 충돌 없는 동시 편집 환경을 구현했습니다.",
    tags: ["Node.js", "React", "CRDT", "Socket.IO", "Docker"],
    imageUrl: "https://picsum.photos/seed/codeeditor/600/400",
  },
];

const skills = [
  "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", 
  "Python", "Java", "Spring Boot", "SQL", "PostgreSQL", "MongoDB", 
  "Docker", "Git", "Tailwind CSS", "Figma"
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-gray-700/[0.2] z-0"></div>
      <main className="container mx-auto px-6 py-12 md:py-20 relative z-10">

        {/* Hero Section */}
        <section id="hero" className="text-center mb-24">
          <img 
            src="https://i.stack.imgur.com/34AD2.jpg" 
            alt="프로필 사진"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-cyan-500 shadow-lg object-cover"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            서요한 <span className="text-gray-400 text-2xl md:text-4xl">(Seo Yo-han)</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-6">정보통신공학과 학생 & AI 엔지니어</p>
          <p className="max-w-3xl mx-auto text-gray-300">
            데이터와 알고리즘을 통해 복잡한 문제를 해결하고, 지능적인 AI 서비스를 만드는 것에 큰 흥미를 느낍니다. 
            최신 AI 기술과 논문을 탐구하고 실제 문제에 적용하는 것을 즐기며, 함께 성장하는 동료들과 혁신을 만들어가는 엔지니어를 꿈꿉니다.
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><GitHubIcon className="w-8 h-8"/></a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><LinkedInIcon className="w-8 h-8"/></a>
            <a href="mailto:student@university.ac.kr" className="text-gray-400 hover:text-cyan-400 transition-colors"><MailIcon className="w-8 h-8"/></a>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="mb-24 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-center mb-8">ABOUT ME</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
                저는 현재 <strong>동양미래대학교</strong>에서 정보통신공학을 전공하고 있는 <strong>4학년</strong> 서요한입니다. 
                머신러닝과 딥러닝 기술을 활용하여 데이터를 분석하고 예측 모델을 개발하는 것에 깊이 몰두하고 있습니다. 
                단순히 모델의 정확도를 높이는 것을 넘어, 실제 비즈니스에 가치를 더하고 사회에 긍정적인 영향을 미치는 AI 솔루션을 만드는 것을 목표로 합니다. 
                다양한 AI 프로젝트 경험을 통해 실질적인 문제 해결 능력과 협업 역량을 길러왔습니다.
            </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">SKILLS</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map(skill => (
              <div key={skill} className="bg-gray-800 text-cyan-300 text-sm font-medium px-4 py-2 rounded-full shadow-sm">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">PROJECTS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Gemini AI Feature Section */}
        <section id="ai-feature" className="mb-24">
          <GeminiProjectIdeaGenerator />
        </section>

      </main>
      
      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-800">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Seo Yo-han. All Rights Reserved.</p>
        <p className="text-gray-600 text-sm mt-1">이 페이지는 과제 제출용으로 제작되었습니다.</p>
      </footer>
    </div>
  );
}

export default App;
