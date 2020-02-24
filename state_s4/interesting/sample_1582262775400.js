function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            let v12 = 0;
            do {
                const v13 = v12 + 1;
                // v13 = .primitive
                const v14 = "boolean" === v13;
                // v14 = .boolean
                v0.toString = v3;
                v12 = v13;
            } while (v12 < 7);
            let v16 = 0;
            const v17 = v16 + 1;
            // v17 = .primitive
            let v21 = undefined;
            let v25 = 0;
            const v27 = v25 + 1;
            // v27 = .primitive
            v25 = v27;
            const v30 = [1337];
            // v30 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            let v31 = v30;
            const v33 = new Float32Array(Float32Array,v31,undefined);
            // v33 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "length", "constructor", "buffer", "__proto__"], withMethods: ["slice", "entries", "some", "set", "indexOf", "join", "includes", "map", "lastIndexOf", "keys", "forEach", "reduce", "fill", "findIndex", "reduceRight", "find", "subarray", "copyWithin", "reverse", "sort", "filter", "every", "values"])
            const v36 = 1337 == 13.37;
            // v36 = .boolean
            let v37 = v33;
            v37[v17] = v36;
            const v38 = v9 + 1;
            // v38 = .primitive
            v9 = v38;
        } while (v9 < 8);
    }
}
const v40 = [1337];
// v40 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v41 = v40;
const v42 = v2(v41);
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
