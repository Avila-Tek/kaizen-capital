import React, { useContext } from 'react';
import emailjs from 'emailjs-com';
import { useFormInput, useErrors, useSubmitReady } from 'hooks/useForm';
import { useSubmitState } from 'hooks/useSubmitState';
import { LanguageContext } from 'contexts/language-context';
import Spinner from 'components/shared/spinner';
import Section from 'components/shared/section';
import { scss } from 'utils';
import Title from 'components/shared/multi-title';
import styles from './contact.module.scss';

function Form() {
  const language = useContext(LanguageContext);
  const name = useFormInput('');
  const email = useFormInput('');
  const msg = useFormInput('');
  const phone = useFormInput('');

  const nameErrors = useErrors({ name: name.state }, language);
  const emailErrors = useErrors({ email: email.state }, language);
  const msgErrors = useErrors({ msg: msg.state }, language);
  const phoneErrors = useErrors({ phone: phone.state }, language);
  const submitReady = useSubmitReady(
    {
      name: name.state,
      email: email.state,
      phone: phone.state,
      msg: msg.state,
    },
    language
  );

  function formSubmit(e) {
    e.preventDefault();
    const data = {
      name: name.state.value,
      email: email.state.value,
      msg: msg.state.value,
    }
    console.log(e.target)
    emailjs.sendForm('service_9qvi8yf', 'template_rm8kly5', e.target, 'user_tWnZyf1UmLjnJWTZ4bFV6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  
    return fetch('https://hooks.zapier.com/hooks/catch/5452101/oojldc5/', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(response => response.json());
  }

  const [disabled, btnTxt, submitHandler] = useSubmitState(
    formSubmit,
    language.FormCTA,
    Spinner,
    language.FormCTADone
  );

  return (
    <div className={styles.form}>
      <p className={styles.formTitle}>
        {language.FormLine1}
        <br />
        {language.FormLine2}
      </p>
      <form action="https://formsubmit.co/contacto@kaizen-capital.net" method="POST">
        <div className={styles.input}>
          <label htmlFor={language.FormNameField} className={styles.label}>
            <p>{language.FormNameField}</p>
            <input
              id={language.FormNameField}
              name="name"
              {...name.events}
              value={name.state.value}
            />
            <span className={`${styles.errorMessage} ${nameErrors.name ? styles.active : ''}`}>
              {nameErrors.name || ''}
            </span>
          </label>
        </div>

        <div className={styles.input}>
          <label htmlFor={language.FormEmailField} className={styles.label}>
            <p>{language.FormEmailField}</p>
            <input
              id={language.FormEmailField}
              name="email"
              {...email.events}
              value={email.state.value}
              type="email"
            />
            <span className={`${styles.errorMessage} ${emailErrors.email ? styles.active : ''}`}>
              {emailErrors.email || ''}
            </span>
          </label>
        </div>

        <div className={styles.input}>
          <label htmlFor={language.FormPhoneField} className={styles.label}>
            <p>{language.FormPhoneField}</p>
            <input
              id={language.FormPhoneField}
              name="phone"
              {...phone.events}
              value={phone.state.value}
              type="tel"
            />
            <span className={`${styles.errorMessage} ${phoneErrors.phone ? styles.active : ''}`}>
              {phoneErrors.phone || ''}
            </span>
          </label>
        </div>

        <div className={styles.input}>
          <label htmlFor={language.FormMessageField} className={styles.label}>
            <p>{language.FormMessageField}</p>
            <textarea
              id={language.FormMessageField}
              name="msg"
              {...msg.events}
              value={msg.state.value}
              rows="1"
            />
            <span className={`${styles.errorMessage} ${msgErrors.msg ? styles.active : ''}`}>
              {msgErrors.msg || ''}
            </span>
          </label>
        </div>
        <button id="submit" disabled={disabled || !submitReady} type="submit">
          {btnTxt}
        </button>
      </form>
    </div>
  );
}

const propTypes = {};
const defaultProps = {};

function Contact() {
  const language = useContext(LanguageContext);
  return (
    <Section className={styles.section} id={language.ContactId}>
      <Title
        name="Contáctanos"
        teal=""
        white=""
      />
      <Form />
    </Section>
  );
}

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;
