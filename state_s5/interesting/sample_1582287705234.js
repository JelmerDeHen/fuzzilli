function main() {
let v1 = 13.37;
const v5 = String.fromCharCode(v1,255);
// v5 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v6 = parseInt(v5);
// v6 = .integer
}
%NeverOptimizeFunction(main);
main();
