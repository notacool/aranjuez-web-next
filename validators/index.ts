export function mailValidator(input: string): string {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(input) ? "" : "forms.error.invalidEmail";
}
export function notEmptyValidator(input: string): string {
  return input && input.length >= 1 ? "" : "forms.error.notEmpty";
}
export function haveNumbersValidator(input: string): string {
  return /(?=.*\d).*/.test(input) ? "" : "forms.error.noNumbers";
}
export function minLength8Validator(input: string): string {
  return input.length >= 8 ? "" : "forms.error.minLength8";
}
export function authCodeValidator(value: string): string {
  return /^[0-9]{6}$/.test(value) ? "" : "forms.error.invalidAuthCode";
}

export function upperLowerCaseValidator(input: string): string {
  return /(?=.*[A-Z])(?=.*[a-z]).*/.test(input)
    ? ""
    : "forms.error.upperLowerCase";
}

export function phoneValidator(input: string): string {
  return /^\d{9}$/.test(input) ? "" : "forms.error.invalidPhone";
}
