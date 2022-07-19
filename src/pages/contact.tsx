import React, { useState } from 'react';

import { ContactForm } from '../components/ContactForm';
import { Main } from '../components/Main';
import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

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
          <a
            className="pointer"
            href="https://www.linkedin.com/in/timbryandev/"
          >
            LinkedIn
          </a>
          , using the contact form below, or email me via{' '}
          {showEmail ? (
            <a href={`mailto:${AppConfig.email}`}>{AppConfig.email}</a>
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
