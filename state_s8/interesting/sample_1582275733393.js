function main() {
const v4 = eval(1337);
// v4 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v5 = Function.apply(v4,arguments);
// v5 = .unknown
}
%NeverOptimizeFunction(main);
main();
