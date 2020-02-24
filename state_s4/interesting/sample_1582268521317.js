function main() {
const v2 = {a:isFinite};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
JSON[1000908000] = 13.37;
JSON[9007199254740991] = 13.37;
const v7 = JSON.stringify(JSON,JSON,9007199254740991);
// v7 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v8 = JSON.parse(v7,v2);
// v8 = .unknown
}
%NeverOptimizeFunction(main);
main();
