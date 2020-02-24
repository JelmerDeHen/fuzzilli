function main() {
const v4 = String.fromCharCode(10,-65537);
// v4 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
const v5 = RegExp(v4);
// v5 = .object()
}
%NeverOptimizeFunction(main);
main();
