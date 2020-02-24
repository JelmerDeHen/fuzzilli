function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
try {
    const v4 = [1337,13.37];
    // v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v5 = v4[1024];
    // v5 = .unknown
    const v6 = {has:Array,construct:v5,toString:v5,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v5,isExtensible:v5,call:v5,set:Array,getOwnPropertyDescriptor:Array};
    // v6 = .object(ofGroup: Object, withProperties: ["call", "preventExtensions", "construct", "isExtensible", "__proto__", "toString"], withMethods: ["getOwnPropertyDescriptor", "setPrototypeOf", "set", "has", "deleteProperty"])
    const v8 = new Proxy(v1,v6);
    // v8 = .unknown
    for (const v9 in v8) {
    }
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();
