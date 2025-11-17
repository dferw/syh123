
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:-translate-y-2 flex flex-col">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="inline-block bg-gray-700 text-cyan-300 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
