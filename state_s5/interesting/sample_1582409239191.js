function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v4(v5,v6) {
    let v8 = 0;
    const v9 = ArrayBuffer + 1;
    // v9 = .primitive
    v8 = v9;
    const v10 = v2[v8];
    // v10 = .unknown
    let v13 = 0;
    const v14 = v6 & 65536;
    // v14 = .integer
    const v15 = v13 + 1;
    // v15 = .primitive
    v13 = v15;
    let v18 = 0;
    const v19 = v6 == v8;
    // v19 = .boolean
    const v20 = v18 + 1;
    // v20 = .primitive
    v18 = v20;
    this.valueOf = v8;
    const v23 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
    // v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "isExtensible", "defineProperty", "ownKeys", "deleteProperty", "apply", "set", "preventExtensions", "getOwnPropertyDescriptor", "getPrototypeOf", "get"])
    const v25 = new ArrayBuffer(gc,v23);
    // v25 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    v25.toString = valueOf;
}
for (let v30 = 0; v30 < 100; v30++) {
    const v31 = v4();
    // v31 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
