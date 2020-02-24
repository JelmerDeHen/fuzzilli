function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v4(v5,v6) {
    for (let v10 = 0; v10 < 512; v10++) {
        const v11 = v2.length;
        // v11 = .integer
        const v14 = new Float32Array(15400);
        // v14 = .object(ofGroup: Float32Array, withProperties: ["length", "constructor", "buffer", "__proto__", "byteLength", "byteOffset"], withMethods: ["slice", "some", "findIndex", "reduce", "copyWithin", "reverse", "find", "sort", "indexOf", "filter", "keys", "map", "every", "reduceRight", "lastIndexOf", "fill", "set", "forEach", "subarray", "entries", "values", "includes", "join"])
        v14[1] = v11;
    }
}
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
v2[1337] = 4;
const v22 = v4(0,13.37);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
