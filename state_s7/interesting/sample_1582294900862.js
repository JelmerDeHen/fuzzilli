function main() {
let v1 = "unscopable";
try {
    const v5 = [13.37,13.37];
    // v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v6 = v1[1024];
    // v6 = .unknown
    const v8 = Symbol.toStringTag;
    // v8 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
    const v9 = {has:Uint8Array,construct:v6,defineProperty:v6,deleteProperty:Uint8Array,setPrototypeOf:Uint8Array,preventExtensions:v6,isExtensible:v6,call:v6,set:Uint8Array,getOwnPropertyDescriptor:Uint8Array};
    // v9 = .object(ofGroup: Object, withProperties: ["preventExtensions", "setPrototypeOf", "construct", "set", "call", "defineProperty", "has", "getOwnPropertyDescriptor", "isExtensible", "deleteProperty", "__proto__"])
    const v11 = new Proxy(v5,v9);
    // v11 = .unknown
    v5.toString = v11;
    const v12 = Reflect.defineProperty(Symbol,v11,v8);
    // v12 = .boolean
} catch(v13) {
}
}
%NeverOptimizeFunction(main);
main();
