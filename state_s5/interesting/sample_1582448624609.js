function main() {
const v2 = (65536).__proto__;
// v2 = .unknown
const v5 = new String(1337,Float32Array);
// v5 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
v2.__proto__ = v5;
const v6 = (65536).lastIndexOf();
// v6 = .unknown
}
%NeverOptimizeFunction(main);
main();
