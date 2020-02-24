function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = [13.37,v3,-2,Float32Array];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = v4.__proto__;
// v5 = .object()
function v7(v8,v9) {
    let v13 = 0;
    let v19 = 0;
    const v21 = v13 + 1;
    // v21 = .primitive
    v13 = v21;
    return v9;
}
const v22 = {deleteProperty:v7,set:v7,has:v7,isExtensible:v7,getOwnPropertyDescriptor:v7,ownKeys:v7};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "getOwnPropertyDescriptor", "set", "ownKeys", "has", "isExtensible"])
const v24 = new Proxy(v5,v22);
// v24 = .unknown
v24[v4] = 1;
let v27 = 0;
const v28 = v27 + 1;
// v28 = .primitive
v27 = v28;
}
%NeverOptimizeFunction(main);
main();
