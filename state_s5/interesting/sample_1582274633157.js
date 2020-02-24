function main() {
const v3 = [13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {a:"caller",valueOf:v3,__proto__:1337,constructor:2048966803,c:2048966803,b:"caller"};
// v5 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "a", "b", "valueOf", "constructor"])
const v7 = [v5];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v8 = v7;
const v10 = [1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v11 = v10;
function v12(v13,v14) {
    const v16 = {deleteProperty:Object,apply:Object,getPrototypeOf:RegExp,defineProperty:v14,set:RegExp,construct:v12,setPrototypeOf:v14,has:v12};
    // v16 = .object(ofGroup: Object, withProperties: ["__proto__", "defineProperty", "setPrototypeOf"], withMethods: ["construct", "set", "apply", "has", "deleteProperty", "getPrototypeOf"])
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
