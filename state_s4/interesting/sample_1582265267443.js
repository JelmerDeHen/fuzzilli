function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            let v11 = 0;
            do {
                const v12 = v11 + 1;
                // v12 = .primitive
                const v15 = new Uint8ClampedArray(12355);
                // v15 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "constructor", "byteLength", "length", "__proto__", "byteOffset"], withMethods: ["forEach", "map", "lastIndexOf", "every", "slice", "values", "subarray", "join", "fill", "filter", "copyWithin", "sort", "some", "reduceRight", "entries", "set", "findIndex", "reverse", "reduce", "find", "includes", "indexOf", "keys"])
                v15[v11] = v0;
                v11 = v12;
            } while (v11 < 7);
            const v16 = v8 + 1;
            // v16 = .primitive
            v8 = v16;
        } while (v8 < 8);
    }
}
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v19 = v18;
const v20 = v1(v19);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
