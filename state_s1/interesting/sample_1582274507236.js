function main() {
const v1 = Symbol.search;
// v1 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v2 = Symbol.keyFor(v1);
// v2 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
