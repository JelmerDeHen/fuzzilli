function main() {
let v2 = undefined;
const v6 = {valueOf:JSON,length:"search"};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "length"])
JSON[v6] = 13.37;
const v10 = JSON.stringify(JSON,JSON,2153514987);
// v10 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v11 = JSON.parse(v10,gc);
// v11 = .unknown
}
%NeverOptimizeFunction(main);
main();
