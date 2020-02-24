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
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v23 = v22;
const v24 = v3(v23);
// v24 = .unknown
const v25 = {isExtensible:v24,defineProperty:isFinite,deleteProperty:v24,call:v3,has:v3,set:v3};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__", "deleteProperty", "isExtensible"], withMethods: ["has", "call", "defineProperty", "set"])
const v27 = new Proxy(Float32Array,v25);
// v27 = .unknown
const v28 = v27.__proto__;
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
