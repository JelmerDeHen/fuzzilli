function main() {
const v2 = {length:13.37};
// v2 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
let v4 = v2;
const v5 = JSON.stringify(v4,1337);
// v5 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
