function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v3 = (65536).__proto__;
// v3 = .unknown
let v4 = v1;
let v5 = v4;
const v8 = new Uint8Array(v5,Object);
// v8 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["copyWithin", "filter", "reverse", "includes", "findIndex", "every", "subarray", "keys", "set", "some", "reduce", "reduceRight", "join", "sort", "indexOf", "entries", "forEach", "values", "lastIndexOf", "find", "slice", "fill", "map"])
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
