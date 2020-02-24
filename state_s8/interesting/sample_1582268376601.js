function main() {
const v5 = {valueOf:JSON,length:"search"};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "__proto__"])
const v9 = JSON.stringify(v5,JSON,2153514987);
// v9 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v10 = JSON.parse(v9,Object);
// v10 = .unknown
}
%NeverOptimizeFunction(main);
main();
