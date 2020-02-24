function main() {
function v3(v4,v5) {
    let v12 = 0;
    let v15 = 0;
    const v16 = v15 + 1;
    // v16 = .primitive
    v15 = v16;
    const v21 = v12 + 1;
    // v21 = .primitive
    v12 = v21;
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v23 = v22;
const v24 = v3(v23);
// v24 = .unknown
const v25 = {isExtensible:v24,defineProperty:isFinite,deleteProperty:v24,call:v3,has:v3,set:v3};
// v25 = .object(ofGroup: Object, withProperties: ["isExtensible", "deleteProperty", "__proto__"], withMethods: ["defineProperty", "set", "has", "call"])
const v27 = new Proxy(Float32Array,v25);
// v27 = .unknown
const v28 = v27.__proto__;
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
