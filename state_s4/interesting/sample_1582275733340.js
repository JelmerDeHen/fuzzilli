function main() {
const v4 = eval(1337);
// v4 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v5 = Function.apply(v4,arguments);
// v5 = .unknown
}
%NeverOptimizeFunction(main);
main();
