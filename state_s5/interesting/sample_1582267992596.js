function main() {
let v1 = "asyncIterator";
const v4 = String << String;
// v4 = .integer
const v6 = String.fromCodePoint(65535,v4,v4,v4);
// v6 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v7 = v6.lastIndexOf(v1,0);
// v7 = .integer
}
%NeverOptimizeFunction(main);
main();
