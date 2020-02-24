function main() {
let v4 = 0;
let v7 = 0;
const v11 = eval(1337);
// v11 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v12 = RegExp.apply(v11,Array);
// v12 = .unknown
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
}
%NeverOptimizeFunction(main);
main();
