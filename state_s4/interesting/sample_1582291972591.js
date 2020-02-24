function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
try {
    const v4 = [1337,13.37];
    // v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v5 = v4[1024];
    // v5 = .unknown
    const v6 = {has:Array,construct:v5,toString:v5,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v5,isExtensible:v5,call:v5,set:Array,getOwnPropertyDescriptor:Array};
    // v6 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "construct", "preventExtensions", "isExtensible", "call"], withMethods: ["has", "getOwnPropertyDescriptor", "setPrototypeOf", "deleteProperty", "set"])
    const v8 = new Proxy(v1,v6);
    // v8 = .unknown
    for (const v9 in v8) {
    }
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();
