function main() {
const v3 = {valueOf:JSON,length:"search"};
// v3 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "__proto__"])
JSON[v3] = -2.220446049250313e-16;
const v7 = JSON.stringify(JSON,JSON,2153514987);
// v7 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
const v8 = JSON.parse(v7,Object);
// v8 = .unknown
}
%NeverOptimizeFunction(main);
main();
