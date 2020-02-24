function main() {
const v2 = {a:isFinite};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
const v5 = JSON.stringify(13.37,JSON,2153514987);
// v5 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v6 = JSON.parse(v5,v2);
// v6 = .unknown
}
%NeverOptimizeFunction(main);
main();
