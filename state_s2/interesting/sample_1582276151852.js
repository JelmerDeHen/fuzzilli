function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [v4,4294967295,13.37,v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {c:1337,constructor:v6,__proto__:v6,a:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "a", "c"])
const v9 = {};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = 4294967295;
const v17 = -653507721 % String;
// v17 = .number
try {
    const v19 = String.fromCodePoint(2357897189,v17);
    // v19 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
} catch(v20) {
}
const v21 = v6 <= 2357897189;
// v21 = .boolean
let v22 = v7;
if (v21) {
    const v23 = String(1);
    // v23 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
    v22 = v23;
} else {
    const v24 = "object" * v9;
    // v24 = .number
    v22 = v21;
}
const v25 = {deleteProperty:String,getPrototypeOf:String,apply:String,getOwnPropertyDescriptor:String,has:String,get:String,preventExtensions:String,isExtensible:String,setPrototypeOf:String,ownKeys:String,set:String};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "isExtensible", "get", "apply", "setPrototypeOf", "getOwnPropertyDescriptor", "getPrototypeOf", "has", "ownKeys", "preventExtensions", "set"])
const v27 = new Proxy(v7,v25);
// v27 = .unknown
const v28 = {setPrototypeOf:String,ownKeys:v27,deleteProperty:v27};
// v28 = .object(ofGroup: Object, withProperties: ["deleteProperty", "ownKeys", "__proto__"], withMethods: ["setPrototypeOf"])
const v30 = new Proxy(v9,v28);
// v30 = .unknown
const v31 = "object".__proto__;
// v31 = .object()
v6.__proto__ = v30;
const v32 = String(10);
// v32 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
}
%NeverOptimizeFunction(main);
main();
