function main() {
const v2 = new Int16Array(19873);
// v2 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            const v11 = new Int16Array(v2);
            // v11 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
            const v13 = v11.keys();
            // v13 = .object()
            let v15 = 0;
            do {
                const v16 = v15 + 1;
                // v16 = .primitive
                const v18 = [1337,1337,1337,1337];
                // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
                v15 = v16;
            } while (v15 < 7);
            const v19 = v10 + 1;
            // v19 = .primitive
            v10 = v19;
        } while (v10 < 8);
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v22 = v21;
const v23 = v3(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
