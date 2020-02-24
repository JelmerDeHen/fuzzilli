function main() {
let v2 = 1337;
const v3 = JSON.stringify(v2);
// v3 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v5 = (0).toLocaleString();
// v5 = .unknown
const v6 = v5.padStart(1337,v3);
// v6 = .unknown
const v7 = v3 | v6;
// v7 = .integer
}
%NeverOptimizeFunction(main);
main();
