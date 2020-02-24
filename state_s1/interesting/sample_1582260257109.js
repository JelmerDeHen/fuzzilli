function main() {
let v3 = 0;
let v8 = undefined;
try {
    const v10 = [371375.4036167406,371375.4036167406,371375.4036167406];
    // v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v13 = [13.37,13.37];
    // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v14 = v13[1024];
    // v14 = .unknown
    const v15 = {has:ArrayBuffer,construct:v14,defineProperty:v14,deleteProperty:ArrayBuffer,setPrototypeOf:ArrayBuffer,preventExtensions:v14,isExtensible:v14,call:v14,set:ArrayBuffer,getOwnPropertyDescriptor:ArrayBuffer};
    // v15 = .object(ofGroup: Object, withProperties: ["deleteProperty", "preventExtensions", "construct", "setPrototypeOf", "defineProperty", "isExtensible", "set", "has", "__proto__", "getOwnPropertyDescriptor", "call"])
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
