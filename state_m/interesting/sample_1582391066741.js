function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v5(v6,v7) {
    return 129;
}
const v8 = {getPrototypeOf:v5,isExtensible:Object,apply:v5,defineProperty:Object,call:Object,get:v5,getOwnPropertyDescriptor:v5,has:v5,preventExtensions:v5,deleteProperty:Object,setPrototypeOf:v5};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "call", "has", "getOwnPropertyDescriptor", "isExtensible", "get", "apply", "defineProperty", "setPrototypeOf", "getPrototypeOf", "deleteProperty"])
const v10 = new Proxy(v5,v8);
// v10 = .unknown
const v11 = new v10(v3,Object,0,129,129);
// v11 = .object()
}
%NeverOptimizeFunction(main);
main();
