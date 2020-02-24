function main() {
let v2 = undefined;
const v6 = {valueOf:JSON,length:"search"};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf"])
JSON[v6] = 13.37;
const v10 = JSON.stringify(JSON,JSON,2153514987);
// v10 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
const v11 = JSON.parse(v10,gc);
// v11 = .unknown
}
%NeverOptimizeFunction(main);
main();
