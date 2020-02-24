function main() {
let v3 = 0;
let v6 = 0;
const v10 = "unscopable".concat(100);
// v10 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v11 = v10.trim();
// v11 = .undefined
const v12 = v6 + 1;
// v12 = .primitive
v6 = v12;
}
%NeverOptimizeFunction(main);
main();
