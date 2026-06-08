import { useTranslation } from 'react-i18next';

export default function HowWeWork() {
  const { t } = useTranslation();
  const steps = t('how.steps', { returnObjects: true }) || [];
  return (
    <section className="section" id="how">
      <div className="container">
        <div className="section-head">
          <span className="no">{t('how.no')}</span>
          <h2>{t('how.title')}</h2>
        </div>
        <p className="section-sub">{t('how.sub')}</p>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="num">{s.n}</div>
              <div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
