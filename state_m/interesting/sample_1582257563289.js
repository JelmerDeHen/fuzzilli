function main() {
const v4 = "iterator".padEnd(1337,Promise);
// v4 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
const v8 = parseFloat(v4);
// v8 = .float
}
%NeverOptimizeFunction(main);
main();
