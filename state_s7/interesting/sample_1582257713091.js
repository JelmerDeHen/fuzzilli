function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
function v2(v3,v4) {
    for (const v6 in "prototype") {
        let v9 = 0;
        do {
            const v10 = v9 + 1;
            // v10 = .primitive
            v9 = v10;
        } while (v9 < 8);
    }
    const v13 = new Int16Array(19873);
    // v13 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
    const v14 = v0.__proto__;
    // v14 = .object()
    const v16 = Symbol.search;
    // v16 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
    v14[v16] = 1;
    for (const v17 of v13) {
        let v20 = 0;
        const v21 = v20 + 1;
        // v21 = .primitive
        v20 = v21;
    }
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v24 = v23;
const v25 = v2(v24);
// v25 = .unknown
const v26 = v2();
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
