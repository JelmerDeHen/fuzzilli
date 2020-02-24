function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v3 = (65536).__proto__;
// v3 = .unknown
let v4 = v1;
let v5 = v4;
const v8 = new Uint8Array(v5,Object);
// v8 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteOffset", "buffer", "__proto__", "constructor", "byteLength"], withMethods: ["keys", "findIndex", "filter", "indexOf", "reduceRight", "sort", "map", "some", "subarray", "reduce", "fill", "lastIndexOf", "set", "values", "entries", "reverse", "every", "includes", "join", "slice", "copyWithin", "forEach", "find"])
v3.__proto__ = v8;
let v11 = 0;
while (v11 < 1337) {
    const v12 = v11 + 1;
    // v12 = .primitive
    let v15 = v12;
    const v16 = Math.pow(v15,9);
    // v16 = .number
    const v17 = v11[v16];
    // v17 = .unknown
    v11 = v12;
}
}
%NeverOptimizeFunction(main);
main();
