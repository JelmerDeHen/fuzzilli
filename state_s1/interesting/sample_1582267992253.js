function main() {
let v1 = "asyncIterator";
const v4 = String << String;
// v4 = .integer
const v6 = String.fromCodePoint(65535,v4,v4,v4);
// v6 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
const v7 = v6.lastIndexOf(v1,0);
// v7 = .integer
}
%NeverOptimizeFunction(main);
main();
