function main() {
let v1 = 13.37;
const v5 = String.fromCharCode(v1,-65537);
// v5 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
const v6 = parseInt(v5);
// v6 = .integer
}
%NeverOptimizeFunction(main);
main();
