import { StringValidator } from './Validation';
export declare const numberRegexp: RegExp;
export declare class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean;
}
