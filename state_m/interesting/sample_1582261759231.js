function main() {
const v2 = {length:13.37};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
let v4 = v2;
const v5 = JSON.stringify(v4,1337);
// v5 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
