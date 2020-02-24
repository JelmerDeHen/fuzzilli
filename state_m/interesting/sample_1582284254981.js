function main() {
const v2 = JSON.stringify(2.220446049250313e-16);
// v2 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
const v4 = JSON.parse(v2,2435262485);
// v4 = .unknown
}
%NeverOptimizeFunction(main);
main();
