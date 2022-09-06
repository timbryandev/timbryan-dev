import React, { useState } from 'react';

import { AppConfig } from '../utils/AppConfig';
import { validateEmail, validateMessage } from '../utils/Validate';

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

  function setField(key: string, value: string) {
    updateState({ [key]: String(value).trim() });
  }

  const handleSubmitForm = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    // Reset the form to SENDING status
    updateState({ status: SENDING, error: null });

    // Validate mandatory inputs
    if (!validateEmail(state.email)) {
      updateState({
        status: ERROR,
        error: 'You must supply a valid email address',
      });

      return;
    }

    if (!validateMessage(state.email)) {
      updateState({
        status: ERROR,
        error: 'You must supply a message ',
      });

      return;
    }

    // Do the submission
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

    // If we encounter any errors, inform the user
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
        disabled={[SENDING, SUCCESS].includes(state.status)}
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
              setField('email', e.target.value)
            }
          />
        </div>
        <div className="mb-6">
          <label htmlFor="name" className="form-label">
            Your name
          </label>
          <input
            className="form-input"
            id="name"
            name="name"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setField('name', e.target.value)
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
              setField('message', e.target.value)
            }
          />
        </div>

        <div>
          {state.status === SUCCESS ? (
            <p>
              Thank you for getting in touch. I aim to respond to queries within
              24 hours - so hold tight!
            </p>
          ) : (
            <button type="submit" className="button primary">
              {state.status === SENDING ? 'Sending' : 'Send'}
            </button>
          )}
          {state.status === ERROR && <p>{state.error}</p>}
        </div>
      </fieldset>
    </form>
  );
};
