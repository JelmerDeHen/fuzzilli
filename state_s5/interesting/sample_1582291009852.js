function main() {
let v1 = "unscopable";
try {
    const v5 = [13.37,13.37];
    // v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v6 = v1[1024];
    // v6 = .unknown
    const v8 = NaN.toStringTag;
    // v8 = .unknown
    const v9 = {has:Uint8Array,construct:v6,defineProperty:v6,deleteProperty:Uint8Array,setPrototypeOf:Uint8Array,preventExtensions:v6,isExtensible:v6,call:v6,set:Uint8Array,getOwnPropertyDescriptor:Uint8Array};
    // v9 = .object(ofGroup: Object, withProperties: ["preventExtensions", "has", "set", "construct", "setPrototypeOf", "getOwnPropertyDescriptor", "call", "defineProperty", "deleteProperty", "isExtensible", "__proto__"])
    const v11 = new Proxy(v5,v9);
    // v11 = .unknown
    const v12 = Reflect.defineProperty(NaN,v11,v8);
    // v12 = .boolean
} catch(v13) {
}
}
%NeverOptimizeFunction(main);
main();
