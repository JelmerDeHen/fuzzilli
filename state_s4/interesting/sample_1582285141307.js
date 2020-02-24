function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = v2.toString();
// v3 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v6 = [13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v9 = {b:v6,c:13.37,valueOf:-9007199254740993,d:v3,constructor:1337,__proto__:v8};
// v9 = .object(ofGroup: Object, withProperties: ["d", "constructor", "valueOf", "__proto__", "c", "b"])
let v10 = v9;
const v12 = [1337];
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v13 = v12;
let v16 = 0;
const v20 = v16 + 1;
// v20 = .primitive
v16 = v20;
const v22 = {set:RegExp,get:RegExp};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v24 = Object.defineProperty(v9,"b",v22);
// v24 = .undefined
let v30 = 0;
const v31 = v30 + 1;
// v31 = .primitive
v30 = v31;
function v32(v33,v34) {
    const v36 = {deleteProperty:Object,apply:Object,getPrototypeOf:RegExp,defineProperty:v34,set:RegExp,construct:v32,setPrototypeOf:v34,has:v32};
    // v36 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "defineProperty", "__proto__"], withMethods: ["set", "deleteProperty", "construct", "getPrototypeOf", "has", "apply"])
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
