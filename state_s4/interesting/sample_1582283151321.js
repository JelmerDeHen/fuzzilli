function main() {
try {
    const v2 = [13.37,13.37];
    // v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v3 = v2[1024];
    // v3 = .unknown
    const v4 = {has:Array,construct:v3,toString:v3,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v3,isExtensible:v3,call:v3,set:Array,getOwnPropertyDescriptor:Array};
    // v4 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible", "toString", "construct", "preventExtensions", "call"], withMethods: ["deleteProperty", "set", "getOwnPropertyDescriptor", "setPrototypeOf", "has"])
    const v6 = new Proxy(v2,v4);
    // v6 = .unknown
    for (const v7 in v6) {
    }
} catch(v8) {
}
}
%NeverOptimizeFunction(main);
main();
