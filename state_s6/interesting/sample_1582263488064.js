function main() {
const v1 = [Set];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = {c:Set,d:1337,b:v3,valueOf:1337,e:v1,constructor:v3};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "c", "d", "valueOf", "b", "e"])
let v7 = 0;
do {
    const v8 = v7 + 1;
    // v8 = .primitive
    function v9(v10,v11) {
        for (const v14 in "boolean") {
            const v18 = new Int8Array(7140);
            // v18 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reduce", "sort", "copyWithin", "set", "fill", "slice", "reverse", "includes", "lastIndexOf", "join", "find", "entries", "findIndex", "indexOf", "keys", "forEach", "filter", "map", "every", "subarray", "some", "reduceRight", "values"])
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
    // v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
