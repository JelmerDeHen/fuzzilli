function main() {
const v5 = 2.2250738585072014e-308 / 3890419937;
// v5 = .number
const v6 = JSON.stringify(-1662380622,gc,v5);
// v6 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
