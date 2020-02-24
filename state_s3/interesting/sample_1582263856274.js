function main() {
function v0(v1,v2) {
    let v6 = 0;
    do {
        let v9 = 0;
        while (v9 < 9) {
            const v10 = v9 % 9;
            // v10 = .number
            const v13 = new Int16Array(19873);
            // v13 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
            const v14 = v10 + 1;
            // v14 = .primitive
            v9 = v14;
        }
        const v18 = v6 + 1;
        // v18 = .primitive
        v6 = v18;
    } while (v6 < 8);
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v21 = v20;
const v22 = v0(v21);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
