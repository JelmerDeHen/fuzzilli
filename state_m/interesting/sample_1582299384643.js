function main() {
let v1 = RegExp;
let v2 = v1;
const v5 = new String(v2,Object);
// v5 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
const v7 = {get:String};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v9 = Object.defineProperty(v5,3736393592,v7);
// v9 = .undefined
const v10 = Object.freeze(v5);
// v10 = .undefined
}
%NeverOptimizeFunction(main);
main();
