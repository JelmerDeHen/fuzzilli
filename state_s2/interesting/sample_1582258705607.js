function main() {
const v3 = {preventExtensions:Object,defineProperty:gc,isExtensible:gc,getOwnPropertyDescriptor:gc,ownKeys:Object,get:Object,apply:gc,call:gc,getPrototypeOf:gc,construct:gc};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "apply", "ownKeys", "get", "call", "preventExtensions", "defineProperty", "getOwnPropertyDescriptor", "construct", "getPrototypeOf"])
const v5 = new Proxy(gc,v3);
// v5 = .unknown
function v7(v8,v9) {
    let v16 = 0;
    let v19 = 0;
    let v22 = 0;
    const v23 = v22 + 1;
    // v23 = .primitive
    v22 = v23;
    const v34 = v19 + 1;
    // v34 = .primitive
    v19 = v34;
    const v35 = v16 + 1;
    // v35 = .primitive
    v16 = v35;
    return 3156875969;
}
const v38 = [1337];
// v38 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v39 = v38;
const v40 = v7(v39);
// v40 = .unknown
let v43 = 0;
v5.toString = v7;
}
%NeverOptimizeFunction(main);
main();