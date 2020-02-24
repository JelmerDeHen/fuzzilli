function main() {
function v0(v1,v2) {
    let v5 = 0;
    const v6 = v5 + 1;
    // v6 = .primitive
    v5 = v6;
    let v17 = undefined;
    function v20(v21,v22) {
        const v25 = new Uint16Array(1000);
        // v25 = .object(ofGroup: Uint16Array, withProperties: ["length", "byteLength", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["fill", "findIndex", "filter", "entries", "map", "find", "sort", "every", "reduce", "join", "set", "copyWithin", "subarray", "reverse", "some", "indexOf", "includes", "reduceRight", "lastIndexOf", "values", "slice", "keys", "forEach"])
        const v30 = Symbol.toStringTag;
        // v30 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        const v31 = v25[v30];
        // v31 = .unknown
        for (let v32 = 0; v32 < 100; v32++) {
        }
    }
    const v34 = [1337];
    // v34 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v35 = v34;
    const v36 = v20(v35);
    // v36 = .unknown
    const v37 = v20(JSON,"function");
    // v37 = .unknown
    const v40 = new Int16Array(19873);
    // v40 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
    for (const v41 of v40) {
    }
    const v42 = {c:13.37};
    // v42 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
    const v43 = gc();
    // v43 = .undefined
}
const v51 = [1337];
// v51 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
