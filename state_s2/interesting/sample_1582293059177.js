function main() {
let v3 = 0;
const v8 = {__proto__:536870912};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v10 = [13.37,13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v12 = [];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
try {
    const v15 = [1337,13.37];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v16 = v15[1024];
    // v16 = .unknown
    let v19 = 0;
    const v20 = [];
    // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v22 = new Int16Array(v19);
    // v22 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
    const v23 = v20.__proto__;
    // v23 = .object()
    v23.__proto__ = v22;
    const v24 = v19 + 1;
    // v24 = .primitive
    v19 = v24;
    const v25 = {has:Array,construct:v16,toString:v16,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v16,isExtensible:v16,call:v16,set:Array,getOwnPropertyDescriptor:Array};
    // v25 = .object(ofGroup: Object, withProperties: ["call", "toString", "construct", "__proto__", "isExtensible", "preventExtensions"], withMethods: ["getOwnPropertyDescriptor", "set", "has", "setPrototypeOf", "deleteProperty"])
    const v27 = new Proxy(v12,v25);
    // v27 = .unknown
    for (const v28 in v27) {
    }
} catch(v29) {
}
}
%NeverOptimizeFunction(main);
main();
