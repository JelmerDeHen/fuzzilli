function main() {
let v3 = 0;
let v8 = undefined;
try {
    const v10 = [371375.4036167406,371375.4036167406,371375.4036167406];
    // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v13 = [13.37,13.37];
    // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v14 = v13[3566263127];
    // v14 = .unknown
    const v15 = {has:Math,construct:v14,defineProperty:v14,deleteProperty:Math,setPrototypeOf:Math,preventExtensions:v14,isExtensible:v14,call:v14,set:Math,getOwnPropertyDescriptor:Math};
    // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf", "isExtensible", "getOwnPropertyDescriptor", "construct", "has", "deleteProperty", "call", "set", "defineProperty", "preventExtensions"])
    const v17 = new Proxy(v13,v15);
    // v17 = .unknown
    for (const v19 in "NEGATIVE_INFINITY") {
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
