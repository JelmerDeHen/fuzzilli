function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
try {
    const v4 = [1337,13.37];
    // v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v5 = v4[1024];
    // v5 = .unknown
    const v7 = {set:Array,get:Array};
    // v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
    const v9 = Object.defineProperty(v1,1073741824,v7);
    // v9 = .undefined
    const v10 = {has:Array,construct:v5,toString:v5,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v5,isExtensible:v5,call:v5,set:Array,getOwnPropertyDescriptor:Array};
    // v10 = .object(ofGroup: Object, withProperties: ["preventExtensions", "isExtensible", "construct", "toString", "__proto__", "call"], withMethods: ["has", "setPrototypeOf", "getOwnPropertyDescriptor", "deleteProperty", "set"])
    const v12 = new Proxy(v1,v10);
    // v12 = .unknown
    for (const v13 in v12) {
    }
} catch(v14) {
}
}
%NeverOptimizeFunction(main);
main();
