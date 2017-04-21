import { ZipCodeValidator } from '../src/ZipCodeValidator'
const validator = new ZipCodeValidator();
console.log(validator.isAcceptable('1234a'))