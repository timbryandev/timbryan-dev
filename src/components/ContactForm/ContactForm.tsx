import { FormEvent, useState } from 'react';

import { AppConfig } from '../../AppConfig';
import { validateEmail, validateMessage } from '../../utils/vValidate';
import { ErrorAlert, SuccessAlert } from '../Alerts';

const ERROR = 'ERROR';
const IDLE = 'IDLE';
const SENDING = 'SENDING';
const SUCCESS = 'SUCCESS';

type Status = typeof ERROR | typeof IDLE | typeof SENDING | typeof SUCCESS;

interface State {
  error: string;
  email: string;
  message: string;
  name: string;
  status: Status;
}

type UpdateState = Partial<State>;

const INITIAL_STATE: State = {
  error: '',
  email: '',
  message: '',
  name: '',
  status: IDLE,
};

const ContactForm = (): JSX.Element => {
  const [state, setState] = useState<State>(INITIAL_STATE);

  function updateState(newState: UpdateState) {
    setState((prev) => ({ ...prev, ...newState }));
  }

  function setField(key: string, value: string) {
    updateState({ [key]: String(value).trim() });
  }

  const handleSubmitForm = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    // Reset the form to SENDING status
    updateState({ status: SENDING, error: '' });

    // Validate mandatory inputs
    if (!validateEmail(state.email)) {
      updateState({
        status: ERROR,
        error: 'You must supply a valid email address',
      });

      return;
    }

    if (!validateMessage(state.message)) {
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

  if (state.status === SUCCESS) {
    return (
      <SuccessAlert
        heading="Thank you for getting in touch!"
        text="I aim to respond to messages within 24 hours - so hold tight!"
      />
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmitForm}>
      <fieldset disabled={[SENDING, SUCCESS].includes(state.status)}>
        <legend>Contact Me</legend>
        <section className="contact-form__group">
          <label htmlFor="email" className="contact-form__label">
            Email
          </label>
          <input
            className="contact-form__input"
            placeholder="hello@example.com"
            id="email"
            name="email"
            type="email"
            required
            onChange={(e) => setField('email', e.target.value)}
          />
        </section>
        <section className="contact-form__group">
          <label htmlFor="name" className="contact-form__label">
            Name
          </label>
          <input
            className="contact-form__input"
            id="name"
            name="name"
            type="text"
            onChange={(e) => setField('name', e.target.value)}
          />
        </section>
        <section className="contact-form__group">
          <label htmlFor="message" className="contact-form__label">
            Message
          </label>
          <textarea
            className="contact-form__input"
            id="message"
            name="message"
            required
            rows={6}
            onChange={(e) => setField('message', e.target.value)}
          />
        </section>

        <section>
          <button type="submit">
            {state.status === SENDING ? 'Sending' : 'Send'}
          </button>
          {state.status === ERROR && (
            <ErrorAlert
              heading="Ooops, something isn't right!"
              text={state.error}
            />
          )}
        </section>
      </fieldset>
    </form>
  );
};

export default ContactForm;
