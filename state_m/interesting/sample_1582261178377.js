function main() {
function v0(v1,v2) {
    const v5 = new Int16Array(19873);
    // v5 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
    const v7 = [1337];
    // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v8 = v7;
    let v10 = undefined;
    try {
        v1.valueOf = v8;
    } catch(v11) {
    }
    for (const v13 in "boolean") {
        let v16 = 0;
        do {
            let v19 = 0;
            const v20 = v19 + 1;
            // v20 = .primitive
            v19 = v20;
            const v21 = v16 + 1;
            // v21 = .primitive
            v16 = v21;
        } while (v16 < 8);
    }
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v24 = v23;
const v25 = v0(v24);
// v25 = .unknown
const v26 = v0(1337,v25);
// v26 = .unknown
const v27 = v0();
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
