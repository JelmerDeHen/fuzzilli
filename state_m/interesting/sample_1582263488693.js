function main() {
const v1 = [Set];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = {c:Set,d:1337,b:v3,valueOf:1337,e:v1,constructor:v3};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "d", "c", "__proto__", "e", "constructor"])
let v7 = 0;
do {
    const v8 = v7 + 1;
    // v8 = .primitive
    function v9(v10,v11) {
        for (const v14 in "boolean") {
            const v18 = new Int8Array(7140);
            // v18 = .object(ofGroup: Int8Array, withProperties: ["constructor", "buffer", "__proto__", "length", "byteOffset", "byteLength"], withMethods: ["indexOf", "includes", "fill", "entries", "forEach", "reduceRight", "set", "values", "find", "slice", "map", "some", "copyWithin", "findIndex", "reverse", "keys", "filter", "subarray", "reduce", "join", "sort", "lastIndexOf", "every"])
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
    // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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
