function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
try {
    const v4 = [1337,13.37];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v5 = v4[1024];
    // v5 = .unknown
    const v6 = {has:Array,construct:v5,toString:v5,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v5,isExtensible:v5,call:v5,set:Array,getOwnPropertyDescriptor:Array};
    // v6 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible", "call", "toString", "construct", "preventExtensions"], withMethods: ["set", "deleteProperty", "has", "getOwnPropertyDescriptor", "setPrototypeOf"])
    const v8 = new Proxy(v1,v6);
    // v8 = .unknown
    for (const v9 in v8) {
    }
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();
