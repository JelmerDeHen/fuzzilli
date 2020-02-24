function main() {
function v0(v1,v2) {
    let v6 = 0;
    let v9 = 0;
    const v10 = v9 + 1;
    // v10 = .primitive
    v9 = v10;
    const v11 = v6 + 1;
    // v11 = .primitive
    v6 = v11;
}
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v14 = v13;
const v15 = v0(v14);
// v15 = .unknown
const v20 = {set:v0,getPrototypeOf:v15,getOwnPropertyDescriptor:v0,get:v15};
// v20 = .object(ofGroup: Object, withProperties: ["get", "getPrototypeOf", "__proto__"], withMethods: ["set", "getOwnPropertyDescriptor"])
const v22 = new Uint32Array(Int16Array,v20);
// v22 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "byteLength", "constructor", "byteOffset", "__proto__"], withMethods: ["some", "copyWithin", "reduce", "lastIndexOf", "forEach", "indexOf", "findIndex", "fill", "slice", "every", "set", "join", "values", "filter", "reverse", "subarray", "sort", "reduceRight", "includes", "keys", "map", "find", "entries"])
}
%NeverOptimizeFunction(main);
main();
