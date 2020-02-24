function main() {
const v3 = new Int16Array(19873);
// v3 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v5 = v4;
function v8(v9,v10) {
    for (let v14 = 0; v14 < 10; v14++) {
    }
    let v17 = 0;
    let v20 = 0;
    do {
        let v23 = 0;
        do {
            const v24 = v23 + 1;
            // v24 = .primitive
            const v25 = [v24,v24,3];
            // v25 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            function v26(v27,v28,v29,v30,v31) {
            }
            v23 = v24;
        } while (v23 < 7);
        const v35 = v20 + 1;
        // v35 = .primitive
        v20 = v35;
    } while (v20 < 8);
    do {
        const v36 = v17 + 1;
        // v36 = .primitive
        v17 = v36;
    } while (v17 < 3);
    const v37 = v3[8];
    // v37 = .unknown
    const v38 = v37[v5];
    // v38 = .unknown
    for (const v40 in "object") {
    }
}
const v42 = [1337];
// v42 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v43 = v42;
const v44 = v8(v43);
// v44 = .unknown
const v45 = v8(1024,4.0);
// v45 = .unknown
const v46 = v8(v45,v43);
// v46 = .unknown
}
%NeverOptimizeFunction(main);
main();
