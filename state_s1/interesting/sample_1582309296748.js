function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
try {
    const v4 = [1337,13.37];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v5 = v4[1024];
    // v5 = .unknown
    let v7 = 0;
    const v8 = [];
    // v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v10 = new Int16Array(v7);
    // v10 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
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
    // v20 = .object(ofGroup: Object, withProperties: ["__proto__", "preventExtensions", "construct", "toString", "call", "isExtensible"], withMethods: ["set", "deleteProperty", "has", "setPrototypeOf", "getOwnPropertyDescriptor"])
    const v22 = new Proxy(v1,v20);
    // v22 = .unknown
    for (const v23 in v22) {
    }
} catch(v24) {
}
}
%NeverOptimizeFunction(main);
main();
