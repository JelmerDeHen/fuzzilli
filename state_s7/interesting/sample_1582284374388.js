function main() {
function v0(v1,v2) {
    let v5 = 0;
    const v6 = v5 + 1;
    // v6 = .primitive
    v5 = v6;
    let v17 = undefined;
    function v20(v21,v22) {
        const v25 = new Uint16Array(1000);
        // v25 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
        const v30 = Symbol.toStringTag;
        // v30 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
        const v31 = v25[v30];
        // v31 = .unknown
        for (let v32 = 0; v32 < 100; v32++) {
        }
    }
    const v34 = [1337];
    // v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v35 = v34;
    const v36 = v20(v35);
    // v36 = .unknown
    const v37 = v20(JSON,"function");
    // v37 = .unknown
    const v40 = new Int16Array(19873);
    // v40 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
    for (const v41 of v40) {
    }
    const v42 = {c:13.37};
    // v42 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
    const v43 = gc();
    // v43 = .undefined
}
const v51 = [1337];
// v51 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
