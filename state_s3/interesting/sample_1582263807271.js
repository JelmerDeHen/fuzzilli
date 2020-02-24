function main() {
let v3 = 0;
let v6 = 0;
const v10 = "unscopable".concat(100);
// v10 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
const v11 = v10.trim();
// v11 = .undefined
const v12 = v6 + 1;
// v12 = .primitive
v6 = v12;
}
%NeverOptimizeFunction(main);
main();
