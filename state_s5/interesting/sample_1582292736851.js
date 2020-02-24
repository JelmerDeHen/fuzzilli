function main() {
let v1 = RegExp;
let v2 = v1;
const v5 = new String(v2,Object);
// v5 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v6 = Object.freeze(v5);
// v6 = .undefined
for (const v7 in v5) {
}
}
%NeverOptimizeFunction(main);
main();
