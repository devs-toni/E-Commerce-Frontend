import { createContext,useState } from "react";

const LanguageContext = createContext();
const initialLanguage = 'en';
const translations = require('../Translation.json');

const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [text, setText] = useState(translations[language]);

  const handleLanguage = (e) => {
    if (e.target.value === 'es') {
      setLanguage('es');
      setText(translations.es);
    } else {
      setLanguage('en');
      setText(translations.en);
    }
  };

  const data = {text,language,handleLanguage};
  return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}

export {LanguageProvider};
export default LanguageContext;
