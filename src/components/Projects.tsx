import projects from '../data/projects.json';
import { Tab, Transition } from '@headlessui/react';
import ProjectCard from './ProjectCard';
import { useTheme } from '../hooks/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import ProjectBackground from './ProjectBackground';

function Projects() {
  const { theme } = useTheme();
  const { t } = useTranslation('projects');
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const headingClasses = {
    light: 'text-fuchsia-600',
    dark: 'text-teal-400',
    rainbow: '',
  };

  const tabListColors = {
    light: {
      selectedBg: 'bg-blue-600',
      selectedText: 'text-white',
      notSelectedBg: 'bg-white bg-opacity-90',
      notSelectedText: 'text-black',
    },
    dark: {
      selectedBg: 'bg-lime-400',
      selectedText: 'text-black',
      notSelectedBg: 'bg-black bg-opacity-75',
      notSelectedText: 'text-white',
    },
    rainbow: {
      selectedBg: 'bg-purple-500',
      selectedText: 'text-white',
      notSelectedBg: 'bg-indigo-500',
      notSelectedText: 'text-pink-500',
    },
  };

  useEffect(() => {
    const urls = projects.map(project =>
      project.image_url ? new URL(`../assets/${project.image_url}`, import.meta.url).href : ''
    );
    setImageUrls(urls);
  }, []);

  const currentTabColors = tabListColors[theme] || tabListColors.light;

  return (
    <div className='relative flex h-screen w-screen snap-start'>
      <ProjectBackground imageUrls={imageUrls} currentIndex={selectedTabIndex} />
      <div className='absolute inset-0 flex h-full w-full max-w-7xl flex-col px-6 pb-16 pt-4 sm:pt-12'>
        <h1
          className={`font-JetBrainsMono text-5xl tracking-tighter sm:text-6xl ${headingClasses[theme]}`}
        >
          {t('title')}
        </h1>
        <Tab.Group onChange={setSelectedTabIndex}>
          <Tab.List className='flex flex-none space-x-2 overflow-x-auto whitespace-nowrap rounded-sm bg-opacity-20 pb-1 pt-2'>
            {projects.map((project, index) => (
              <Tab
                key={index}
                className={`flex rounded-sm px-4 py-2 text-base font-medium transition-transform hover:scale-105 hover:transform
              ${
                selectedTabIndex === index
                  ? currentTabColors.selectedBg + ' ' + currentTabColors.selectedText
                  : currentTabColors.notSelectedBg + ' ' + currentTabColors.notSelectedText
              }
              `}
                title={project.title}
              >
                {project.title}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {projects.map((project, index) => (
              <Tab.Panel key={index}>
                <Transition
                  appear
                  show={selectedTabIndex == index}
                  enter='transition-opacity duration-500'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='transition-opacity duration-500'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <ProjectCard
                    project={{
                      ...project,
                      description: t(`projects.${project.id}.description`),
                    }}
                    projectIndex={index}
                    totalProjects={projects.length}
                  />
                </Transition>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
export default Projects;
