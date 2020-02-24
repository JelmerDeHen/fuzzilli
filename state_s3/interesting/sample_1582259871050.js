function main() {
function v1(v2,v3) {
    function v7(v8,v9) {
        const v12 = new Int16Array(19873);
        // v12 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
        function v14(v15,v16,v17,v18,v19) {
            const v20 = [Number];
            // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        }
        return v14;
    }
    const v22 = [1337];
    // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v23 = v22;
    const v24 = v7(v23);
    // v24 = .unknown
    const v25 = v7(1337,v24);
    // v25 = .unknown
    const v26 = RegExp(v25);
    // v26 = .object()
    let v28 = 0;
    let v31 = 0;
    const v32 = v31 + 1;
    // v32 = .primitive
    v31 = v32;
    const v33 = v28 + 1;
    // v33 = .primitive
    v28 = v33;
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v36 = v35;
const v37 = v1(v36);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
