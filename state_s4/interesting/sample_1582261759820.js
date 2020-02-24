function main() {
const v2 = {length:13.37};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
let v4 = v2;
const v5 = JSON.stringify(v4,1337);
// v5 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
