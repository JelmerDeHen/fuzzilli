function main() {
const v3 = {length:13.37,a:gc,constructor:gc};
// v3 = .object(ofGroup: Object, withProperties: ["length", "__proto__"], withMethods: ["a", "constructor"])
let v4 = "unscopable";
try {
    const v8 = 371375.4036167406 in v3;
    // v8 = .boolean
    const v10 = [13.37,13.37];
    // v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v11 = v4[1024];
    // v11 = .unknown
    const v13 = Symbol.toStringTag;
    // v13 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
    const v14 = {has:ArrayBuffer,construct:v11,defineProperty:v11,deleteProperty:ArrayBuffer,setPrototypeOf:ArrayBuffer,preventExtensions:v11,isExtensible:v11,call:v11,set:ArrayBuffer,getOwnPropertyDescriptor:ArrayBuffer};
    // v14 = .object(ofGroup: Object, withProperties: ["has", "isExtensible", "call", "getOwnPropertyDescriptor", "construct", "set", "setPrototypeOf", "__proto__", "defineProperty", "preventExtensions", "deleteProperty"])
    const v16 = new Proxy(v10,v14);
    // v16 = .unknown
    const v18 = Reflect.defineProperty(Symbol,v16,v13);
    // v18 = .boolean
} catch(v19) {
}
}
%NeverOptimizeFunction(main);
main();
