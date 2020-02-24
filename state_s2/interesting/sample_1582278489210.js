function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
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
    // v13 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
    const v14 = v13.byteLength;
    // v14 = .integer
    for (const v15 of v13) {
    }
    const v16 = {e:v14,a:v14,...v1};
    // v16 = .object(ofGroup: Object, withProperties: ["constructor", "length", "a", "e", "__proto__"], withMethods: ["join", "copyWithin", "some", "values", "reduceRight", "fill", "unshift", "forEach", "slice", "every", "entries", "reduce", "indexOf", "toLocaleString", "lastIndexOf", "splice", "concat", "find", "push", "toString", "sort", "map", "flat", "shift", "filter", "reverse", "includes", "findIndex", "keys", "flatMap", "pop"])
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
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v35 = v34;
const v36 = v2(v35);
// v36 = .unknown
const v37 = v2();
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
