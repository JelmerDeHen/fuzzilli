function main() {
let v3 = 0;
let v8 = undefined;
try {
    const v10 = [371375.4036167406,371375.4036167406,371375.4036167406];
    // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v13 = [13.37,13.37];
    // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v14 = v13[1024];
    // v14 = .unknown
    const v15 = {has:ArrayBuffer,construct:v14,defineProperty:v14,deleteProperty:ArrayBuffer,setPrototypeOf:ArrayBuffer,preventExtensions:v14,isExtensible:v14,call:v14,set:ArrayBuffer,getOwnPropertyDescriptor:ArrayBuffer};
    // v15 = .object(ofGroup: Object, withProperties: ["deleteProperty", "__proto__", "getOwnPropertyDescriptor", "defineProperty", "setPrototypeOf", "set", "isExtensible", "has", "call", "preventExtensions", "construct"])
    const v17 = new Proxy(v13,v15);
    // v17 = .unknown
    for (const v19 in "object") {
        v10.__proto__ = v17;
    }
} catch(v20) {
}
const v21 = v3 + 1;
// v21 = .primitive
v3 = v21;
}
%NeverOptimizeFunction(main);
main();
