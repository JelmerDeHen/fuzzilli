function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v5(v6,v7) {
    return 129;
}
const v8 = {getPrototypeOf:v5,isExtensible:Object,apply:v5,defineProperty:Object,call:Object,get:v5,getOwnPropertyDescriptor:v5,has:v5,preventExtensions:v5,deleteProperty:Object,setPrototypeOf:v5};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "apply", "setPrototypeOf", "preventExtensions", "getPrototypeOf", "call", "has", "isExtensible", "deleteProperty", "defineProperty", "getOwnPropertyDescriptor"])
const v10 = new Proxy(v5,v8);
// v10 = .unknown
const v11 = new v10(v3,Object,0,129,129);
// v11 = .object()
}
%NeverOptimizeFunction(main);
main();