function main() {
const v3 = JSON.stringify(JSON,JSON,2153514987);
// v3 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
const v4 = JSON.parse(v3,Object);
// v4 = .unknown
}
%NeverOptimizeFunction(main);
main();
