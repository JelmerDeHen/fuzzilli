function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
let v7 = 0;
do {
    function v8(v9,v10) {
        function v11(v12,v13,v14) {
            'use strict'
        }
        let v17 = 0;
        const v19 = [1337,1337];
        // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v22 = {get:v9};
        // v22 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
        const v24 = new Proxy(v11,v22);
        // v24 = .unknown
        v17 = 8;
        v19[-2153550164] = v8;
        const v29 = v9 == undefined;
        // v29 = .boolean
        let v30 = gc;
        if (v24) {
        } else {
            const v31 = v8(...v11,...v11,v9,v17,...undefined);
            // v31 = .unknown
            v30 = v29;
        }
        const v35 = new Int16Array(19873);
        // v35 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
        for (const v36 of v35) {
        }
    }
    const v38 = [1337];
    // v38 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v39 = v38;
    const v40 = v8(v39);
    // v40 = .unknown
    const v41 = v7 + 1;
    // v41 = .primitive
    v7 = v41;
} while (v7 <= 3);
}
%NeverOptimizeFunction(main);
main();
