function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {valueOf:"symbol"};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
const v9 = {e:13.37,c:v8,length:-3577749417,valueOf:1337,d:v7,__proto__:-3577749417,toString:Promise};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "e", "__proto__", "d", "length", "valueOf", "c"])
let v10 = 13.37;
const v14 = [1337,1337,1337,1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        v19[3] = v19;
    } catch(v20) {
        const v24 = [1337,1337,1337,1337,1337];
        // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        function v25(v26,v27,v28,v29) {
            'use strict'
            const v33 = JSON.stringify(v29,Reflect,"name");
            // v33 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
            return 1337;
        }
        const v34 = {deleteProperty:v25,set:v25,getPrototypeOf:v25,call:v25,preventExtensions:v25,isExtensible:v25,construct:v25,get:v25,ownKeys:v25,setPrototypeOf:v25,has:v25};
        // v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "setPrototypeOf", "has", "getPrototypeOf", "deleteProperty", "set", "preventExtensions", "get", "ownKeys", "construct", "call"])
        const v36 = new Proxy(v24,v34);
        // v36 = .unknown
        v36[1] = "MIN_VALUE";
    }
    return v14;
}
const v37 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
// v37 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "call", "construct", "setPrototypeOf", "has", "preventExtensions", "deleteProperty", "ownKeys", "getPrototypeOf", "get", "set"])
const v39 = new Proxy(v14,v37);
// v39 = .unknown
v39[1] = "MIN_VALUE";
let v40 = "symbol";
try {
    "MIN_VALUE"[v10] = "symbol";
    v40 = -3577749417;
} catch(v41) {
    for (const v42 of v41) {
        for (let v46 = 0; v46 < 4; v46++) {
            let v49 = 0;
            while (v49 < 6) {
                const v50 = Proxy instanceof v15;
                // v50 = .boolean
                let v51 = Proxy;
                if (v41) {
                    let v54 = 0;
                    while (v54 < 0) {
                        const v55 = v42();
                        // v55 = .unknown
                        const v56 = v54 + 1;
                        // v56 = .primitive
                        v54 = v56;
                    }
                    v51 = v46;
                } else {
                    let v59 = 0;
                    while (v59 < 6) {
                        continue;
                        const v60 = v59 + 1;
                        // v60 = .primitive
                        v59 = v60;
                    }
                    v51 = v59;
                }
                const v61 = v49 + 1;
                // v61 = .primitive
                v49 = v61;
            }
        }
    }
    v40 = v15;
}
const v62 = v15(-3577749417,v7);
// v62 = .unknown
}
%NeverOptimizeFunction(main);
main();
