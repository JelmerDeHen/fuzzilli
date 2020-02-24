function main() {
const v4 = String.fromCharCode(10,-65537);
// v4 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v5 = RegExp(v4);
// v5 = .object()
}
%NeverOptimizeFunction(main);
main();
