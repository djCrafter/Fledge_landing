import { useTranslation } from 'react-i18next';

export default function AI() {
  const { t } = useTranslation();
  const items = t('ai.items', { returnObjects: true }) || [];
  return (
    <section className="section" id="ai">
      <div className="container">
        <div className="ai-wrap">
          <div className="ai-inner">
            <div>
              <span className="kicker">{t('ai.no')} · AI</span>
              <h2 style={{ marginTop: 16 }}>{t('ai.title')}</h2>
              <p className="lede">{t('ai.lede')}</p>
              <div className="ai-models">{t('ai.models')}</div>
            </div>
            <ul className="ai-list">
              {items.map((it, i) => <li key={i}>{it}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
