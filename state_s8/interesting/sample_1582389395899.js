function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = [v3];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {a:1337,c:v3,toString:13.37,d:v4,valueOf:ArrayBuffer,__proto__:v4,e:v3};
// v5 = .object(ofGroup: Object, withProperties: ["d", "toString", "c", "a", "valueOf", "__proto__", "e"])
function v7(v8,v9,v10,v11) {
    'use strict'
    const v13 = {a:isFinite};
    // v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
    const v15 = [1337,v13,1337,1337,1337];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    function v16(v17,v18) {
        function v19(v20,v21) {
        }
        const v24 = new Uint16Array(1000);
        // v24 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
        try {
            const v29 = isFinite(v5);
            // v29 = .boolean
        } catch(v30) {
            const v31 = {__proto__:v30,a:v19,...v24,...1073741824,...v30,...v24};
            // v31 = .object(ofGroup: Object, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["reverse", "sort", "copyWithin", "values", "find", "set", "map", "fill", "filter", "reduceRight", "includes", "keys", "slice", "some", "subarray", "forEach", "reduce", "every", "indexOf", "lastIndexOf", "findIndex", "entries", "a", "join"])
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
