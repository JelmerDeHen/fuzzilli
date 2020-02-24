function main() {
const v2 = (65536).__proto__;
// v2 = .unknown
const v5 = new String(1337,Float32Array);
// v5 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
v2.__proto__ = v5;
const v6 = (65536).lastIndexOf();
// v6 = .unknown
}
%NeverOptimizeFunction(main);
main();
