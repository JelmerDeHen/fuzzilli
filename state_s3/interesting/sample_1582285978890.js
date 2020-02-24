function main() {
let v1 = "object";
const v4 = String.fromCharCode("object",1351830868);
// v4 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
const v5 = v1.lastIndexOf(v4);
// v5 = .integer
}
%NeverOptimizeFunction(main);
main();
