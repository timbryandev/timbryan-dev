import React, { useState } from 'react';

import { AppConfig } from '../utils/AppConfig';

export const ContactForm = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    const xhr = new window.XMLHttpRequest();
    setStatus('SENDING');

    if (email === '' || message === '') {
      setStatus('ERROR');
      return;
    }

    event.preventDefault();

    const data = new window.FormData();
    data.append('email', email);
    data.append('message', message);
    data.append('name', name);

    xhr.open('POST', AppConfig.contactFormUrl);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== window.XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmitForm}>
      <fieldset
        disabled={status !== '' && status !== 'ERROR'}
        className="disabled:opacity-50"
      >
        <legend className="text-transparent">Contact Me</legend>
        <div className="mb-6">
          <label htmlFor="email" className="form-label">
            Your email
          </label>
          <input
            className="form-input"
            placeholder="hello@example.com"
            id="email"
            name="email"
            type="email"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className="mb-6">
          <label htmlFor="name" className="form-label">
            Your name
          </label>
          <input
            className="form-input"
            required
            id="name"
            name="name"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="form-label">
            Your message
          </label>
          <textarea
            className="form-input"
            id="message"
            name="message"
            required
            rows={6}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
          />
        </div>

        <div>
          {status && <p>{status}</p>}
          {status === 'SUCCESS' ? (
            <p>Thanks!</p>
          ) : (
            <button type="submit" className="button primary">
              Submit
            </button>
          )}
          {status === 'ERROR' && (
            <p>Ooops - something went wrong! Please try submitting again.</p>
          )}
        </div>
      </fieldset>
    </form>
  );
};
