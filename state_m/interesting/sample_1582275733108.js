function main() {
const v4 = eval(1337);
// v4 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
const v5 = Function.apply(v4,arguments);
// v5 = .unknown
}
%NeverOptimizeFunction(main);
main();
