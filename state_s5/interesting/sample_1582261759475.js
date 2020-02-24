function main() {
const v2 = {length:13.37};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
let v4 = v2;
const v5 = JSON.stringify(v4,1337);
// v5 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
}
%NeverOptimizeFunction(main);
main();
