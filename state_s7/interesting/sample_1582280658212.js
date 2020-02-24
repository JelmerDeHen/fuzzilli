function main() {
function v0(v1,v2,v3,v4,v5) {
    'use strict'
    let v9 = 0;
    const v10 = v9 + 1;
    // v10 = .primitive
    const v14 = [13.37,13.37,13.37,13.37];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v16 = {e:1337,valueOf:WeakMap,a:v14,__proto__:1337};
    // v16 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "a", "e"])
    const v18 = [1337,1337];
    // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    function v19(v20,v21) {
        for (const v23 in "boolean") {
            let v26 = 0;
            do {
                const v27 = [];
                // v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
                const v29 = v27.map(v19,"boolean");
                // v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
                for (let v33 = 0; v33 < 3; v33++) {
                }
                const v34 = v26 + 1;
                // v34 = .primitive
                v26 = v34;
            } while (v26 < 8);
            const v37 = {b:1337,e:1337,toString:v21,d:Uint16Array};
            // v37 = .object(ofGroup: Object, withProperties: ["b", "d", "__proto__", "e", "toString"])
            const v39 = [v37,13.37,13.37,13.37,13.37];
            // v39 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            function v40(v41,v42) {
                'use strict'
                return v39;
            }
        }
    }
    const v43 = v19(v16);
    // v43 = .unknown
    const v44 = v18.sort(v19);
    // v44 = .undefined
    v9 = v10;
}
const v48 = v0();
// v48 = .unknown
}
%NeverOptimizeFunction(main);
main();
