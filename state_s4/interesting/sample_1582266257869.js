function main() {
const v3 = JSON.stringify(JSON,JSON,2153514987);
// v3 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v4 = JSON.parse(v3,Object);
// v4 = .unknown
}
%NeverOptimizeFunction(main);
main();
