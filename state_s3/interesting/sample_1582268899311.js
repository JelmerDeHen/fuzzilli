function main() {
const v3 = {valueOf:JSON,length:"search"};
// v3 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__"])
JSON[v3] = -2.220446049250313e-16;
const v7 = JSON.stringify(JSON,JSON,2153514987);
// v7 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
const v8 = JSON.parse(v7,Object);
// v8 = .unknown
}
%NeverOptimizeFunction(main);
main();
