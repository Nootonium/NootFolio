import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/ThemeContext';

function Experience() {
  const { theme } = useTheme();
  const { t } = useTranslation('Experience');

  const experienceClasses = {
    light: 'bg-white bg-opacity-80 text-black',
    dark: 'bg-black bg-opacity-70 text-white',
    rainbow: '',
  };

  const headingClasses = {
    light: 'text-fuchsia-600',
    dark: 'text-teal-400',
    rainbow: '',
  };

  return (
    <div className={`flex min-h-screen snap-start justify-center ${experienceClasses[theme]}`}>
      poop
    </div>
  );
}

export default Experience;
