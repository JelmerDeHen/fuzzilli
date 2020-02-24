function main() {
let v1 = RegExp;
let v2 = v1;
const v5 = new String(v2,Object);
// v5 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v6 = Object.freeze(v5);
// v6 = .undefined
for (const v7 in v5) {
}
}
%NeverOptimizeFunction(main);
main();
