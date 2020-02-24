function main() {
const v3 = JSON.stringify(JSON,JSON,2153514987);
// v3 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v4 = JSON.parse(v3,Object);
// v4 = .unknown
}
%NeverOptimizeFunction(main);
main();
