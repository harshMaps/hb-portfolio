import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm('personal-website-email', 'template_e6bv7no', form.current!, {
        publicKey: '_QggZp2MEcozDyHp7',
      })
      .then(
        (res) => {
            form.current?.reset();
            alert("Your message was sent!");
        },
        (error) => {
            console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact">
        <div className="container mx-auto md:w-5/6 flex px-20 py-10 flex-col">
            <h1 className="text-3xl md:text-5xl mb-8 text-left" style={{ fontFamily: 'Raleway, sans-serif' }}>Let's Connect!</h1>
            <p className="mb-4 leading-relaxed text-left" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            If you like what you've seen so far or have any questions, feel free to shoot me a message below!
            I'll try to get back to you ASAP :)
            </p>
        </div>
            <div className="grid lg:grid-cols-3 justify-center">
                <div></div>
                <div className="col-span-1 flex justify-center items-center">
                    <form ref={form} onSubmit={sendEmail} className="w-full">
                        <div className='pb-4 text-left'>
                            <label>Your Name</label>
                            <input name="user_name" className='text-dark-purple rounded-lg mt-1 px-2 py-1 w-full'/>
                        </div>
                        <div className='pb-4 text-left'>
                            <label>Your Email</label>
                            <input name="user_email" className='text-dark-purple rounded-lg mt-1 px-2 py-1 w-full'/>
                        </div>
                        <div className='pb-4 text-left'>
                            <label>Message</label>
                            <textarea name="message" className='text-dark-purple rounded-lg mt-1 px-2 py-1 w-full'></textarea>
                        </div>
                        <div className='my-4'>
                            <input type="submit" value="Send" className="inline-flex mb-4 lg:mb-0 text-dark-purple bg-white border-0 py-2 px-6 focus:outline-none hover:bg-light-purple rounded-full md:text-lg text-center"/>
                        </div>
                    </form>
                </div>
            </div>
        {/* </div> */}
    </section>




  );
};
