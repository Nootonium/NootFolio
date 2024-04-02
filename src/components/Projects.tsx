import projects from '../data/projects.json';
import { Tab } from '@headlessui/react';
import ProjectCard from './ProjectCard';
import { useTheme } from '../hooks/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Projects() {
  const { theme } = useTheme();
  const { t } = useTranslation('projects');
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const tabClasses = {
    light: 'text-black',
    dark: 'text-white',
    rainbow: 'bg-rainbow-300',
  };
  const headingClasses = {
    light: 'text-fuchsia-600',
    dark: 'text-teal-400',
    rainbow: '',
  };
  const heading2Classes = {
    light: 'text-blue-600',
    dark: 'text-lime-300',
    rainbow: '',
  };

  const backgroundImageUrl = projects[selectedTabIndex].image_url;

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      className={`flex h-screen w-screen snap-start flex-col gap-y-1 px-6 pt-8 ${tabClasses[theme]}`}
    >
      <h1
        className={`font-JetBrainsMono text-5xl tracking-tighter sm:text-6xl ${headingClasses[theme]}`}
      >
        {t('title')}
      </h1>
      <Tab.Group onChange={setSelectedTabIndex}>
        <Tab.List className='flex space-x-1 rounded-xl bg-black/20 p-1'>
          {projects.map((project, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.pt-10] hover:text-white'
              }
            >
              {project.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {projects.map((project, index) => (
            <Tab.Panel key={index}>
              <ProjectCard
                project={{
                  ...project,
                  description: t(`projects.${project.id}.description`),
                }}
                projectIndex={index}
                totalProjects={projects.length}
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
export default Projects;
