import { useTranslation } from 'react-i18next';
import DomainIcon from '../components/DomainIcon.jsx';

const KEYS = ['ecommerce', 'restaurants', 'beauty', 'events', 'civic'];

export default function Domains() {
  const { t } = useTranslation();
  return (
    <section className="section" id="domains">
      <div className="container">
        <div className="section-head">
          <span className="no">{t('domains.no')}</span>
          <h2>{t('domains.title')}</h2>
        </div>
        <span className="domains-tag">{t('domains.tag')}</span>
        <div className="domains-grid">
          {KEYS.map((key) => {
            const bullets = t(`domains.${key}.bullets`, { returnObjects: true }) || [];
            return (
              <article className="card domain-card" key={key}>
                <DomainIcon name={key} className="icon" />
                <h3>{t(`domains.${key}.title`)}</h3>
                <p className="intro">{t(`domains.${key}.intro`)}</p>
                <ul>
                  {bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <div className="stack">{t(`domains.${key}.stack`)}</div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
