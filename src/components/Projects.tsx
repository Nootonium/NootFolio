import projects from '../data/projects.json';
import { Tab, Transition } from '@headlessui/react';
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

  const currentTabColors = tabListColors[theme] || tabListColors.light;
  const backgroundImageUrl = new URL(
    `../assets/${projects[selectedTabIndex].image_url}`,
    import.meta.url,
  ).href;

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundPosition: 'center', // This will center the background image
        backgroundSize: 'cover', // This ensures the background covers the available space
        backgroundRepeat: 'no-repeat', // This stops the image from repeating
      }}
      className={`flex h-screen w-screen snap-start flex-col gap-y-1 px-6 pt-8 ${tabClasses[theme]}`}
    >
      <h1
        className={`font-JetBrainsMono text-5xl tracking-tighter sm:text-6xl ${headingClasses[theme]}`}
      >
        {t('title')}
      </h1>
      <Tab.Group onChange={setSelectedTabIndex}>
        <Tab.List className='flex space-x-2 overflow-x-auto whitespace-nowrap rounded-md bg-opacity-20 pb-1 pt-2'>
          {projects.map((project, index) => (
            <Tab
              key={index}
              className={`min-w-32 max-w-xs truncate rounded-lg px-4 py-2 text-base font-medium transition-transform hover:scale-105 hover:transform
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
  );
}
export default Projects;
