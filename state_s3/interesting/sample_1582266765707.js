function main() {
let v1 = 1337;
const v3 = {c:1337};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
function v4(v5,v6) {
    function v8(v9,v10) {
        const v13 = new Int16Array(19873);
        // v13 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
    }
    const v18 = [1337];
    // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    for (const v19 in "boolean") {
        let v22 = 0;
        do {
            let v25 = 0;
            const v26 = v25 + 1;
            // v26 = .primitive
            v25 = v26;
            let v29 = 0;
            while (v29 < 6) {
                const v30 = v18.some(v8);
                // v30 = .boolean
                const v31 = v29 + 1;
                // v31 = .primitive
                v29 = v31;
            }
            const v32 = v22 + 1;
            // v32 = .primitive
            v22 = v32;
        } while (v22 < 8);
    }
}
const v33 = v4(v1,v3);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
