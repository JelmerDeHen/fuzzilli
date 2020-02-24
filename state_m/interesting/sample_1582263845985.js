function main() {
function v0(v1,v2) {
    let v5 = 0;
    for (const v6 in "boolean") {
        let v8 = 0;
        try {
            const v11 = DataView(4294967296);
            // v11 = .unknown
        } catch(v12) {
            const v17 = [1337,1337,1337];
            // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            let v19 = 0;
            const v22 = new Float32Array(22340);
            // v22 = .object(ofGroup: Float32Array, withProperties: ["constructor", "length", "byteLength", "buffer", "byteOffset", "__proto__"], withMethods: ["values", "copyWithin", "find", "some", "subarray", "findIndex", "reduce", "indexOf", "includes", "forEach", "every", "join", "sort", "reverse", "keys", "entries", "slice", "fill", "map", "lastIndexOf", "filter", "set", "reduceRight"])
            const v23 = [v19,...v22];
            // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            v23[7] = v17;
            for (let v24 = 0; v24 < 100; v24++) {
                v12.length = 5;
            }
        }
        const v26 = v8 + 1;
        // v26 = .primitive
    }
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v29 = v28;
const v30 = v0(v29);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
