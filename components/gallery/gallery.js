import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
  return (
    <>
      <div className='gallery-container bg-dark'>
        <div className='d-block text-center pt-5 pb-5'>
          <h2 className='fw-light title-gallery'>
            Bienvenue sur mon portefolio
          </h2>
          <p className='lead subtitle-gallery'>
            Vous trouverez ici quelques exemples de réalisations:
          </p>
        </div>
        <div className='section-fluid-main bg-dark'>
          <div className='section-row'>
            <div className='section-col'>
              <div className='section'>
                <div className='section-in'>
                  <Image
                    src='/images/contact.jpg'
                    alt=''
                    width={400}
                    height={200}
                  />
                </div>
              </div>
            </div>

            <div className='section-col'>
              <div className='section'>
                <div className='section-in'>
                  <Image
                    src='/images/contact.jpg'
                    alt=''
                    width={400}
                    height={200}
                  />
                </div>
              </div>
            </div>

            <div className='section-col'>
              <div className='section'>
                <div className='section-in'>
                  <Image
                    src='/images/contact.jpg'
                    alt=''
                    width={400}
                    height={200}
                  />
                </div>
              </div>
            </div>

            <div className='section-col'>
              <div className='section'>
                <div className='section-in'>
                  <Image
                    src='/images/contact.jpg'
                    alt=''
                    width={400}
                    height={200}
                  />
                </div>
              </div>
            </div>

            <div className='section-col'>
              <div className='section'>
                <div className='section-in'>
                  <Image
                    src='/images/contact.jpg'
                    alt=''
                    width={400}
                    height={200}
                  />
                </div>
              </div>
            </div>

            <div className='section-col'>
              <div className='section'>
                <div className='section-in'>
                  <Image
                    src='/images/contact.jpg'
                    alt=''
                    width={400}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>

          <h2 className='d-flex justify-content-center subtitle-gallery'>
            Et tellement d&#39;autres...
          </h2>
        </div>
      </div>
    </>
  );
}
