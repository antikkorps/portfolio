import Link from 'next/link';

export default function Maintop() {
  return (
    <section className='py-5 text-center container maintop'>
      <div className='row py-lg-5'>
        <div className='col-lg-6 col-md-8 mx-auto'>
          <h1 className='fw-light'>Bienvenue sur mon portefolio</h1>
          <p className='lead text-muted'>
            Vous trouverez ici quelques exemples de réalisations.
          </p>
          <p>
            <Link
              href='#gallery-portfolio'
              className='btn btn-secondary my-2 mx-2'
            >
              Voir les réalisations
            </Link>
            <Link href='/contact/form' className='btn btn-primary my-2 mx-2'>
              Contactez-moi!
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
