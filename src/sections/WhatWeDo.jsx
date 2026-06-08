import { useTranslation } from 'react-i18next';

const KEYS = ['web', 'mobile', 'ai'];

export default function WhatWeDo() {
  const { t } = useTranslation();
  return (
    <section className="section" id="what">
      <div className="container">
        <div className="section-head">
          <span className="no">{t('what.no')}</span>
          <h2>{t('what.title')}</h2>
        </div>
        <p className="section-sub">{t('what.sub')}</p>
        <div className="do-grid">
          {KEYS.map((k) => (
            <div className="card do-card" key={k}>
              <h3><span className="dot" />{t(`what.cards.${k}.title`)}</h3>
              <p>{t(`what.cards.${k}.body`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
