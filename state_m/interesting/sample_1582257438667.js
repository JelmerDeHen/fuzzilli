function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [v4,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {d:13.37,a:-65537,b:-65537,constructor:13.37,__proto__:v4,valueOf:v4,e:v7};
// v8 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "__proto__", "e", "d", "a", "constructor"])
const v9 = {constructor:"species"};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
let v10 = -65537;
const v13 = new Float32Array(20368);
// v13 = .object(ofGroup: Float32Array, withProperties: ["constructor", "length", "byteLength", "buffer", "byteOffset", "__proto__"], withMethods: ["values", "copyWithin", "find", "some", "subarray", "findIndex", "reduce", "indexOf", "includes", "forEach", "every", "join", "sort", "reverse", "keys", "entries", "slice", "fill", "map", "lastIndexOf", "filter", "set", "reduceRight"])
let v16 = 0;
do {
    for (const v17 in v13) {
    }
    const v19 = Symbol.species;
    // v19 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    const v20 = v16 + 1;
    // v20 = .primitive
    v16 = v20;
} while (v16 < 6);
const v22 = gc();
// v22 = .undefined
}
%NeverOptimizeFunction(main);
main();
