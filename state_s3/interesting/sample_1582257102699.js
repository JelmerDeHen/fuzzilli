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
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v23 = v22;
const v24 = v3(v23);
// v24 = .unknown
const v25 = {isExtensible:v24,defineProperty:isFinite,deleteProperty:v24,call:v3,has:v3,set:v3};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__", "deleteProperty", "isExtensible"], withMethods: ["defineProperty", "set", "call", "has"])
const v27 = new Proxy(Float32Array,v25);
// v27 = .unknown
const v28 = v27.__proto__;
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
