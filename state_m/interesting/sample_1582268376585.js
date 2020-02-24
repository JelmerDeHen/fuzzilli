function main() {
const v5 = {valueOf:JSON,length:"search"};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length"])
const v9 = JSON.stringify(v5,JSON,2153514987);
// v9 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
const v10 = JSON.parse(v9,Object);
// v10 = .unknown
}
%NeverOptimizeFunction(main);
main();
