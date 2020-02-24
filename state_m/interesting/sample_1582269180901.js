function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v2(v3,v4) {
    let v8 = 0;
    for (const v9 in "boolean") {
        let v12 = 0;
        do {
            let v15 = 0;
            do {
                const v16 = v15 + 1;
                // v16 = .primitive
                v15 = v16;
            } while (v15 < 7);
            const v18 = [1337,1337,1337];
            // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            let v21 = 0;
            while (v21 < 6) {
                v8 = 0;
                const v22 = v21 + 1;
                // v22 = .primitive
                v21 = v22;
            }
            const v24 = {set:v2,get:v2};
            // v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
            const v26 = Object.defineProperty(v18,"__proto__",v24);
            // v26 = .undefined
            const v27 = v12 + 1;
            // v27 = .primitive
            v12 = v27;
        } while (v12 < 8);
    }
    const v30 = new Uint8Array(34640);
    // v30 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteOffset", "buffer", "__proto__", "constructor", "byteLength"], withMethods: ["keys", "findIndex", "filter", "indexOf", "reduceRight", "sort", "map", "some", "subarray", "reduce", "fill", "lastIndexOf", "set", "values", "entries", "reverse", "every", "includes", "join", "slice", "copyWithin", "forEach", "find"])
    const v31 = v8 + 1;
    // v31 = .primitive
}
let v32 = v1;
const v33 = v2(v32);
// v33 = .unknown
let v37 = 0;
let v40 = 0;
}
%NeverOptimizeFunction(main);
main();
