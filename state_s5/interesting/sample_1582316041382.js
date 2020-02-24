function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [1597320083];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = {length:1337,a:v5,valueOf:v2,e:v4,d:1337,__proto__:v4};
// v6 = .object(ofGroup: Object, withProperties: ["length", "a", "valueOf", "d", "__proto__", "e"])
const v8 = [];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
try {
    const v11 = [1337,13.37];
    // v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v12 = v11[1024];
    // v12 = .unknown
    const v13 = {isExtensible:Array,get:Array,set:v12,defineProperty:Array,call:Array,apply:v12,construct:v12,has:Array,ownKeys:v12,getPrototypeOf:Array};
    // v13 = .object(ofGroup: Object, withProperties: ["construct", "__proto__", "apply", "ownKeys", "set"], withMethods: ["getPrototypeOf", "has", "defineProperty", "isExtensible", "get", "call"])
    const v15 = new Proxy(Array,v13);
    // v15 = .unknown
    const v16 = new v15(1597320083,v6);
    // v16 = .object()
    const v23 = {has:Array,construct:v12,toString:v12,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v12,isExtensible:v12,call:v12,set:Array,getOwnPropertyDescriptor:Array};
    // v23 = .object(ofGroup: Object, withProperties: ["isExtensible", "toString", "construct", "preventExtensions", "call", "__proto__"], withMethods: ["deleteProperty", "has", "getOwnPropertyDescriptor", "setPrototypeOf", "set"])
    const v25 = Proxy(v8,v23);
    // v25 = .unknown
} catch(v26) {
}
}
%NeverOptimizeFunction(main);
main();
