function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
try {
    const v4 = [1337,13.37];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v5 = v4[1024];
    // v5 = .unknown
    const v6 = {has:Array,construct:v5,toString:v5,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v5,isExtensible:v5,call:v5,set:Array,getOwnPropertyDescriptor:Array};
    // v6 = .object(ofGroup: Object, withProperties: ["__proto__", "preventExtensions", "toString", "construct", "call", "isExtensible"], withMethods: ["has", "deleteProperty", "setPrototypeOf", "set", "getOwnPropertyDescriptor"])
    const v8 = new Proxy(v1,v6);
    // v8 = .unknown
    for (const v9 in v8) {
    }
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();
