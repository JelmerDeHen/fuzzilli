function main() {
let v1 = "unscopable";
try {
    const v5 = [13.37,13.37];
    // v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v6 = v1[1024];
    // v6 = .unknown
    const v8 = Symbol.toStringTag;
    // v8 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    const v9 = {has:Uint8Array,construct:v6,defineProperty:v6,deleteProperty:Uint8Array,setPrototypeOf:Uint8Array,preventExtensions:v6,isExtensible:v6,call:v6,set:Uint8Array,getOwnPropertyDescriptor:Uint8Array};
    // v9 = .object(ofGroup: Object, withProperties: ["defineProperty", "call", "__proto__", "isExtensible", "deleteProperty", "set", "construct", "setPrototypeOf", "getOwnPropertyDescriptor", "preventExtensions", "has"])
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
