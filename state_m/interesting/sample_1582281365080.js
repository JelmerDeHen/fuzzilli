function main() {
const v3 = {d:"e",e:"e",toString:Infinity,b:257};
// v3 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "e", "b", "toString"])
let v4 = Infinity;
const v6 = JSON.stringify(v3,JSON,v4);
// v6 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
