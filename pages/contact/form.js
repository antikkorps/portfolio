import Link from 'next/link';
import Navbar from '../../components/navbar/navbar';
import ContactForm from '../../components/contactForm/ContactForm';

export default function Form() {
  return (
    <>
      <Navbar />
      <h1>Contactez-moi</h1>
      <p>
        {' '}
        <Link href='/'>Back to home</Link>
      </p>
      <ContactForm />
    </>
  );
}
