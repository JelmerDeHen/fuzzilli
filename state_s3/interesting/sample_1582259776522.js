function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v9 = 0;
    do {
        function v10(v11,v12,v13,v14) {
            'use strict'
            try {
                const v16 = [371375.4036167406,371375.4036167406,371375.4036167406];
                // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                const v19 = [13.37,13.37];
                // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                const v20 = v19[1024];
                // v20 = .unknown
                const v21 = {has:gc,construct:v20,defineProperty:v20,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v20,isExtensible:v20,call:v20,set:gc,getOwnPropertyDescriptor:gc};
                // v21 = .object(ofGroup: Object, withProperties: ["construct", "defineProperty", "call", "isExtensible", "__proto__", "preventExtensions"], withMethods: ["setPrototypeOf", "deleteProperty", "set", "getOwnPropertyDescriptor", "has"])
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
