function main() {
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        const v12 = [13.37,13.37,13.37,13.37];
        // v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v14 = [1337,1337,1337,1337];
        // v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v16 = [1337,1337,1337,1337,1337];
        // v16 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        function v17(v18,v19,v20,v21) {
            'use strict'
        }
        const v22 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
        // v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "preventExtensions", "set", "ownKeys", "getPrototypeOf", "construct", "deleteProperty", "call", "has", "setPrototypeOf", "get"])
        const v24 = new Proxy(v16,v22);
        // v24 = .unknown
        do {
            const v25 = v12.__proto__;
            // v25 = .object()
            const v26 = v25.slice();
            // v26 = .unknown
            let v29 = 0;
            do {
                const v30 = v29 + 1;
                // v30 = .primitive
                v29 = v30;
            } while (v29 < 3);
            const v31 = v10 + 1;
            // v31 = .primitive
            v10 = v31;
        } while (v10 < 8);
    }
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v34 = v33;
const v35 = v3(v34);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();