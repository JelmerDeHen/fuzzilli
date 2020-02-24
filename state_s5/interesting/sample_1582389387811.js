function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [v3];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {a:1337,c:v3,toString:13.37,d:v4,valueOf:ArrayBuffer,__proto__:v4,e:v3};
// v5 = .object(ofGroup: Object, withProperties: ["a", "d", "e", "toString", "c", "__proto__", "valueOf"])
function v7(v8,v9,v10,v11) {
    'use strict'
    const v13 = {a:isFinite};
    // v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
    const v15 = [1337,v13,1337,1337,1337];
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    function v16(v17,v18) {
        function v19(v20,v21) {
        }
        const v24 = new Uint16Array(1000);
        // v24 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "byteOffset", "length", "byteLength", "__proto__", "constructor"], withMethods: ["join", "slice", "sort", "reduceRight", "reverse", "forEach", "values", "some", "findIndex", "find", "keys", "map", "filter", "fill", "set", "includes", "subarray", "reduce", "indexOf", "entries", "every", "copyWithin", "lastIndexOf"])
        try {
            const v29 = isFinite(v5);
            // v29 = .boolean
        } catch(v30) {
            const v31 = {__proto__:v30,a:v19,...v24,...1073741824,...v30,...v24};
            // v31 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "byteOffset", "constructor", "buffer", "byteLength"], withMethods: ["every", "join", "forEach", "subarray", "a", "entries", "some", "copyWithin", "findIndex", "keys", "map", "reduceRight", "includes", "fill", "reduce", "slice", "sort", "filter", "find", "values", "reverse", "set", "indexOf", "lastIndexOf"])
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
