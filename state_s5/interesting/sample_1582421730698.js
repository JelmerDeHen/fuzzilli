function main() {
const v5 = 2.2250738585072014e-308 / 3890419937;
// v5 = .number
const v6 = JSON.stringify(-1662380622,gc,v5);
// v6 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
}
%NeverOptimizeFunction(main);
main();
