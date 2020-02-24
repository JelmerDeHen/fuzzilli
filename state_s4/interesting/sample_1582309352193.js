function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
try {
    const v4 = [1337,13.37];
    // v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v5 = v4[1024];
    // v5 = .unknown
    let v7 = 0;
    const v8 = [];
    // v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v10 = new Int16Array(v7);
    // v10 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
    const v11 = v8.__proto__;
    // v11 = .object()
    v11.__proto__ = v10;
    const v13 = {set:Array,get:Array};
    // v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
    const v15 = Object.defineProperty(v1,1073741824,v13);
    // v15 = .undefined
    let v18 = 0;
    const v19 = v18 + 1;
    // v19 = .primitive
    v18 = v19;
    const v20 = {has:Array,construct:v5,toString:v5,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v5,isExtensible:v5,call:v5,set:Array,getOwnPropertyDescriptor:Array};
    // v20 = .object(ofGroup: Object, withProperties: ["construct", "__proto__", "toString", "preventExtensions", "call", "isExtensible"], withMethods: ["getOwnPropertyDescriptor", "setPrototypeOf", "has", "set", "deleteProperty"])
    const v22 = new Proxy(v1,v20);
    // v22 = .unknown
    for (const v23 in v22) {
    }
} catch(v24) {
}
}
%NeverOptimizeFunction(main);
main();
