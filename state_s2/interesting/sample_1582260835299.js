function main() {
function v2(v3,v4) {
    let v6 = "unscopable";
    function v7(v8,v9) {
        let v11 = 0;
        const v12 = v11 + 1;
        // v12 = .primitive
        const v15 = new Int16Array(19873);
        // v15 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
        v6 = v12;
    }
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v18 = v17;
const v19 = v2(1024,4.0);
// v19 = .unknown
for (const v21 in "object") {
    let v23 = 1903240934;
    const v25 = new Int8Array(v23);
    // v25 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "byteOffset", "byteLength", "length", "buffer"], withMethods: ["reduce", "reverse", "values", "every", "some", "reduceRight", "join", "sort", "entries", "keys", "forEach", "filter", "copyWithin", "subarray", "lastIndexOf", "fill", "find", "slice", "findIndex", "includes", "indexOf", "set", "map"])
}
const v26 = v2(v19,v18);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
