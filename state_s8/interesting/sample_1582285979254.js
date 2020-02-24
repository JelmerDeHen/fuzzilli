function main() {
let v1 = "object";
const v4 = String.fromCharCode("object",1351830868);
// v4 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v5 = v1.lastIndexOf(v4);
// v5 = .integer
}
%NeverOptimizeFunction(main);
main();
