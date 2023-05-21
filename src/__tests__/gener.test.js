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

test('Password include capital letter', ()=> {
  const password = gen_pass(7, true, true, true, false);
  expect(/[A-Z]/.test(password)).toBe(false);
});