function main() {
const v1 = Symbol.search;
// v1 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v2 = Symbol.keyFor(v1);
// v2 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
let v9 = 0;
let v12 = 0;
}
%NeverOptimizeFunction(main);
main();
