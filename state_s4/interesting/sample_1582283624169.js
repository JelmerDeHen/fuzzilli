function main() {
let v1 = 13.37;
const v5 = String.fromCharCode(v1,65537);
// v5 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v6 = parseInt(v5);
// v6 = .integer
}
%NeverOptimizeFunction(main);
main();
