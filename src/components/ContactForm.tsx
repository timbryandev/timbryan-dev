import React, { useState } from 'react';

import { AppConfig } from '../utils/AppConfig';

const ERROR = 'ERROR';
const IDLE = 'IDLE';
const SENDING = 'SENDING';
const SUCCESS = 'SUCCESS';

type Status = typeof ERROR | typeof IDLE | typeof SENDING | typeof SUCCESS;

interface State {
  error?: string | null;
  email: string;
  message: string;
  name: string;
  status: Status;
}

type UpdateState = Partial<State>;

const INITIAL_STATE: State = {
  error: null,
  email: '',
  message: '',
  name: '',
  status: IDLE,
};

export const ContactForm = (): JSX.Element => {
  const [state, setState] = useState<State>(INITIAL_STATE);

  function updateState(newState: UpdateState) {
    setState((prev) => ({ ...prev, ...newState }));
  }

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const xhr = new window.XMLHttpRequest();
    updateState({ status: SENDING, error: null });

    if (state.email === '' || state.message === '') {
      updateState({
        status: ERROR,
        error: 'You must supply a valid message and email address',
      });
      return;
    }

    const data = new window.FormData();
    data.append('email', state.email);
    data.append('message', state.message);
    data.append('name', state.name);

    xhr.open('POST', AppConfig.contactFormUrl);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== window.XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        updateState({ status: SUCCESS });
      } else {
        updateState({
          status: ERROR,
          error: 'There was a problem submitting this form - please try again.',
        });
      }
    };
    xhr.send(data);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmitForm}>
      <fieldset
        disabled={state.status === ERROR}
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
              updateState({ email: e.target.value })
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
              updateState({ name: e.target.value })
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
              updateState({ message: e.target.value })
            }
          />
        </div>

        <div>
          {state.status === SUCCESS ? (
            <p>Thanks!</p>
          ) : (
            <button type="submit" className="button primary">
              Submit
            </button>
          )}
          {state.status === ERROR && <p>{state.error}</p>}
        </div>
      </fieldset>
    </form>
  );
};
