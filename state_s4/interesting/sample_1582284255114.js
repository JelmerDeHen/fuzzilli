function main() {
const v2 = JSON.stringify(2.220446049250313e-16);
// v2 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v4 = JSON.parse(v2,2435262485);
// v4 = .unknown
}
%NeverOptimizeFunction(main);
main();
