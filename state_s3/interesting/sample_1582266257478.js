function main() {
const v3 = JSON.stringify(JSON,JSON,2153514987);
// v3 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
const v4 = JSON.parse(v3,Object);
// v4 = .unknown
}
%NeverOptimizeFunction(main);
main();
