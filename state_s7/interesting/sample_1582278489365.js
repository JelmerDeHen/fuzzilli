function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            const v10 = v9 + 1;
            // v10 = .primitive
            v9 = v10;
        } while (v9 < 8);
    }
    const v13 = new Int16Array(19873);
    // v13 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
    const v14 = v13.byteLength;
    // v14 = .integer
    for (const v15 of v13) {
    }
    const v16 = {e:v14,a:v14,...v1};
    // v16 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "length", "constructor", "e"], withMethods: ["push", "indexOf", "fill", "forEach", "find", "unshift", "findIndex", "concat", "toString", "includes", "flat", "sort", "entries", "flatMap", "reduceRight", "map", "keys", "values", "reverse", "toLocaleString", "reduce", "pop", "shift", "splice", "copyWithin", "lastIndexOf", "join", "every", "slice", "some", "filter"])
    let v19 = 0;
    let v22 = 0;
    const v23 = v22 + 1;
    // v23 = .primitive
    v22 = v23;
    const v24 = v19 + 1;
    // v24 = .primitive
    v19 = v24;
    let v27 = 0;
    const v28 = v27 + 1;
    // v28 = .primitive
    v27 = v28;
    let v32 = 0;
}
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v35 = v34;
const v36 = v2(v35);
// v36 = .unknown
const v37 = v2();
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
