import { useTranslation } from 'react-i18next';

export default function Tech() {
  const { t } = useTranslation();
  const items = t('tech.items', { returnObjects: true }) || [];
  return (
    <section className="section" id="tech">
      <div className="container">
        <div className="section-head">
          <span className="no">{t('tech.no')}</span>
          <h2>{t('tech.title')}</h2>
        </div>
        <p className="section-sub">{t('tech.sub')}</p>
        <div className="tech-pills">
          {items.map((tech) => (
            <span className="tech-pill" key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
