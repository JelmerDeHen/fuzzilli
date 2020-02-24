function main() {
const v3 = {length:13.37,a:gc,constructor:gc};
// v3 = .object(ofGroup: Object, withProperties: ["length", "__proto__"], withMethods: ["constructor", "a"])
let v4 = "unscopable";
try {
    const v8 = 371375.4036167406 in v3;
    // v8 = .boolean
    const v10 = [13.37,13.37];
    // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v11 = v4[1024];
    // v11 = .unknown
    const v13 = Symbol.toStringTag;
    // v13 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    const v14 = {has:ArrayBuffer,construct:v11,defineProperty:v11,deleteProperty:ArrayBuffer,setPrototypeOf:ArrayBuffer,preventExtensions:v11,isExtensible:v11,call:v11,set:ArrayBuffer,getOwnPropertyDescriptor:ArrayBuffer};
    // v14 = .object(ofGroup: Object, withProperties: ["construct", "__proto__", "call", "isExtensible", "getOwnPropertyDescriptor", "set", "defineProperty", "deleteProperty", "has", "setPrototypeOf", "preventExtensions"])
    const v16 = new Proxy(v10,v14);
    // v16 = .unknown
    const v18 = Reflect.defineProperty(Symbol,v16,v13);
    // v18 = .boolean
} catch(v19) {
}
}
%NeverOptimizeFunction(main);
main();
