function main() {
const v5 = {valueOf:JSON,length:"search"};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf"])
const v9 = JSON.stringify(v5,JSON,2153514987);
// v9 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
const v10 = JSON.parse(v9,Object);
// v10 = .unknown
}
%NeverOptimizeFunction(main);
main();
