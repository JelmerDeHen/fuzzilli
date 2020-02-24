function main() {
const v4 = String.fromCharCode(10,-65537);
// v4 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v5 = RegExp(v4);
// v5 = .object()
}
%NeverOptimizeFunction(main);
main();
