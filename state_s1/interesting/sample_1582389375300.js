function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = [v3];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = {a:1337,c:v3,toString:13.37,d:v4,valueOf:ArrayBuffer,__proto__:v4,e:v3};
// v5 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "__proto__", "c", "d", "e", "toString"])
function v7(v8,v9,v10,v11) {
    'use strict'
    const v13 = {a:isFinite};
    // v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
    const v15 = [1337,v13,1337,1337,1337];
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    function v16(v17,v18) {
        function v19(v20,v21) {
        }
        const v24 = new Uint16Array(1000);
        // v24 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["every", "findIndex", "reduceRight", "some", "values", "find", "fill", "forEach", "map", "filter", "reduce", "join", "subarray", "includes", "lastIndexOf", "indexOf", "keys", "copyWithin", "sort", "set", "entries", "reverse", "slice"])
        try {
            const v29 = isFinite(v5);
            // v29 = .boolean
        } catch(v30) {
            const v31 = {__proto__:v30,a:v19,...v24,...1073741824,...v30,...v24};
            // v31 = .object(ofGroup: Object, withProperties: ["__proto__", "byteOffset", "length", "buffer", "constructor", "byteLength"], withMethods: ["indexOf", "find", "findIndex", "sort", "reduceRight", "subarray", "lastIndexOf", "some", "reduce", "includes", "values", "copyWithin", "join", "a", "fill", "map", "set", "reverse", "slice", "keys", "entries", "filter", "forEach", "every"])
        }
    }
    const v32 = v15.forEach(v16,1337);
    // v32 = .undefined
}
const v33 = {set:v7};
// v33 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v35 = v33.set(v33,Symbol);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
