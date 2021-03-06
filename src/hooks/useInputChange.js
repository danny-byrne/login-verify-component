import { useState } from 'react';

const useInputChange = val => {
  const [value, setValue] = useState(val);
  return {
    value,
    setValue,
    bind: { 
      value,
      onChange: e => {
        setValue(e.target.value);
      }
    }
  };
};

export default useInputChange;