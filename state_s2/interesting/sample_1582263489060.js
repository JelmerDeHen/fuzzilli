function main() {
const v1 = [Set];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = {c:Set,d:1337,b:v3,valueOf:1337,e:v1,constructor:v3};
// v4 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "constructor", "valueOf", "e", "c", "d"])
let v7 = 0;
do {
    const v8 = v7 + 1;
    // v8 = .primitive
    function v9(v10,v11) {
        for (const v14 in "boolean") {
            const v18 = new Int8Array(7140);
            // v18 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "byteOffset", "byteLength", "length", "buffer"], withMethods: ["reduce", "reverse", "values", "every", "some", "reduceRight", "join", "sort", "entries", "keys", "forEach", "filter", "copyWithin", "subarray", "lastIndexOf", "fill", "find", "slice", "findIndex", "includes", "indexOf", "set", "map"])
            let v20 = 0;
            for (const v21 of "boolean") {
            }
            const v22 = v8 + 1;
            // v22 = .primitive
            do {
                v18[v20] = 10;
                const v23 = v20 + 1;
                // v23 = .primitive
                v20 = v23;
            } while (v20 < 8);
        }
    }
    const v25 = [1337];
    // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v26 = v25;
    const v27 = v9(v26);
    // v27 = .unknown
    v7 = v8;
} while (v7 < 7);
const v28 = v4.d;
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
