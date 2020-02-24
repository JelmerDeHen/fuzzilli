function main() {
function v0(v1,v2) {
    let v5 = 0;
    const v6 = v5 + 1;
    // v6 = .primitive
    v5 = v6;
    let v17 = undefined;
    function v20(v21,v22) {
        const v25 = new Uint16Array(1000);
        // v25 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset", "constructor", "length"], withMethods: ["set", "filter", "some", "sort", "reduce", "lastIndexOf", "fill", "indexOf", "slice", "keys", "reverse", "every", "includes", "values", "entries", "findIndex", "subarray", "reduceRight", "map", "copyWithin", "find", "join", "forEach"])
        const v30 = Symbol.toStringTag;
        // v30 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        const v31 = v25[v30];
        // v31 = .unknown
        for (let v32 = 0; v32 < 100; v32++) {
        }
    }
    const v34 = [1337];
    // v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v35 = v34;
    const v36 = v20(v35);
    // v36 = .unknown
    const v37 = v20(JSON,"function");
    // v37 = .unknown
    const v40 = new Int16Array(19873);
    // v40 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
    for (const v41 of v40) {
    }
    const v42 = {c:13.37};
    // v42 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
    const v43 = gc();
    // v43 = .undefined
}
const v51 = [1337];
// v51 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v52 = v51;
const v53 = v0(v52);
// v53 = .unknown
const v54 = v0(v0);
// v54 = .unknown
const v55 = v0();
// v55 = .unknown
}
%NeverOptimizeFunction(main);
main();
