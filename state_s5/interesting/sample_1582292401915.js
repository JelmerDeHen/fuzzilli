function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v4 = "unscopable";
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
try {
    const v12 = [13.37,13.37];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v13 = v4[1024];
    // v13 = .unknown
    const v14 = v2.toStringTag;
    // v14 = .unknown
    const v15 = {has:Uint8Array,construct:v13,defineProperty:v13,deleteProperty:Uint8Array,setPrototypeOf:Uint8Array,preventExtensions:v13,isExtensible:v13,call:v13,set:Uint8Array,getOwnPropertyDescriptor:Uint8Array};
    // v15 = .object(ofGroup: Object, withProperties: ["construct", "set", "setPrototypeOf", "isExtensible", "call", "getOwnPropertyDescriptor", "preventExtensions", "__proto__", "defineProperty", "deleteProperty", "has"])
    const v17 = new Proxy(v12,v15);
    // v17 = .unknown
    const v18 = Reflect.defineProperty(-536870912,v17,v14);
    // v18 = .boolean
} catch(v19) {
}
}
%NeverOptimizeFunction(main);
main();
