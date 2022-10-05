import { validateEmail, validateMessage } from './validate';

describe('validate:validateEmail', () => {
  it('should accept a valid email', () => {
    const email = 'hi@timbryan.dev';
    const result = validateEmail(email);
    expect(result).toBe(true);
  });

  it('should reject emails with no tld', () => {
    const email = 'hi.all@timbryan';
    const result = validateEmail(email);
    expect(result).toBe(false);
  });

  it('should reject emails with no tld', () => {
    const email = 'hi.all@timbryan';
    const result = validateEmail(email);
    expect(result).toBe(false);
  });

  it('should reject emails with bad prefix', () => {
    const email = 'hi..all@timbryan.dev';
    const result = validateEmail(email);
    expect(result).toBe(false);
  });
});

describe('validate:validateMessage', () => {
  it('should accept messages with a valid length', () => {
    const message = 'Here is my message';
    const result = validateMessage(message);
    expect(result).toBe(true);
  });

  it('should reject messages with 0 length', () => {
    const message = '';
    const result = validateMessage(message);
    expect(result).toBe(false);
  });
});
