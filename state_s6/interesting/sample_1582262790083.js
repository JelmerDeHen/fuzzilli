function main() {
const v5 = [-2335287802,"MIN_VALUE",13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = v5.__proto__;
// v6 = .object()
function v7(v8,v9) {
    for (const v11 in "boolean") {
        const v13 = 0 * v8;
        // v13 = .number
        let v15 = 0;
        do {
            for (let v19 = 0; v19 != 0; v19 = v19 && 1) {
                const v20 = {get:v7};
                // v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
                const v22 = Proxy(v19,v20);
                // v22 = .unknown
                function v23(v24,v25,v26,v27,v28) {
                    'use strict'
                }
                const v29 = 8 << 0;
                // v29 = .integer
                v6[10000] = v13;
            }
            const v31 = v15 + 1;
            // v31 = .primitive
            v15 = v31;
        } while (v15 < 8);
    }
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v34 = v33;
const v35 = v7(v34);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
