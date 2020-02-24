function main() {
let v1 = 13.37;
const v5 = String.fromCharCode(v1,255);
// v5 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
const v6 = isFinite(v5);
// v6 = .boolean
}
%NeverOptimizeFunction(main);
main();
