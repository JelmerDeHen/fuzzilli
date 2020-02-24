function main() {
function v0(v1,v2,v3,v4,v5) {
    'use strict'
    const v8 = [13.37,13.37,13.37,13.37];
    // v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v10 = {e:1337,valueOf:WeakMap,a:v8,__proto__:1337};
    // v10 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "e", "a"])
    const v12 = [1337,1337];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    function v13(v14,v15) {
        for (const v17 in "boolean") {
            let v20 = 0;
            do {
                const v21 = [];
                // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
                const v23 = v21.map(v13,"boolean");
                // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
                for (let v27 = 0; v27 < 3; v27++) {
                }
                const v28 = v20 + 1;
                // v28 = .primitive
                v20 = v28;
            } while (v20 < 8);
            const v31 = {b:1337,e:1337,toString:v15,d:Uint16Array};
            // v31 = .object(ofGroup: Object, withProperties: ["d", "b", "toString", "__proto__", "e"])
            const v33 = [v31,13.37,13.37,13.37,13.37];
            // v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            function v34(v35,v36) {
                'use strict'
                return v33;
            }
        }
        return 1337;
    }
    const v37 = v13(v10);
    // v37 = .unknown
    const v38 = v12.sort(v13);
    // v38 = .undefined
}
const v39 = v0();
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
