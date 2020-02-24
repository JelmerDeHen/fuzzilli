function main() {
const v3 = {valueOf:JSON,length:"search"};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length"])
JSON[v3] = -2.220446049250313e-16;
const v7 = JSON.stringify(JSON,JSON,2153514987);
// v7 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v8 = JSON.parse(v7,Object);
// v8 = .unknown
}
%NeverOptimizeFunction(main);
main();
