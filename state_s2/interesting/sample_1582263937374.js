function main() {
function v2(v3,v4) {
    let v11 = 0;
    for (const v12 in "boolean") {
        let v15 = 0;
        do {
            let v18 = 0;
            const v19 = v18 + 1;
            // v19 = .primitive
            v18 = v19;
            const v33 = v15 + 1;
            // v33 = .primitive
            v15 = v33;
        } while (v15 < 8);
    }
    const v34 = v11 + 1;
    // v34 = .primitive
    v11 = v34;
    const v43 = 1337 == 13.37;
    // v43 = .boolean
    const v45 = Object();
    // v45 = .object()
    const v48 = new Uint8Array(28499);
    // v48 = .object(ofGroup: Uint8Array, withProperties: ["buffer", "byteLength", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["copyWithin", "keys", "forEach", "findIndex", "map", "sort", "entries", "subarray", "includes", "set", "reverse", "reduceRight", "join", "values", "fill", "indexOf", "every", "slice", "find", "filter", "some", "reduce", "lastIndexOf"])
    let v51 = 0;
    const v52 = v51 + 1;
    // v52 = .primitive
    v51 = v52;
    let v55 = 0;
    for (let v59 = 0; v59 < 100; v59++) {
        const v60 = Object(v48,v2);
        // v60 = .object()
    }
    const v61 = v55 + 1;
    // v61 = .primitive
    v55 = v61;
    let v64 = 0;
    const v65 = v64 + 1;
    // v65 = .primitive
    v64 = v65;
}
const v67 = [1337];
// v67 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v68 = v67;
const v69 = v2(v68);
// v69 = .unknown
const v70 = v2("MAX_VALUE",13.37);
// v70 = .unknown
}
%NeverOptimizeFunction(main);
main();
