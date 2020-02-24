function main() {
function v2(v3,v4) {
    let v7 = -128;
    while (v7 < 5) {
        const v8 = v7 + 1;
        // v8 = .primitive
        const v9 = -4294967297 - v8;
        // v9 = .number
        const v13 = {e:1.0,b:"d"};
        // v13 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "b"])
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
        // v24 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        function v25(v26,v27,v28,v29) {
            'use strict'
        }
        const v30 = {deleteProperty:v25,set:v25,getPrototypeOf:v25,call:v25,preventExtensions:v25,isExtensible:v25,construct:v25,get:v25,ownKeys:v25,setPrototypeOf:v25,has:v25};
        // v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "has", "setPrototypeOf", "get", "preventExtensions", "ownKeys", "deleteProperty", "set", "call", "getPrototypeOf", "isExtensible"])
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
// v36 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v37 = v36;
const v38 = v2(v37);
// v38 = .unknown
const v39 = v2(1337,-2490171089);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
