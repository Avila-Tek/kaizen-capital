const validate = language => values => {
  const errors = {};

  if (values.email && values.email.touched) {
    if (!values.email.value) {
      errors.email = language.FormEmailErrorRequired;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(values.email.value)) {
      errors.email = language.FormEmailErrorWrong;
    }
  }

  if (values.phone && values.phone.touched) {
    if (!values.phone.value) {
      errors.phone = language.FormPhoneErrorRequired;
    } else if (!/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/i.test(values.phone.value)) {
      errors.phone = language.languageDropdown.language == 'español' ? 'Ingresa un número valido (ejem: +584141234567 / 04141234567).': 'Enter a valid number (example: +011234567).';
    }
  }

  if (values.name && values.name.touched) {
    if (!values.name.value) {
      errors.name = language.FormNameErrorRequired;
    }
  }

  if (values.msg && values.msg.touched) {
    if (!values.msg.value) {
      errors.msg = language.FormMsgErrorRequired;
    }
  }

  return errors;
};

export default validate;
