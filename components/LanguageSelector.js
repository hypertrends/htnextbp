import React from 'react';
import {i18n, withTranslation } from '../i18n';
import { Button } from '@material-ui/core';

class LanguageSelector extends React.Component {
  render(){
    const { t } = this.props;
    return(
      <div>
        {t('change-locale')}
        <Button
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
        >
          {t('change')}
        </Button>
      </div>
    );
  }
}

export default withTranslation('common')(LanguageSelector);