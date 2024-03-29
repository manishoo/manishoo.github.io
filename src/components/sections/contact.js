import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { openPopupWidget } from 'react-calendly';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .calendly-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-left: 16px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);
  const onCalendlyButtonClick = useCallback(
    () =>
      openPopupWidget({
        url: 'https://calendly.com/manishoo',
        pageSettings: {
          backgroundColor: '#0a1a2e',
          primaryColor: '#ffcc00',
          textColor: '#cbd6f6',
          hideGdprBanner: true,
          hideLandingPageDetails: true,
        },
      }),
    [],
  );

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>
      <h2 className="title">Get In Touch</h2>
      <p>
        I'm not currently actively looking for new opportunities but my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
      <button className="calendly-link" onClick={onCalendlyButtonClick}>
        Let's meet!
      </button>
    </StyledContactSection>
  );
};

export default Contact;
