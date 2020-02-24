function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [v6,v6,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {d:"undefined",e:v4,__proto__:v6,c:v6,toString:v7};
// v8 = .object(ofGroup: Object, withProperties: ["d", "e", "c", "__proto__", "toString"])
let v11 = "object";
let v18 = "undefined";
if (v8) {
    const v19 = {getOwnPropertyDescriptor:Object,construct:Object,ownKeys:Object,apply:Object,getPrototypeOf:Object,deleteProperty:Object,isExtensible:Object,defineProperty:Object,set:Object,has:Object,call:Object};
    // v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["defineProperty", "getOwnPropertyDescriptor", "set", "apply", "getPrototypeOf", "has", "call", "deleteProperty", "isExtensible", "ownKeys", "construct"])
} else {
    const v21 = Object(1337,...13.37,...v18,13.37,13.37);
    // v21 = .object()
}
}
%NeverOptimizeFunction(main);
main();
