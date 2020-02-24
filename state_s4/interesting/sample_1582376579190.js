function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v9 = [13.37,13.37,13.37,13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    function v10(v11,v12) {
        function v15(v16,v17) {
            let v19 = v4;
        }
        const v20 = v15(...arguments);
        // v20 = .unknown
        let v22 = 0;
        while (v22 < 1337) {
            const v23 = v22 + 1;
            // v23 = .primitive
            v22 = v23;
        }
    }
    const v24 = v9.sort(v10);
    // v24 = .undefined
}
const v25 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "construct", "getPrototypeOf", "call", "set", "has", "get", "isExtensible", "deleteProperty", "setPrototypeOf", "preventExtensions"])
const v27 = new Proxy(v2,v25);
// v27 = .unknown
v27[1] = "e";
}
%NeverOptimizeFunction(main);
main();
