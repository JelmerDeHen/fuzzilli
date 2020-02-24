function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
try {
    const v4 = [1337,13.37];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v5 = v4[1024];
    // v5 = .unknown
    let v7 = 0;
    const v8 = [];
    // v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v10 = new Int16Array(v7);
    // v10 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
    const v11 = v8.__proto__;
    // v11 = .object()
    v11.__proto__ = v10;
    const v13 = {set:Array,get:Array};
    // v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
    const v15 = Object.defineProperty(v1,1073741824,v13);
    // v15 = .undefined
    let v18 = 0;
    const v19 = v18 + 1;
    // v19 = .primitive
    v18 = v19;
    const v20 = {has:Array,construct:v5,toString:v5,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v5,isExtensible:v5,call:v5,set:Array,getOwnPropertyDescriptor:Array};
    // v20 = .object(ofGroup: Object, withProperties: ["isExtensible", "call", "construct", "toString", "__proto__", "preventExtensions"], withMethods: ["deleteProperty", "set", "has", "getOwnPropertyDescriptor", "setPrototypeOf"])
    const v22 = new Proxy(v1,v20);
    // v22 = .unknown
    for (const v23 in v22) {
    }
} catch(v24) {
}
}
%NeverOptimizeFunction(main);
main();
