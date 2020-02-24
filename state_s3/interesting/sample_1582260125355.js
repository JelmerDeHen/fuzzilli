function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v2(v3,v4) {
    const v6 = v1[10];
    // v6 = .unknown
    const v7 = {getPrototypeOf:v4,deleteProperty:v3,construct:v2,get:v6,setPrototypeOf:v4,isExtensible:v6,has:v2,getOwnPropertyDescriptor:v6,call:v6,defineProperty:v2,apply:v6,ownKeys:v6,set:parseInt};
    // v7 = .object(ofGroup: Object, withProperties: ["getOwnPropertyDescriptor", "apply", "isExtensible", "get", "ownKeys", "getPrototypeOf", "setPrototypeOf", "__proto__", "call", "deleteProperty"], withMethods: ["has", "defineProperty", "construct", "set"])
    const v9 = new Proxy(v3,v7);
    // v9 = .unknown
    let v11 = 0;
    const v12 = v11 + 1;
    // v12 = .primitive
    v9.deleteProperty = v12;
}
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v17 = v16;
const v18 = v2(v17);
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
