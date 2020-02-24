function main() {
let v3 = 0;
const v8 = {__proto__:536870912};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v10 = [13.37,13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v12 = [];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
try {
    const v15 = [1337,13.37];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v16 = v15[1024];
    // v16 = .unknown
    let v19 = 0;
    const v20 = [];
    // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v22 = new Int16Array(v19);
    // v22 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
    const v23 = v20.__proto__;
    // v23 = .object()
    v23.__proto__ = v22;
    const v24 = v19 + 1;
    // v24 = .primitive
    v19 = v24;
    const v25 = {has:Array,construct:v16,toString:v16,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v16,isExtensible:v16,call:v16,set:Array,getOwnPropertyDescriptor:Array};
    // v25 = .object(ofGroup: Object, withProperties: ["construct", "preventExtensions", "__proto__", "toString", "isExtensible", "call"], withMethods: ["deleteProperty", "setPrototypeOf", "has", "getOwnPropertyDescriptor", "set"])
    const v27 = new Proxy(v12,v25);
    // v27 = .unknown
    for (const v28 in v27) {
    }
} catch(v29) {
}
}
%NeverOptimizeFunction(main);
main();
