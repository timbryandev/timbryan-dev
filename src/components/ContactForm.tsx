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

  const handleSubmitForm = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    updateState({ status: SENDING, error: null });

    if (state.email === '') {
      updateState({
        status: ERROR,
        error: 'You must supply a valid email address',
      });

      return;
    }

    if (state.message === '') {
      updateState({
        status: ERROR,
        error: 'You must supply a message ',
      });

      return;
    }

    const response = await fetch(AppConfig.contactFormUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: state.email,
        message: state.message,
        name: state.name,
      }),
    });

    if (response.ok === false) {
      updateState({
        status: ERROR,
        error: 'There was a problem submitting this form - please try again.',
      });

      return;
    }

    updateState({ status: SUCCESS });
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
