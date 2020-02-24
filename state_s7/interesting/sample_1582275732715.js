function main() {
const v4 = eval(1337);
// v4 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v5 = Function.apply(v4,arguments);
// v5 = .unknown
}
%NeverOptimizeFunction(main);
main();
