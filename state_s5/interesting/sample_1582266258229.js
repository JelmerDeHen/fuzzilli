function main() {
const v3 = JSON.stringify(JSON,JSON,2153514987);
// v3 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v4 = JSON.parse(v3,Object);
// v4 = .unknown
}
%NeverOptimizeFunction(main);
main();
