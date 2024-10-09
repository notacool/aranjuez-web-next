import { useEffect, useState } from "react";
export const useValidator = (
  input: string,
  validators: { (input: string): string }[]
): [boolean, boolean, string, { (): boolean }] => {
  const [dirty, setDirty] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (!dirty && input) {
      setDirty(true);
    }
    for (const validator of validators) {
      const e = validator(input);
      if (e) {
        setError(true);
        setMessage(e);
        return;
      }
    }
    setError(false);
    setMessage("");
  }, [input]);

  const validate = () => {
    for (const validator of validators) {
      const e = validator(input);
      if (e) {
        setDirty(true);
        setError(true);
        setMessage(e);
        return false;
      }
    }
    return true;
  };
  return [dirty, error, message, validate];
};
