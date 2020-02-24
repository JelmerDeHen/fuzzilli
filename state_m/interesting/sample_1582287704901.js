function main() {
let v1 = 13.37;
const v5 = String.fromCharCode(v1,255);
// v5 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
const v6 = parseInt(v5);
// v6 = .integer
}
%NeverOptimizeFunction(main);
main();
