function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v4 = "unscopable";
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
try {
    const v12 = [13.37,13.37];
    // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v13 = v4[1024];
    // v13 = .unknown
    const v14 = v2.toStringTag;
    // v14 = .unknown
    const v15 = {has:Uint8Array,construct:v13,defineProperty:v13,deleteProperty:Uint8Array,setPrototypeOf:Uint8Array,preventExtensions:v13,isExtensible:v13,call:v13,set:Uint8Array,getOwnPropertyDescriptor:Uint8Array};
    // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "call", "deleteProperty", "getOwnPropertyDescriptor", "has", "preventExtensions", "isExtensible", "setPrototypeOf", "construct", "defineProperty", "set"])
    const v17 = new Proxy(v12,v15);
    // v17 = .unknown
    const v18 = Reflect.defineProperty(-536870912,v17,v14);
    // v18 = .boolean
} catch(v19) {
}
}
%NeverOptimizeFunction(main);
main();
