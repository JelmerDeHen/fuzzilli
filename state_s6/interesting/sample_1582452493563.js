function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = (65536).__proto__;
// v3 = .unknown
let v4 = v1;
let v5 = v4;
const v8 = new Uint8Array(v5,Object);
// v8 = .object(ofGroup: Uint8Array, withProperties: ["byteOffset", "length", "constructor", "byteLength", "buffer", "__proto__"], withMethods: ["findIndex", "set", "reduce", "reduceRight", "indexOf", "keys", "subarray", "values", "sort", "lastIndexOf", "forEach", "map", "copyWithin", "entries", "find", "reverse", "includes", "some", "join", "fill", "slice", "filter", "every"])
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
