function main() {
const v4 = String.fromCharCode(10,-65537);
// v4 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
const v5 = RegExp(v4);
// v5 = .object()
}
%NeverOptimizeFunction(main);
main();
