declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
  declare const Buffer: { from: (str: string) => { toString: (str: string) => string } };
}

export {};
