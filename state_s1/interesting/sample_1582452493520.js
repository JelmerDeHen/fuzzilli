function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = (65536).__proto__;
// v3 = .unknown
let v4 = v1;
let v5 = v4;
const v8 = new Uint8Array(v5,Object);
// v8 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "byteOffset", "length", "buffer", "constructor"], withMethods: ["reverse", "copyWithin", "forEach", "filter", "some", "indexOf", "lastIndexOf", "slice", "values", "every", "fill", "subarray", "findIndex", "keys", "reduceRight", "includes", "map", "reduce", "join", "sort", "set", "find", "entries"])
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
