function main() {
const v2 = JSON.stringify(2.220446049250313e-16);
// v2 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v4 = JSON.parse(v2,2435262485);
// v4 = .unknown
}
%NeverOptimizeFunction(main);
main();
