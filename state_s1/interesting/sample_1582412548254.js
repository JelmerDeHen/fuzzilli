function main() {
const v3 = [-2887278826,1337,"FV.x+lA7RO"];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v5(v6,v7) {
    let v9 = 0;
    const v10 = "Nz76fg+VWn" + 1;
    // v10 = .primitive
    v9 = v10;
    const v11 = v3[v10];
    // v11 = .unknown
    this.valueOf = v9;
    const v14 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "ownKeys", "defineProperty", "apply", "construct", "getOwnPropertyDescriptor", "isExtensible", "get", "preventExtensions", "set", "getPrototypeOf"])
    const v16 = new ArrayBuffer(gc,v14);
    // v16 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    v16.toString = valueOf;
}
for (let v21 = 0; v21 < 100; v21++) {
    const v22 = v5();
    // v22 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
