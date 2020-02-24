function main() {
const v4 = "iterator".padEnd(1337,Promise);
// v4 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v8 = parseFloat(v4);
// v8 = .float
}
%NeverOptimizeFunction(main);
main();
