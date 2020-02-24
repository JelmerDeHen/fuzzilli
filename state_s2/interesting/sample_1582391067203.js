function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v5(v6,v7) {
    return 129;
}
const v8 = {getPrototypeOf:v5,isExtensible:Object,apply:v5,defineProperty:Object,call:Object,get:v5,getOwnPropertyDescriptor:v5,has:v5,preventExtensions:v5,deleteProperty:Object,setPrototypeOf:v5};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "setPrototypeOf", "preventExtensions", "apply", "has", "getPrototypeOf", "deleteProperty", "get", "defineProperty", "getOwnPropertyDescriptor", "call"])
const v10 = new Proxy(v5,v8);
// v10 = .unknown
const v11 = new v10(v3,Object,0,129,129);
// v11 = .object()
}
%NeverOptimizeFunction(main);
main();
