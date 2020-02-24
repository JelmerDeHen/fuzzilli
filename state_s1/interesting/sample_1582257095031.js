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
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v23 = v22;
const v24 = v3(v23);
// v24 = .unknown
const v25 = {isExtensible:v24,defineProperty:isFinite,deleteProperty:v24,call:v3,has:v3,set:v3};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible", "deleteProperty"], withMethods: ["set", "has", "defineProperty", "call"])
const v27 = new Proxy(Float32Array,v25);
// v27 = .unknown
const v28 = v27.__proto__;
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
