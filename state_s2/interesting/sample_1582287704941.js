function main() {
let v1 = 13.37;
const v5 = String.fromCharCode(v1,255);
// v5 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v6 = parseInt(v5);
// v6 = .integer
}
%NeverOptimizeFunction(main);
main();
