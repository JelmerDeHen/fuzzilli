function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
    // v13 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
    const v14 = v13.byteLength;
    // v14 = .integer
    for (const v15 of v13) {
    }
    const v16 = {e:v14,a:v14,...v1};
    // v16 = .object(ofGroup: Object, withProperties: ["e", "a", "__proto__", "length", "constructor"], withMethods: ["slice", "sort", "shift", "unshift", "forEach", "lastIndexOf", "every", "splice", "reverse", "includes", "flatMap", "reduce", "toLocaleString", "toString", "filter", "entries", "some", "copyWithin", "push", "values", "findIndex", "keys", "map", "reduceRight", "pop", "join", "fill", "indexOf", "find", "flat", "concat"])
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
// v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v35 = v34;
const v36 = v2(v35);
// v36 = .unknown
const v37 = v2();
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
