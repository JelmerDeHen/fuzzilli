function main() {
function v0(v1,v2) {
    let v6 = 0;
    do {
        let v9 = 0;
        while (v9 < 9) {
            const v10 = v9 % 9;
            // v10 = .number
            const v13 = new Int16Array(19873);
            // v13 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
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
// v20 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v21 = v20;
const v22 = v0(v21);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
