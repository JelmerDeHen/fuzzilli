function main() {
let v1 = JSON;
const v3 = ~471091797;
// v3 = .boolean
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
const v18 = v1.stringify(1337,gc,44016);
// v18 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
