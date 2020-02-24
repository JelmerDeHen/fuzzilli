function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v2 = {valueOf:v1,__proto__:v1};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
let v4 = 13.37;
const v7 = [1337,1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        v12[3] = v12;
        const v13 = v2();
        // v13 = .unknown
        const v14 = v13[-2900725722];
        // v14 = .unknown
        function v15(v16,v17) {
            for (const v19 in "boolean") {
                if (v11) {
                    const v20 = v10.sin(v14,v11,v10);
                    // v20 = .unknown
                    let v23 = 0;
                    let v26 = 0;
                    const v27 = v13.__proto__;
                    // v27 = .unknown
                    let v30 = 0;
                } else {
                }
            }
            let v35 = 0;
        }
        const v40 = [863175818];
        // v40 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        let v41 = v40;
        const v42 = v15(v41);
        // v42 = .unknown
        const v43 = !v10;
        // v43 = .boolean
        let v44 = v4;
        for (const v45 in v14) {
            const v47 = Symbol.search;
            // v47 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        }
    } catch(v48) {
    }
    return v4;
}
const v49 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
// v49 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "preventExtensions", "setPrototypeOf", "construct", "set", "call", "ownKeys", "has", "deleteProperty", "get", "getPrototypeOf"])
const v51 = new Proxy(v7,v49);
// v51 = .unknown
v51[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
