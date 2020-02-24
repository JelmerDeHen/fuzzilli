function main() {
const v2 = new Float32Array(53664);
// v2 = .object(ofGroup: Float32Array, withProperties: ["length", "constructor", "buffer", "__proto__", "byteLength", "byteOffset"], withMethods: ["slice", "some", "findIndex", "reduce", "copyWithin", "reverse", "find", "sort", "indexOf", "filter", "keys", "map", "every", "reduceRight", "lastIndexOf", "fill", "set", "forEach", "subarray", "entries", "values", "includes", "join"])
const v6 = [3156875969,3156875969,1337,DataView];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
