function main() {
const v2 = {length:13.37};
// v2 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
let v4 = v2;
const v5 = JSON.stringify(v4,1337);
// v5 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
}
%NeverOptimizeFunction(main);
main();
