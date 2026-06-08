import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Mark from './Mark.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';

const LINKS = [
  { href: '#what', key: 'what' },
  { href: '#how', key: 'how' },
  { href: '#domains', key: 'domains' },
  { href: '#ai', key: 'ai' },
  { href: '#contact', key: 'contact' },
];

export default function Nav() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="nav-brand" onClick={close}>
            <Mark className="mk" />
            <span className="wm">Fledge</span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>{t(`nav.${l.key}`)}</a>
            ))}
          </nav>

          <div className="nav-right">
            <LanguageSwitcher />
            <a className="btn btn-primary" href="#contact">{t('nav.cta')}</a>
            <button
              type="button"
              className="nav-burger"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? (
                  <>
                    <path d="M6 6L18 18" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7H20" />
                    <path d="M4 12H20" />
                    <path d="M4 17H20" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className={`nav-mobile ${open ? 'open' : ''}`} aria-hidden={!open}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>{t(`nav.${l.key}`)}</a>
        ))}
        <a className="btn btn-primary" href="#contact" onClick={close}>{t('nav.cta')}</a>
      </div>
    </>
  );
}
