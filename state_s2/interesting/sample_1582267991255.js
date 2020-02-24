function main() {
let v1 = "asyncIterator";
const v4 = String << String;
// v4 = .integer
const v6 = String.fromCodePoint(65535,v4,v4,v4);
// v6 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v7 = v6.lastIndexOf(v1,0);
// v7 = .integer
}
%NeverOptimizeFunction(main);
main();
