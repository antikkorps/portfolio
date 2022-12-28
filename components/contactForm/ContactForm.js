import Image from 'next/image';

export default function ContactForm() {
  return (
    <>
      <div className='wrapper form_wrapper'>
        <div className='container py-4'>
          <form
            id='contactForm'
            action='/api/form'
            method='post'
            className='form_global'
          >
            <Image
              src='/images/contact.jpg'
              alt='contact illustration'
              width='400'
              height='250'
              className='image_contact'
            />
            <div className='mb-3 mt-4'>
              <label className='form-label' htmlFor='prenom'>
                Prénom
              </label>
              <input
                className='form-control'
                id='prenom'
                name='prenom'
                type='text'
                placeholder='Prénom'
              />
            </div>

            <div className='mb-3'>
              <label className='form-label' htmlFor='nom'>
                Nom
              </label>
              <input
                className='form-control'
                id='nom'
                name='nom'
                type='text'
                placeholder='Nom'
              />
            </div>

            <div className='mb-3'>
              <label className='form-label' htmlFor='email'>
                Email Address
              </label>
              <input
                className='form-control'
                id='email'
                name='email'
                type='email'
                placeholder='Email'
              />
            </div>

            <div className='mb-3'>
              <label className='form-label' htmlFor='message'>
                Message
              </label>
              <input
                className='form-control messageBox'
                id='message'
                name='message'
                type='textarea'
                placeholder='Votre message ici'
              ></input>
            </div>

            <div className='d-grid'>
              <button className='btn btn-primary btn-lg' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
