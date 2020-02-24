function main() {
const v5 = {valueOf:JSON,length:"search"};
// v5 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "valueOf"])
const v9 = JSON.stringify(v5,JSON,2153514987);
// v9 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v10 = JSON.parse(v9,Object);
// v10 = .unknown
}
%NeverOptimizeFunction(main);
main();
