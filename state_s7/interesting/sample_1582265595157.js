function main() {
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
const v6 = String.fromCodePoint(0,65535,0,4);
// v6 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
let v9 = 0;
let v13 = 0;
}
%NeverOptimizeFunction(main);
main();
