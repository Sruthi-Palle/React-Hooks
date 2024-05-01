import { useState } from "react";

export const UseLocalStorage = (key, initialValue) => {
  //After reloading the page, retrieve the previously entered values from local storage, if they exist.
  const storedValue = localStorage.getItem(key);

  /*We set the initial state to the value stored in storedValue if it exists;
   otherwise, we use the provided initialValue. This ensures that if there is no stored value for the key, 
  the initial state is initialized with initialValue.*/
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Create a state to store the value
  const [value, setValue] = useState(initial);

  // Update localStorage whenever the state changes
  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  // Clear the value from localStorage and state
  const clearValue = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, updateValue, clearValue];
};
