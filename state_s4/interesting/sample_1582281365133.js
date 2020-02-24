function main() {
const v3 = {d:"e",e:"e",toString:Infinity,b:257};
// v3 = .object(ofGroup: Object, withProperties: ["toString", "b", "e", "d", "__proto__"])
let v4 = Infinity;
const v6 = JSON.stringify(v3,JSON,v4);
// v6 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
