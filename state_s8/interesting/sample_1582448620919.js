function main() {
const v2 = (65536).__proto__;
// v2 = .unknown
const v5 = new String(1337,Float32Array);
// v5 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
v2.__proto__ = v5;
const v6 = (65536).lastIndexOf();
// v6 = .unknown
}
%NeverOptimizeFunction(main);
main();
