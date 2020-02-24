function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [v4,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {d:-1024,constructor:Array,b:"asyncIterator",c:v6};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "c", "b"], withMethods: ["constructor"])
const v9 = {constructor:v8,a:v4,b:Array,valueOf:v4,c:v8};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "a", "valueOf", "__proto__", "c"], withMethods: ["b"])
let v10 = v4;
const v14 = [1337,1337,1337,1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v15(v16,v17,v18,v19) {
    'use strict'
    const v22 = [13.37,13.37,13.37];
    // v22 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    function v23(v24,v25) {
        for (const v27 in "object") {
            const v30 = [1337,1337,1337,1337,1337];
            // v30 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            function v31(v32,v33,v34,v35) {
                'use strict'
                try {
                    const v38 = new Float32Array(19873);
                    // v38 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "length", "constructor", "buffer", "__proto__"], withMethods: ["slice", "entries", "some", "set", "indexOf", "join", "includes", "map", "lastIndexOf", "keys", "forEach", "reduce", "fill", "findIndex", "reduceRight", "find", "subarray", "copyWithin", "reverse", "sort", "filter", "every", "values"])
                    v35[3] = v35;
                } catch(v39) {
                }
                return v30;
            }
            const v40 = {deleteProperty:v31,set:v31,getPrototypeOf:v31,call:v31,preventExtensions:v31,isExtensible:v31,construct:v31,get:v31,ownKeys:v31,setPrototypeOf:v31,has:v31};
            // v40 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "get", "getPrototypeOf", "set", "ownKeys", "has", "preventExtensions", "setPrototypeOf", "call", "construct", "isExtensible"])
            const v42 = new Proxy(v30,v40);
            // v42 = .unknown
            v6[1] = "MIN_VALUE";
        }
        return v9;
    }
    const v43 = ["undefined",v22];
    // v43 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v46 = new Int16Array(19873);
    // v46 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
    const v47 = v23(...v43,...v46);
    // v47 = .unknown
    return v47;
}
with ("MIN_VALUE") {
    const v52 = matchAll();
    // v52 = .unknown
}
const v53 = v15(13.37,1337,v15,v14);
// v53 = .unknown
}
%NeverOptimizeFunction(main);
main();
