function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v5(v6,v7) {
    return 129;
}
const v8 = {getPrototypeOf:v5,isExtensible:Object,apply:v5,defineProperty:Object,call:Object,get:v5,getOwnPropertyDescriptor:v5,has:v5,preventExtensions:v5,deleteProperty:Object,setPrototypeOf:v5};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "isExtensible", "getPrototypeOf", "has", "get", "apply", "defineProperty", "getOwnPropertyDescriptor", "preventExtensions", "setPrototypeOf", "call"])
const v10 = new Proxy(v5,v8);
// v10 = .unknown
const v11 = new v10(v3,Object,0,129,129);
// v11 = .object()
}
%NeverOptimizeFunction(main);
main();
