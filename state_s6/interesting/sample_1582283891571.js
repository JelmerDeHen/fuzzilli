function main() {
let v16 = -4096;
let v17 = v16;
const v19 = v17.toLocaleString();
// v19 = .unknown
const v20 = eval(v19);
// v20 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
}
%NeverOptimizeFunction(main);
main();
