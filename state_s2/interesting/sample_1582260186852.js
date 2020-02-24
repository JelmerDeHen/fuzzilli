function main() {
const v4 = JSON.stringify(1337,4294967295,13.37);
// v4 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
}
%NeverOptimizeFunction(main);
main();
