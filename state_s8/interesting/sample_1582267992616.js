function main() {
let v1 = "asyncIterator";
const v4 = String << String;
// v4 = .integer
const v6 = String.fromCodePoint(65535,v4,v4,v4);
// v6 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v7 = v6.lastIndexOf(v1,0);
// v7 = .integer
}
%NeverOptimizeFunction(main);
main();
