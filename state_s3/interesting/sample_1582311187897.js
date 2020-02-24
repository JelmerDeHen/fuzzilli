function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
try {
    const v4 = [1337,13.37];
    // v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v5 = v4[1024];
    // v5 = .unknown
    const v7 = {set:Array,get:Array};
    // v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
    const v9 = Object.defineProperty(v1,1073741824,v7);
    // v9 = .undefined
    const v10 = {has:Array,construct:v5,toString:v5,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v5,isExtensible:v5,call:v5,set:Array,getOwnPropertyDescriptor:Array};
    // v10 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible", "construct", "preventExtensions", "call", "toString"], withMethods: ["getOwnPropertyDescriptor", "set", "deleteProperty", "has", "setPrototypeOf"])
    const v12 = new Proxy(v1,v10);
    // v12 = .unknown
    for (const v13 in v12) {
    }
} catch(v14) {
}
}
%NeverOptimizeFunction(main);
main();
