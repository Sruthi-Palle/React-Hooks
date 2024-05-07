import { useEffect, useState } from "react";

export const UseDebounce = (searchVal, delay = 500) => {
  const [debounceVal, setDebounceVal] = useState(searchVal);
  useEffect(() => {
    //change debounce value after 500 milliseconds
    let timeout = setTimeout(() => {
      setDebounceVal(searchVal);
    }, delay);
    //clear timeout if searchVal changes
    return () => clearTimeout(timeout);
  }, [searchVal, delay]);
  return debounceVal;
};
