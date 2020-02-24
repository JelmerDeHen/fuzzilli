function main() {
const v2 = (65536).__proto__;
// v2 = .unknown
const v5 = new String(1337,Float32Array);
// v5 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
v2.__proto__ = v5;
const v6 = (65536).lastIndexOf();
// v6 = .unknown
}
%NeverOptimizeFunction(main);
main();
