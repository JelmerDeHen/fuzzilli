function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = [1597320083];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = {length:1337,a:v5,valueOf:v2,e:v4,d:1337,__proto__:v4};
// v6 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "d", "valueOf", "a", "e"])
const v8 = [];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
try {
    const v11 = [1337,13.37];
    // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v12 = v11[1024];
    // v12 = .unknown
    const v13 = {isExtensible:Array,get:Array,set:v12,defineProperty:Array,call:Array,apply:v12,construct:v12,has:Array,ownKeys:v12,getPrototypeOf:Array};
    // v13 = .object(ofGroup: Object, withProperties: ["__proto__", "construct", "set", "ownKeys", "apply"], withMethods: ["call", "get", "isExtensible", "has", "getPrototypeOf", "defineProperty"])
    const v15 = new Proxy(Array,v13);
    // v15 = .unknown
    const v16 = new v15(1597320083,v6);
    // v16 = .object()
    const v23 = {has:Array,construct:v12,toString:v12,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v12,isExtensible:v12,call:v12,set:Array,getOwnPropertyDescriptor:Array};
    // v23 = .object(ofGroup: Object, withProperties: ["call", "toString", "__proto__", "isExtensible", "construct", "preventExtensions"], withMethods: ["has", "getOwnPropertyDescriptor", "set", "deleteProperty", "setPrototypeOf"])
    const v25 = Proxy(v8,v23);
    // v25 = .unknown
} catch(v26) {
}
}
%NeverOptimizeFunction(main);
main();
