function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
try {
    const v4 = [1337,13.37];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v5 = v4[1024];
    // v5 = .unknown
    const v7 = {set:Array,get:Array};
    // v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
    const v9 = Object.defineProperty(v1,1073741824,v7);
    // v9 = .undefined
    const v10 = {has:Array,construct:v5,toString:v5,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v5,isExtensible:v5,call:v5,set:Array,getOwnPropertyDescriptor:Array};
    // v10 = .object(ofGroup: Object, withProperties: ["preventExtensions", "construct", "call", "toString", "isExtensible", "__proto__"], withMethods: ["setPrototypeOf", "has", "deleteProperty", "getOwnPropertyDescriptor", "set"])
    const v12 = new Proxy(v1,v10);
    // v12 = .unknown
    for (const v13 in v12) {
    }
} catch(v14) {
}
}
%NeverOptimizeFunction(main);
main();
