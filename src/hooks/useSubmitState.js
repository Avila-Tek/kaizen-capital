import React, { useState } from 'react';

/**
 * Hook that controls the disabled state and the display child of a submit Button.
 *
 * @param {Function: Promise<any>} cbPromise:
 *  Callback function to execute on submit. Must return a promise.
 * @param {String} initialText:
 *  Text to display on unsubmitted status.
 * @param {React.Component} Spinner:
 *  Custom component to render while the callback promise is pending.
 * @param {String} finalText:
 *  Text to display when callback promise is fullfilled.
 *
 * @return [
 *  @param {boolean} disabled:
 *  Disable status. Once the handler is called. Disables the button.
 *  @param {String || React.Component} submit:
 *  Child to display inside the button.
 *  @param {Function} submitHandler:
 *  function to be called either on form's onSubmit or on the submit's handler function.
 * ]
 *
 * @author Maximiliano Casale
 */
export const useSubmitState = (cbPromise, initialText, Spinner, finalText = 'Thank you!') => {
  const [child, setChild] = useState(initialText);
  const [disabled, setDisabled] = useState(false);

  async function submitHandler(event) {
    setDisabled(true);
    setChild(<Spinner />);
    try {
      await cbPromise(event);
      setChild(finalText);
    } catch (error) {
      throw new Error(error);
    }
  }
  return [disabled, child, submitHandler];
};
