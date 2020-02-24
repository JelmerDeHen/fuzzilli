function main() {
const v3 = [13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {a:"caller",valueOf:v3,__proto__:1337,constructor:2048966803,c:2048966803,b:"caller"};
// v5 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "b", "c", "__proto__", "a"])
const v7 = [v5];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v8 = v7;
const v10 = [1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v11 = v10;
function v12(v13,v14) {
    const v16 = {deleteProperty:Object,apply:Object,getPrototypeOf:RegExp,defineProperty:v14,set:RegExp,construct:v12,setPrototypeOf:v14,has:v12};
    // v16 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__", "defineProperty"], withMethods: ["apply", "set", "deleteProperty", "getPrototypeOf", "has", "construct"])
    const v18 = new Proxy(v8,v16);
    // v18 = .unknown
    const v19 = Object.freeze(v18);
    // v19 = .undefined
}
let v20 = v11;
const v21 = v12(v20);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
