function main() {
let v3 = 0;
const v6 = Symbol.for("eTm8XK*Max");
// v6 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v12 = Symbol.keyFor(v6);
// v12 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
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
