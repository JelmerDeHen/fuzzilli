function main() {
const v2 = [1337,1337,"MIN_VALUE",1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        let v10 = 0;
        while (v10 < 4) {
            const v11 = v10 + 1;
            // v11 = .primitive
            v10 = v11;
        }
        v7[3] = v7;
    } catch(v12) {
        let v14 = eval;
        const v15 = [];
        // v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v16 = {a:v15};
        // v16 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
        const v17 = {__proto__:v7,constructor:v16,length:v15};
        // v17 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
        const v18 = v14 in v17;
        // v18 = .boolean
    }
    return v7;
}
const v19 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:1337,has:v3};
// v19 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__"], withMethods: ["isExtensible", "construct", "preventExtensions", "has", "get", "deleteProperty", "ownKeys", "getPrototypeOf", "set", "call"])
const v21 = new Proxy(v2,v19);
// v21 = .unknown
v21[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
