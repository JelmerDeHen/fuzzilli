function main() {
const v2 = new Uint32Array(27576);
// v2 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "byteLength", "constructor", "byteOffset", "__proto__"], withMethods: ["some", "copyWithin", "reduce", "lastIndexOf", "forEach", "indexOf", "findIndex", "fill", "slice", "every", "set", "join", "values", "filter", "reverse", "subarray", "sort", "reduceRight", "includes", "keys", "map", "find", "entries"])
function v6(v7,v8) {
    let v12 = 0;
    const v13 = v12 + 1;
    // v13 = .primitive
    v12 = v13;
    let v16 = 0;
    const v17 = v16 + 1;
    // v17 = .primitive
    v16 = v17;
    const v19 = v2.length;
    // v19 = .integer
    let v20 = 0;
    do {
        let v23 = 0;
        do {
            const v24 = v23 + 1;
            // v24 = .primitive
            const v25 = {constructor:3156875969,...v24,...8};
            // v25 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
            v23 = v24;
        } while (v23 < 7);
        const v26 = v20 + 1;
        // v26 = .primitive
        v20 = v26;
    } while (v20 < 8);
    return v19;
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v29 = v28;
const v30 = v6(v29);
// v30 = .unknown
const v31 = v6(1024,4.0);
// v31 = .unknown
const v32 = v6(v31,v29);
// v32 = .unknown
let v35 = 0;
const v36 = v35 + 1;
// v36 = .primitive
v35 = v36;
}
%NeverOptimizeFunction(main);
main();
