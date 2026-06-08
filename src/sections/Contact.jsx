import { useTranslation } from 'react-i18next';
import FlightArc from '../components/FlightArc.jsx';

export default function Contact() {
  const { t } = useTranslation();
  const email = t('contact.email');
  const phone = t('contact.phone');
  const phoneTel = phone.replace(/[^+\d]/g, '');
  return (
    <section className="contact" id="contact">
      <div className="container">
        <FlightArc className="contact-arc" />
        <h2>{t('contact.title')}</h2>
        <p className="lede">{t('contact.lede')}</p>
        <a className="contact-email" href={`mailto:${email}`}>
          {email}
        </a>
        <a className="contact-phone" href={`tel:${phoneTel}`}>
          {phone}
        </a>
        <div className="contact-note">{t('contact.note')}</div>
      </div>
    </section>
  );
}
