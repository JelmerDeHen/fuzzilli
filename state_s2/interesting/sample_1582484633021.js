function main() {
const v1 = [5.0,5.0,5.0,5.0];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v2(v3,v4) {
    const v7 = [13.37];
    // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    function v8(v9,v10) {
        for (const v12 in "boolean") {
            function v13(v14,v15,v16,v17) {
                'use strict'
            }
            const v21 = {a:1337,valueOf:13.37,e:isNaN};
            // v21 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "a"], withMethods: ["e"])
            function v23(v24,v25,v26,v27,...v28) {
                const v30 = [1337];
                // v30 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
                let v31 = v30;
                const v32 = {b:1337,e:v31,length:v21,__proto__:v23,d:v26,...v23};
                // v32 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "b", "d", "length"], withMethods: ["__proto__"])
            }
            const v33 = v23(1337);
            // v33 = .unknown
        }
    }
    const v37 = ["nVkEIOUd+c",13.37];
    // v37 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v38 = {b:v37};
    // v38 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
    const v39 = new Promise(v8,v38,"undefined",v7,"undefined");
    // v39 = .object()
    let v42 = 0;
    while (v42 < 1337) {
        const v43 = v42 + 1;
        // v43 = .primitive
        v42 = v43;
    }
}
const v44 = v1.sort(v2);
// v44 = .undefined
}
%NeverOptimizeFunction(main);
main();
