import { useState, useEffect } from 'react';
import globalValidate from 'utils/validate';

// custom hook for form validations.
export const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);
  const [blurred, setBlurred] = useState(false);

  const onChange = e => {
    setValue(e.target.value);
    if (!touched) setTouched(true);
  };

  const onBlur = () => {
    if (!blurred && touched) {
      setBlurred(true);
    }
  };

  return {
    events: {
      onChange,
      onBlur,
    },
    state: {
      value,
      touched,
      blurred,
    },
    setters: {
      setValue,
      setTouched,
      setBlurred,
    },
  };
};

export const useErrors = (inputs, language) => {
  const validate = globalValidate(language);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const values = Object.entries(inputs)
      .reduce((acc, curr) => [...acc, ...curr], [])
      .filter(val => typeof val === 'object' && !Array.isArray(val))
      .filter(val => val.blurred && val.touched);
    if (values.length) {
      setErrors(validate(inputs));
    }
  }, [JSON.stringify(inputs)]);
  return errors;
};

export const useSubmitReady = (inputs, language) => {
  const validate = globalValidate(language);
  const [submitReady, setSubmitReady] = useState(false);

  const handleSubmitReady = () => {
    const allTouched =
      Object.keys(inputs)
        .map(value => inputs[value].touched)
        .filter(value => !value).length === 0;
    const noErrors = !Object.keys(validate(inputs)).length;
    setSubmitReady(allTouched && noErrors);
  };

  useEffect(() => {
    handleSubmitReady();
  }, [JSON.stringify(inputs)]);
  return submitReady;
};
