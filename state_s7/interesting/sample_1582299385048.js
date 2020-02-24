function main() {
let v1 = RegExp;
let v2 = v1;
const v5 = new String(v2,Object);
// v5 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v7 = {get:String};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v9 = Object.defineProperty(v5,3736393592,v7);
// v9 = .undefined
const v10 = Object.freeze(v5);
// v10 = .undefined
}
%NeverOptimizeFunction(main);
main();
