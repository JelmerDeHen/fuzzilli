function main() {
const v3 = {d:"e",e:"e",toString:Infinity,b:257};
// v3 = .object(ofGroup: Object, withProperties: ["toString", "d", "b", "e", "__proto__"])
let v4 = Infinity;
const v6 = JSON.stringify(v3,JSON,v4);
// v6 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
