function main() {
let v3 = 0;
do {
    function v4(v5,v6) {
        function v7(v8,v9,v10) {
            'use strict'
        }
        let v12 = 0;
        const v14 = [1337,1337];
        // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v15 = {get:v5};
        // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
        const v17 = new Proxy(v7,v15);
        // v17 = .unknown
        v14[257] = v4;
        const v19 = v5 == undefined;
        // v19 = .boolean
        let v20 = gc;
        if (v17) {
        } else {
            const v21 = v4(...v7,...v7,v5,v12,...undefined);
            // v21 = .unknown
            v20 = v19;
        }
        const v24 = new Int16Array(19873);
        // v24 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
        for (const v25 of v24) {
        }
    }
    const v27 = [1337];
    // v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v28 = v27;
    const v29 = v4(v28);
    // v29 = .unknown
    const v30 = v3 + 1;
    // v30 = .primitive
    v3 = v30;
} while (v3 < 3);
}
%NeverOptimizeFunction(main);
main();
