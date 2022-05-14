import { FC } from 'react';
import LanguageWrapper, { LanguageButton } from 'features/language/language.styles';
import { useLanguage } from 'features/language/index';

const LanguageComponent: FC = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <LanguageWrapper>
      <LanguageButton
        onClick={() => setLanguage('SPANISH')}
        className={language === 'SPANISH' ? 'active' : ''}>
        {t('language.spanish')}
      </LanguageButton>
      <LanguageButton
        onClick={() => setLanguage('ENGLISH')}
        className={language === 'ENGLISH' ? 'active' : ''}>
        {t('language.english')}
      </LanguageButton>
      <LanguageButton
        onClick={() => setLanguage('PORTUGUESE')}
        className={language === 'PORTUGUESE' ? 'active' : ''}>
        {t('language.portuguese')}
      </LanguageButton>
    </LanguageWrapper>
  );
};
export default LanguageComponent;
