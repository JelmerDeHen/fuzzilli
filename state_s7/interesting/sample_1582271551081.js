function main() {
let v2 = undefined;
const v6 = {valueOf:JSON,length:"search"};
// v6 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__"])
JSON[v6] = 13.37;
const v10 = JSON.stringify(JSON,JSON,2153514987);
// v10 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v11 = JSON.parse(v10,gc);
// v11 = .unknown
}
%NeverOptimizeFunction(main);
main();
