function main() {
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
const v8 = ~13.37;
// v8 = .boolean
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
const v13 = "sZO5vNgWS7".replace("undefined","symbol");
// v13 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
}
%NeverOptimizeFunction(main);
main();
