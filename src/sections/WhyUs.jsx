import { useTranslation } from 'react-i18next';

export default function WhyUs() {
  const { t } = useTranslation();
  const items = t('why.items', { returnObjects: true }) || [];
  return (
    <section className="section" id="why">
      <div className="container">
        <div className="section-head">
          <span className="no">{t('why.no')}</span>
          <h2>{t('why.title')}</h2>
        </div>
        <div className="why-grid">
          {items.map((it) => (
            <div className="why-item" key={it.n}>
              <span className="num">{it.n}</span>
              <div>
                <h4>{it.title}</h4>
                <p>{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
