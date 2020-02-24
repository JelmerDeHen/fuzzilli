function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v11 = [13.37,13.37,13.37];
    // v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    function v12(v13,v14) {
        for (const v17 in "object") {
            const v20 = [1337,1337,1337,1337,1337];
            // v20 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            function v21(v22,v23,v24,v25) {
                'use strict'
                try {
                    const v28 = new Float32Array(19873);
                    // v28 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "length", "constructor", "buffer", "__proto__"], withMethods: ["slice", "entries", "some", "set", "indexOf", "join", "includes", "map", "lastIndexOf", "keys", "forEach", "reduce", "fill", "findIndex", "reduceRight", "find", "subarray", "copyWithin", "reverse", "sort", "filter", "every", "values"])
                    v25[3] = v25;
                } catch(v29) {
                    let v32 = 0;
                    const v33 = v32 + 1;
                    // v33 = .primitive
                    v32 = v33;
                }
                return v20;
            }
            const v34 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
            // v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "isExtensible", "getPrototypeOf", "setPrototypeOf", "ownKeys", "preventExtensions", "has", "set", "deleteProperty", "call", "construct"])
            const v36 = new Proxy(v20,v34);
            // v36 = .unknown
            v36[1] = "MIN_VALUE";
        }
        delete arguments[100];
    }
    const v37 = ["undefined",v11];
    // v37 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v40 = new Int16Array(19873);
    // v40 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
    const v41 = v12(...v37,...v40);
    // v41 = .unknown
}
const v42 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v42 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "call", "preventExtensions", "isExtensible", "get", "getPrototypeOf", "set", "ownKeys", "construct", "setPrototypeOf", "has"])
const v44 = new Proxy(v2,v42);
// v44 = .unknown
v44[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
