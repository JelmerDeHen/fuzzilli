function main() {
let v1 = "unscopable";
try {
    const v5 = [13.37,13.37];
    // v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v6 = v1[1024];
    // v6 = .unknown
    const v8 = NaN.toStringTag;
    // v8 = .unknown
    const v9 = {has:Uint8Array,construct:v6,defineProperty:v6,deleteProperty:Uint8Array,setPrototypeOf:Uint8Array,preventExtensions:v6,isExtensible:v6,call:v6,set:Uint8Array,getOwnPropertyDescriptor:Uint8Array};
    // v9 = .object(ofGroup: Object, withProperties: ["isExtensible", "defineProperty", "deleteProperty", "set", "__proto__", "has", "construct", "preventExtensions", "setPrototypeOf", "call", "getOwnPropertyDescriptor"])
    const v11 = new Proxy(v5,v9);
    // v11 = .unknown
    const v12 = Reflect.defineProperty(NaN,v11,v8);
    // v12 = .boolean
} catch(v13) {
}
}
%NeverOptimizeFunction(main);
main();
