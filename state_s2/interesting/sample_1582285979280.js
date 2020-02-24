function main() {
let v1 = "object";
const v4 = String.fromCharCode("object",1351830868);
// v4 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v5 = v1.lastIndexOf(v4);
// v5 = .integer
}
%NeverOptimizeFunction(main);
main();
