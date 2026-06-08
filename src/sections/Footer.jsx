import { useTranslation } from 'react-i18next';
import Mark from '../components/Mark.jsx';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Mark className="mk" />
          <span>Fledge Systems</span>
        </div>
        <div className="footer-meta">
          {t('footer.copyright')} · <a href="mailto:hello@fledgesys.com">hello@fledgesys.com</a>
        </div>
      </div>
    </footer>
  );
}
