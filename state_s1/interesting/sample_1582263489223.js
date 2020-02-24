function main() {
const v1 = [Set];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = {c:Set,d:1337,b:v3,valueOf:1337,e:v1,constructor:v3};
// v4 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "d", "constructor", "valueOf", "e", "c"])
let v7 = 0;
do {
    const v8 = v7 + 1;
    // v8 = .primitive
    function v9(v10,v11) {
        for (const v14 in "boolean") {
            const v18 = new Int8Array(7140);
            // v18 = .object(ofGroup: Int8Array, withProperties: ["buffer", "__proto__", "byteOffset", "length", "constructor", "byteLength"], withMethods: ["fill", "set", "sort", "subarray", "slice", "reduce", "includes", "every", "some", "copyWithin", "reduceRight", "reverse", "indexOf", "lastIndexOf", "values", "entries", "keys", "join", "map", "find", "findIndex", "forEach", "filter"])
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
    // v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
