function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [v6,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {d:isNaN,valueOf:isNaN,a:"object"};
// v8 = .object(ofGroup: Object, withProperties: ["a", "__proto__"], withMethods: ["d", "valueOf"])
const v9 = {toString:v6,d:isNaN};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "toString"], withMethods: ["d"])
let v10 = v7;
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v23 = [1337,1337,1337,1337,1337];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v24(v25,v26,v27,v28) {
    'use strict'
    try {
        v28[3] = v28;
    } catch(v29) {
        for (let v45 = 0; v45 < 6; v45++) {
            for (let v49 = 0; v49 < 100; v49++) {
                const v50 = RegExp("MIN_VALUE");
                // v50 = .object()
            }
        }
        function v66(v67,v68) {
            let v71 = 0;
            while (v71 < 9) {
                const v72 = v26.__proto__;
                // v72 = .unknown
                const v73 = v71 + 1;
                // v73 = .primitive
                v71 = v73;
            }
        }
        const v76 = new v66();
        // v76 = .object()
        for (let v87 = 0; v87 < 5; v87++) {
            let v90 = 0;
            const v91 = v90 + 1;
            // v91 = .primitive
            v90 = v91;
        }
        const v92 = v26[3246326826];
        // v92 = .unknown
    }
    return v25;
}
const v94 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
// v94 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "has", "isExtensible", "preventExtensions", "set", "setPrototypeOf", "get", "ownKeys", "call", "construct", "deleteProperty"])
const v96 = new Proxy(v23,v94);
// v96 = .unknown
v96[1] = "MIN_VALUE";
const v97 = (1337)[13.37];
// v97 = .unknown
const v99 = {get:eval};
// v99 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v101 = Object.defineProperty(v7,"d",v99);
// v101 = .undefined
}
%NeverOptimizeFunction(main);
main();
