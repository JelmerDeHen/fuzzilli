function main() {
const v2 = JSON.stringify(2.220446049250313e-16);
// v2 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
const v4 = JSON.parse(v2,2435262485);
// v4 = .unknown
}
%NeverOptimizeFunction(main);
main();
