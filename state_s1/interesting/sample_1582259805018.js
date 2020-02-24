function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v9 = 0;
    do {
        function v10(v11,v12,v13,v14) {
            'use strict'
            try {
                const v16 = [371375.4036167406,371375.4036167406,371375.4036167406];
                // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
                const v19 = [13.37,13.37];
                // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
                const v20 = v19[1024];
                // v20 = .unknown
                const v21 = {has:gc,construct:v20,defineProperty:v20,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v20,isExtensible:v20,call:v20,set:gc,getOwnPropertyDescriptor:gc};
                // v21 = .object(ofGroup: Object, withProperties: ["call", "construct", "__proto__", "isExtensible", "defineProperty", "preventExtensions"], withMethods: ["setPrototypeOf", "getOwnPropertyDescriptor", "deleteProperty", "set", "has"])
                const v23 = new Proxy(v19,v21);
                // v23 = .unknown
                for (const v25 in "object") {
                    v16.__proto__ = v23;
                }
            } catch(v26) {
            }
        }
        const v30 = v10(Reflect,Reflect,1337,9007199254740993);
        // v30 = .unknown
        const v31 = v9 + 1;
        // v31 = .primitive
        v9 = v31;
    } while (v9 < 8);
}
}
%NeverOptimizeFunction(main);
main();
