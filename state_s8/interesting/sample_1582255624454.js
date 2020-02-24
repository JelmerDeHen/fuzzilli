function main() {
const v2 = new Float32Array(53664);
// v2 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteLength", "byteOffset"], withMethods: ["sort", "some", "indexOf", "find", "subarray", "set", "reverse", "reduce", "join", "values", "keys", "entries", "map", "copyWithin", "includes", "findIndex", "slice", "reduceRight", "lastIndexOf", "filter", "every", "fill", "forEach"])
const v6 = [3156875969,3156875969,1337,DataView];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
for (const v8 in "boolean") {
    let v11 = 0;
    do {
        const v12 = v11 + 1;
        // v12 = .primitive
        v11 = v12;
    } while (v11 < 8);
}
const v13 = v2 >= v6;
// v13 = .boolean
v2[1] = Float32Array;
}
%NeverOptimizeFunction(main);
main();
