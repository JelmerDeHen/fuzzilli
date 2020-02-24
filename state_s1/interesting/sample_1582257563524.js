function main() {
const v4 = "iterator".padEnd(1337,Promise);
// v4 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
const v8 = parseFloat(v4);
// v8 = .float
}
%NeverOptimizeFunction(main);
main();
