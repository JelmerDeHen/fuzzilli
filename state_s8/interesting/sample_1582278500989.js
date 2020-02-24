function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
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
    // v13 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
    const v14 = v13.byteLength;
    // v14 = .integer
    for (const v15 of v13) {
    }
    const v16 = {e:v14,a:v14,...v1};
    // v16 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "e", "a", "constructor"], withMethods: ["pop", "splice", "unshift", "flat", "fill", "findIndex", "flatMap", "toLocaleString", "indexOf", "keys", "values", "shift", "find", "reverse", "lastIndexOf", "push", "map", "sort", "entries", "some", "forEach", "reduceRight", "every", "toString", "copyWithin", "join", "slice", "reduce", "concat", "includes", "filter"])
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
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v35 = v34;
const v36 = v2(v35);
// v36 = .unknown
const v37 = v2();
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
