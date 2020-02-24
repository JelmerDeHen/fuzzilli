function main() {
const v4 = JSON.stringify(1337,4294967295,13.37);
// v4 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
}
%NeverOptimizeFunction(main);
main();
