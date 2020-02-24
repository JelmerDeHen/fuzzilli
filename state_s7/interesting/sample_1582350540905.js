function main() {
function v2(v3,v4) {
    let v7 = -128;
    while (v7 < 5) {
        const v8 = v7 + 1;
        // v8 = .primitive
        const v9 = -4294967297 - v8;
        // v9 = .number
        const v13 = {e:1.0,b:"d"};
        // v13 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "e"])
        let v17 = -128;
        while (v17 < 5) {
            const v18 = v13 === 0;
            // v18 = .boolean
            const v19 = v17 + 1;
            // v19 = .primitive
            const v20 = v18 && v19;
            // v20 = .boolean
            const v21 = -128 / v20;
            // v21 = .number
            v17 = v19;
            let v22 = 128;
            delete v21[v22];
        }
        const v24 = [1337,1337,1337,1337,1337];
        // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        function v25(v26,v27,v28,v29) {
            'use strict'
        }
        const v30 = {deleteProperty:v25,set:v25,getPrototypeOf:v25,call:v25,preventExtensions:v25,isExtensible:v25,construct:v25,get:v25,ownKeys:v25,setPrototypeOf:v25,has:v25};
        // v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "getPrototypeOf", "ownKeys", "construct", "set", "isExtensible", "setPrototypeOf", "preventExtensions", "has", "deleteProperty", "call"])
        const v32 = new Proxy(v24,v30);
        // v32 = .unknown
        const v33 = v7 + v9;
        // v33 = .primitive
        v7 = v8;
        let v34 = -4294967297;
        delete v33[v34];
    }
}
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v37 = v36;
const v38 = v2(v37);
// v38 = .unknown
const v39 = v2(1337,-2490171089);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
