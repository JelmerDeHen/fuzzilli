function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = new Float32Array(11351);
// v7 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "constructor", "buffer", "length", "__proto__"], withMethods: ["filter", "every", "fill", "copyWithin", "slice", "includes", "entries", "reduceRight", "indexOf", "sort", "map", "lastIndexOf", "find", "values", "reverse", "reduce", "findIndex", "join", "keys", "some", "set", "subarray", "forEach"])
const v8 = RegExp("LVcUXLRGrY");
// v8 = .object()
const v9 = "LVcUXLRGrY".__proto__;
// v9 = .object()
const v11 = [1337,1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v12 = [v4,RegExp,-4294967296,-4294967296];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v13 = {c:1337,valueOf:v11,b:13.37,e:-4294967296};
// v13 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "__proto__", "e", "c"])
const v14 = {e:-4294967296,__proto__:v12,b:RegExp};
// v14 = .object(ofGroup: Object, withProperties: ["e", "__proto__"], withMethods: ["b"])
let v15 = 13.37;
v15 = v12;
v15 = v4;
const v17 = Float32Array || v4;
// v17 = .boolean
let v20 = 0;
while (v20 < 1) {
    const v21 = v20 + 1;
    // v21 = .primitive
    v20 = v21;
}
let v24 = 0;
while (v24 < 7) {
    for (let v28 = 0; v28 < 8; v28++) {
    }
    const v29 = v24 + 1;
    // v29 = .primitive
    v24 = v29;
}
const v32 = 1337 - Infinity;
// v32 = .number
let v33 = v32;
delete Math.E;
const v35 = {get:RegExp,set:RegExp};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v37 = Object.defineProperty(v9,"b",v35);
// v37 = .undefined
let v38 = 7;
for (const v39 in v7) {
    const v40 = new RegExp(v39);
    // v40 = .object()
}
const v41 = Math.pow(v33,Infinity);
// v41 = .number
}
%NeverOptimizeFunction(main);
main();
