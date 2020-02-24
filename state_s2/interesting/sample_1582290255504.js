function main() {
let v2 = 1337;
const v3 = JSON.stringify(v2);
// v3 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v5 = (0).toLocaleString();
// v5 = .unknown
const v6 = v5.padStart(1337,v3);
// v6 = .unknown
const v7 = v3 | v6;
// v7 = .integer
}
%NeverOptimizeFunction(main);
main();
