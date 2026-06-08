import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <img src="/brand/illustrations/hero.svg" alt="" />
      </div>
      <div className="container">
        <p className="kicker hero-kicker">{t('hero.kicker')}</p>
        <h1>
          {t('hero.title_pre')}{' '}
          <span className="hl"><span>{t('hero.title_hl')}</span></span>
        </h1>
        <p className="lede">{t('hero.lede')}</p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#contact">{t('hero.cta_primary')}</a>
          <a className="btn btn-ghost" href="#what">{t('hero.cta_secondary')}</a>
        </div>
      </div>
    </section>
  );
}
