import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <div className='absolute right-24 top-6'>
      <button onClick={() => changeLanguage('en')}>En</button>
      <button onClick={() => changeLanguage('fr')}>Fr</button>
    </div>
  );
}

export default LanguageSelector;
