function main() {
let v3 = 0;
const v6 = Symbol.for("eTm8XK*Max");
// v6 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v12 = Symbol.keyFor(v6);
// v12 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v13 = typeof "boolean";
// v13 = .string
const v15 = v13 === "number";
// v15 = .boolean
const v16 = v3 + 1;
// v16 = .primitive
v3 = v16;
}
%NeverOptimizeFunction(main);
main();
