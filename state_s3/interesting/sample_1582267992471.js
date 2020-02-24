function main() {
let v1 = "asyncIterator";
const v4 = String << String;
// v4 = .integer
const v6 = String.fromCodePoint(65535,v4,v4,v4);
// v6 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
const v7 = v6.lastIndexOf(v1,0);
// v7 = .integer
}
%NeverOptimizeFunction(main);
main();
