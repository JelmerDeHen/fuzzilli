function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v3 = v2.toString();
// v3 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v6 = [13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v9 = {b:v6,c:13.37,valueOf:-9007199254740993,d:v3,constructor:1337,__proto__:v8};
// v9 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "d", "constructor", "c", "valueOf"])
let v10 = v9;
const v12 = [1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v13 = v12;
let v16 = 0;
const v20 = v16 + 1;
// v20 = .primitive
v16 = v20;
const v22 = {set:RegExp,get:RegExp};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v24 = Object.defineProperty(v9,"b",v22);
// v24 = .undefined
let v30 = 0;
const v31 = v30 + 1;
// v31 = .primitive
v30 = v31;
function v32(v33,v34) {
    const v36 = {deleteProperty:Object,apply:Object,getPrototypeOf:RegExp,defineProperty:v34,set:RegExp,construct:v32,setPrototypeOf:v34,has:v32};
    // v36 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf", "defineProperty"], withMethods: ["set", "deleteProperty", "has", "apply", "getPrototypeOf", "construct"])
    const v38 = new Proxy(v10,v36);
    // v38 = .unknown
    const v39 = Object.freeze(v38);
    // v39 = .undefined
}
let v40 = v13;
const v41 = v32(v40);
// v41 = .unknown
}
%NeverOptimizeFunction(main);
main();
