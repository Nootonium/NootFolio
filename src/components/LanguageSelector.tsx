import { Listbox } from '@headlessui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/ThemeContext';

interface Language {
  id: string;
  name: string;
}

const languages: Language[] = [
  { id: 'en', name: 'English' },
  { id: 'fr', name: 'Français' },
  { id: 'es', name: 'Español' },
];

function LanguageSelector() {
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const changeLanguage = (language: Language) => {
    i18n.changeLanguage(language.id);
    setSelectedLanguage(language);
  };

  const buttonClasses = {
    light: 'bg-neutral-200 text-black opacity-90',
    dark: 'bg-black text-white opacity-70',
    rainbow: 'bg-gradient-to-r from-red-400 via-green-400 to-blue-400',
  };

  const optionsClasses = {
    light: 'bg-neutral-200 text-black',
    dark: 'bg-black opacity-80 text-white',
    rainbow: 'bg-gradient-to-r from-red-400 via-green-400 to-blue-400',
  };

  const activeClasses = {
    light: 'bg-fuchsia-600 text-white',
    dark: 'bg-neutral-700',
    rainbow: 'bg-white text-black',
  };

  const inactiveClasses = {
    light: 'text-black',
    dark: 'text-white',
    rainbow: 'text-black',
  };

  return (
    <div
      data-tip='Language'
      className='tooltip tooltip-left tooltip-info absolute right-20 top-5 font-JetBrainsMono '
    >
      <Listbox value={selectedLanguage} onChange={changeLanguage}>
        <Listbox.Button className={`rounded-md px-2 py-1 ${buttonClasses[theme]}`}>
          {selectedLanguage.name}
        </Listbox.Button>
        <Listbox.Options
          className={`absolute mt-1 rounded-md border shadow-lg ${optionsClasses[theme]}`}
        >
          {languages.map(language => (
            <Listbox.Option
              key={language.id}
              value={language}
              className={({ active }) =>
                `cursor-pointer select-none px-2 py-1 text-left first:rounded-t-md last:rounded-b-md ${
                  active ? activeClasses[theme] : inactiveClasses[theme]
                }`
              }
            >
              {language.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}

export default LanguageSelector;
