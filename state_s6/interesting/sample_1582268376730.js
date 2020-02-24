function main() {
const v5 = {valueOf:JSON,length:"search"};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "length"])
const v9 = JSON.stringify(v5,JSON,2153514987);
// v9 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
const v10 = JSON.parse(v9,Object);
// v10 = .unknown
}
%NeverOptimizeFunction(main);
main();
