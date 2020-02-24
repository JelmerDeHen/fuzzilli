function main() {
const v2 = [1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v3 = [v2];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = {valueOf:13.37,a:v2,__proto__:v3};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "a"])
let v5 = v2;
const v7 = [5.0,5.0,5.0,5.0];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v8(v9,v10) {
    const v13 = [13.37];
    // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    function v14(v15,v16) {
        for (const v18 in "boolean") {
            const v20 = {e:-1501539808};
            // v20 = .object(ofGroup: Object, withProperties: ["__proto__", "e"])
            let v22 = 0;
            const v23 = v22 + 1;
            // v23 = .primitive
            const v26 = [1337,1337,1337,1337,1337];
            // v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            function v27(v28,v29,v30,v31) {
                'use strict'
                let v34 = 0;
                const v35 = {preventExtensions:v28,get:v31};
                // v35 = .object(ofGroup: Object, withProperties: ["preventExtensions", "__proto__", "get"])
                const v37 = Proxy(v26,v35);
                // v37 = .unknown
            }
            const v38 = {deleteProperty:v27,set:v27,getPrototypeOf:v27,call:v27,preventExtensions:v27,isExtensible:v27,construct:v27,get:v27,ownKeys:v27,setPrototypeOf:v27,has:v27};
            // v38 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "setPrototypeOf", "ownKeys", "set", "preventExtensions", "getPrototypeOf", "isExtensible", "deleteProperty", "call", "has", "get"])
            v5 = v38;
            const v39 = v4.valueOf;
            // v39 = .unknown
            const v40 = v39.__proto__;
            // v40 = .unknown
            v15.toString = "boolean";
            const v42 = new Uint16Array(v26,v38);
            // v42 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
            v42[1] = "MIN_VALUE";
        }
    }
    const v46 = ["nVkEIOUd+c",13.37];
    // v46 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v47 = {b:v46};
    // v47 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
    const v48 = new Promise(v14,v47,"undefined",v13,"undefined");
    // v48 = .object()
    let v51 = 0;
    const v52 = v14(v14);
    // v52 = .unknown
    while (v51 < 1337) {
        const v53 = v51 + 1;
        // v53 = .primitive
        v51 = v53;
    }
}
const v54 = v7.sort(v8);
// v54 = .undefined
}
%NeverOptimizeFunction(main);
main();
