import { gen_pass } from "../scripts/gener";

test('Check password lenght', () => {
  const passwordLen = 4;
  const password = gen_pass(passwordLen, true, true, true, true);
  expect(password.length).toBe(passwordLen);
});

test('Password include capital letter', ()=> {
  const password = gen_pass(7, true, true, true, true);
  expect(/[A-Z]/.test(password)).toBe(true);
});

test('Password doesnot include capital letter', ()=> {
  const password = gen_pass(7, true, true, true, false);
  expect(/[A-Z]/.test(password)).toBe(false);
});

test('Password include lowercase letter', ()=> {
  const password = gen_pass(7, true, true, true, true);
  expect(/[a-z]/.test(password)).toBe(true);
});

test('Password doesnot include lowercase letter', ()=> {
  const password = gen_pass(7, true, false, true, true);
  expect(/[a-z]/.test(password)).toBe(false);
});

test('Password include symbols', ()=> {
  const password = gen_pass(7, true, true, true, true);
  expect(/[!-?]/.test(password)).toBe(true);
});

test('Password doesnot include symbols', ()=> {
  const password = gen_pass(7, true, true, false, true);
  expect(/[!-?]/.test(password)).toBe(false);
});

test('Password include numbers', ()=> {
  const password = gen_pass(7, true, true, true, true);
  expect(/[0-9]/.test(password)).toBe(true);
});

test('Password doesnot include numbers', ()=> {
  const password = gen_pass(7, false, true, true, false);
  expect(/[0-9]/.test(password)).toBe(false);
});
