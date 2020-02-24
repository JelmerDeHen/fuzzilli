function main() {
let v1 = 1337;
const v4 = String.fromCodePoint(v1,65536);
// v4 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
