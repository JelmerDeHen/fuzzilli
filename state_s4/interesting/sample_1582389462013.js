function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [v3];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = {a:1337,c:v3,toString:13.37,d:v4,valueOf:ArrayBuffer,__proto__:v4,e:v3};
// v5 = .object(ofGroup: Object, withProperties: ["toString", "a", "e", "__proto__", "c", "d", "valueOf"])
function v7(v8,v9,v10,v11) {
    'use strict'
    const v13 = {a:isFinite};
    // v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
    const v15 = [1337,v13,1337,1337,1337];
    // v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    function v16(v17,v18) {
        function v19(v20,v21) {
        }
        const v24 = new Uint16Array(1000);
        // v24 = .object(ofGroup: Uint16Array, withProperties: ["length", "byteLength", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["fill", "findIndex", "filter", "entries", "map", "find", "sort", "every", "reduce", "join", "set", "copyWithin", "subarray", "reverse", "some", "indexOf", "includes", "reduceRight", "lastIndexOf", "values", "slice", "keys", "forEach"])
        try {
            const v29 = isFinite(v5);
            // v29 = .boolean
        } catch(v30) {
            const v31 = {__proto__:v30,a:v19,...v24,...1073741824,...v30,...v24};
            // v31 = .object(ofGroup: Object, withProperties: ["buffer", "__proto__", "byteOffset", "length", "constructor", "byteLength"], withMethods: ["map", "reverse", "a", "every", "some", "sort", "set", "reduce", "fill", "slice", "filter", "indexOf", "forEach", "entries", "subarray", "reduceRight", "includes", "findIndex", "keys", "join", "copyWithin", "find", "values", "lastIndexOf"])
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
