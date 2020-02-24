function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v10 = [13.37,13.37,13.37,13.37];
    // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    function v11(v12,v13) {
        const v16 = gc(...arguments);
        // v16 = .undefined
        let v18 = 0;
        const v19 = v18 + 1;
        // v19 = .primitive
        v18 = v19;
        const v21 = {e:-1501539808};
        // v21 = .object(ofGroup: Object, withProperties: ["__proto__", "e"])
        let v25 = 0;
        while (v25 < 1337) {
            const v26 = v25 + 1;
            // v26 = .primitive
            v25 = v26;
            let v28 = v21;
            const v29 = arguments[1337];
            // v29 = .unknown
        }
    }
    const v30 = v10.sort(v11);
    // v30 = .undefined
}
const v31 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v31 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "isExtensible", "getPrototypeOf", "ownKeys", "preventExtensions", "has", "setPrototypeOf", "set", "deleteProperty", "call", "get"])
const v33 = new Proxy(v2,v31);
// v33 = .unknown
v33[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
