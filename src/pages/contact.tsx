import { useState } from 'react';

import { AppConfig } from '../AppConfig';
import ContactForm from '../components/ContactForm';
import { Content } from '../layout/Content';
import { Main } from '../layout/Main';
import { Meta } from '../layout/Meta';

const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);
  return (
    <Main
      meta={
        <Meta
          title="Contact"
          description="How to get in touch with TimBryanDev"
        />
      }
    >
      <Content>
        <p>
          The easiest ways to get in touch would be to find me on{' '}
          <a className="link" href="https://www.linkedin.com/in/timbryandev/">
            LinkedIn
          </a>
          , using the contact form below, or email me via{' '}
          {showEmail ? (
            <a href={`mailto:${AppConfig.email}`} className="link">
              {AppConfig.email}
            </a>
          ) : (
            <button className="button" onClick={() => setShowEmail(true)}>
              reveal email
            </button>
          )}{' '}
          - I&apos;m very friendly!
        </p>
        <ContactForm />
      </Content>
    </Main>
  );
};

export default Contact;
