function main() {
const v2 = {a:isFinite};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
JSON[1000908000] = 13.37;
JSON[2153514987] = 13.37;
const v10 = JSON.stringify(JSON,JSON,2153514987);
// v10 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v11 = JSON.parse(v10,v2);
// v11 = .unknown
}
%NeverOptimizeFunction(main);
main();
