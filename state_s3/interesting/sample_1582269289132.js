function main() {
const v1 = [-1000.0];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = new Float32Array(v1);
// v3 = .object(ofGroup: Float32Array, withProperties: ["length", "constructor", "buffer", "__proto__", "byteLength", "byteOffset"], withMethods: ["slice", "some", "findIndex", "reduce", "copyWithin", "reverse", "find", "sort", "indexOf", "filter", "keys", "map", "every", "reduceRight", "lastIndexOf", "fill", "set", "forEach", "subarray", "entries", "values", "includes", "join"])
let v5 = 3999259790;
function v6(v7,v8) {
    const v10 = [1337];
    // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v11 = v10;
    let v13 = undefined;
    for (const v15 in "boolean") {
        v3[1] = v7;
        let v18 = 0;
        while (v18 < 8) {
            const v20 = v18 + 1;
            // v20 = .primitive
            v18 = v20;
        }
    }
    let v23 = v5;
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v27 = v26;
const v28 = v6(v27);
// v28 = .unknown
v3.toString = v28;
const v29 = v6();
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
