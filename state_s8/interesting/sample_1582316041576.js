function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = [1597320083];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = {length:1337,a:v5,valueOf:v2,e:v4,d:1337,__proto__:v4};
// v6 = .object(ofGroup: Object, withProperties: ["length", "e", "__proto__", "d", "valueOf", "a"])
const v8 = [];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
try {
    const v11 = [1337,13.37];
    // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v12 = v11[1024];
    // v12 = .unknown
    const v13 = {isExtensible:Array,get:Array,set:v12,defineProperty:Array,call:Array,apply:v12,construct:v12,has:Array,ownKeys:v12,getPrototypeOf:Array};
    // v13 = .object(ofGroup: Object, withProperties: ["set", "apply", "__proto__", "construct", "ownKeys"], withMethods: ["defineProperty", "isExtensible", "has", "getPrototypeOf", "get", "call"])
    const v15 = new Proxy(Array,v13);
    // v15 = .unknown
    const v16 = new v15(1597320083,v6);
    // v16 = .object()
    const v23 = {has:Array,construct:v12,toString:v12,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v12,isExtensible:v12,call:v12,set:Array,getOwnPropertyDescriptor:Array};
    // v23 = .object(ofGroup: Object, withProperties: ["preventExtensions", "__proto__", "isExtensible", "call", "toString", "construct"], withMethods: ["setPrototypeOf", "deleteProperty", "getOwnPropertyDescriptor", "set", "has"])
    const v25 = Proxy(v8,v23);
    // v25 = .unknown
} catch(v26) {
}
}
%NeverOptimizeFunction(main);
main();
