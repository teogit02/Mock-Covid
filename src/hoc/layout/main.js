import React, { useEffect } from 'react'
import { withTranslation } from 'react-i18next'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import Menu from '../../components/menu'

function LayoutMain(props) {

  const { i18n } = useTranslation();
  const { lang } = useSelector((state) => state.reducer.lang);
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

  return (
    <div>
      <Menu />
      {props.children}
    </div>
  )
}

export default withTranslation()(LayoutMain)