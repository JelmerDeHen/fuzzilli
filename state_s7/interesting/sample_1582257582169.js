function main() {
const v4 = "iterator".padEnd(1337,Promise);
// v4 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v8 = parseFloat(v4);
// v8 = .float
}
%NeverOptimizeFunction(main);
main();
