function main() {
let v1 = "object";
const v4 = String.fromCharCode("object",1351830868);
// v4 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
const v5 = v1.lastIndexOf(v4);
// v5 = .integer
}
%NeverOptimizeFunction(main);
main();
