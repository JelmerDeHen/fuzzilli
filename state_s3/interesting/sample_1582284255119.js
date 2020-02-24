function main() {
const v2 = JSON.stringify(2.220446049250313e-16);
// v2 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
const v4 = JSON.parse(v2,2435262485);
// v4 = .unknown
}
%NeverOptimizeFunction(main);
main();
