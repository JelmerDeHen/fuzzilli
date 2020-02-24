function main() {
let v16 = -4096;
let v17 = v16;
const v19 = v17.toLocaleString();
// v19 = .unknown
const v20 = eval(v19);
// v20 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
}
%NeverOptimizeFunction(main);
main();
