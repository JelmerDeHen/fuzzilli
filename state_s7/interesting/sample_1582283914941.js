function main() {
let v1 = 13.37;
const v5 = String.fromCharCode(v1,-65537);
// v5 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v6 = RegExp(v5);
// v6 = .object()
}
%NeverOptimizeFunction(main);
main();
