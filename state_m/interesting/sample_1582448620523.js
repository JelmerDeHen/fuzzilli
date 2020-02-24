function main() {
const v2 = (65536).__proto__;
// v2 = .unknown
const v5 = new String(1337,Float32Array);
// v5 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
v2.__proto__ = v5;
const v6 = (65536).lastIndexOf();
// v6 = .unknown
}
%NeverOptimizeFunction(main);
main();
