function main() {
const v4 = eval(1337);
// v4 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v5 = Function.apply(v4,arguments);
// v5 = .unknown
}
%NeverOptimizeFunction(main);
main();
