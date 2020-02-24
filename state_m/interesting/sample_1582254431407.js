function main() {
const v3 = {};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v4 = v3;
const v5 = {...13.37,...v3,..."symbol",...1337,...v4};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"], withMethods: ["charAt", "charCodeAt", "endsWith", "repeat", "substring", "padEnd", "trim", "lastIndexOf", "padStart", "codePointAt", "startsWith", "replace", "concat", "slice", "split", "indexOf", "includes"])
}
%NeverOptimizeFunction(main);
main();
