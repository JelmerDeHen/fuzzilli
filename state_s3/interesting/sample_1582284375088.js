function main() {
function v0(v1,v2) {
    let v5 = 0;
    const v6 = v5 + 1;
    // v6 = .primitive
    v5 = v6;
    let v17 = undefined;
    function v20(v21,v22) {
        const v25 = new Uint16Array(1000);
        // v25 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "byteOffset", "length", "constructor", "buffer", "byteLength"], withMethods: ["entries", "join", "lastIndexOf", "forEach", "filter", "slice", "reduce", "reverse", "findIndex", "keys", "fill", "map", "every", "set", "reduceRight", "includes", "sort", "find", "subarray", "indexOf", "values", "some", "copyWithin"])
        const v30 = Symbol.toStringTag;
        // v30 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        const v31 = v25[v30];
        // v31 = .unknown
        for (let v32 = 0; v32 < 100; v32++) {
        }
    }
    const v34 = [1337];
    // v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v35 = v34;
    const v36 = v20(v35);
    // v36 = .unknown
    const v37 = v20(JSON,"function");
    // v37 = .unknown
    const v40 = new Int16Array(19873);
    // v40 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
    for (const v41 of v40) {
    }
    const v42 = {c:13.37};
    // v42 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
    const v43 = gc();
    // v43 = .undefined
}
const v51 = [1337];
// v51 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
