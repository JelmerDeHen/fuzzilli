function main() {
const v4 = "iterator".padEnd(1337,Promise);
// v4 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v8 = parseFloat(v4);
// v8 = .float
}
%NeverOptimizeFunction(main);
main();
