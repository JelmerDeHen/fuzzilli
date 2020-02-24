function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [2];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v5(v6,v7) {
    const v9 = {get:v5};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
    const v11 = Object.defineProperty(v3,9,v9);
    // v11 = .undefined
    let v14 = 0;
    const v15 = v14 + 1;
    // v15 = .primitive
    const v16 = "object" >> v15;
    // v16 = .integer
    let v19 = 0;
    Object[v6] = 0;
    const v20 = v19 + 1;
    // v20 = .primitive
    v19 = v20;
    const v21 = {setPrototypeOf:Object,getPrototypeOf:v5,deleteProperty:v7,ownKeys:v5,preventExtensions:v5};
    // v21 = .object(ofGroup: Object, withProperties: ["deleteProperty", "__proto__"], withMethods: ["preventExtensions", "ownKeys", "getPrototypeOf", "setPrototypeOf"])
    const v23 = new Proxy(Uint8Array,v21);
    // v23 = .unknown
    const v24 = [v23,Proxy];
    // v24 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
}
const v28 = v4[Uint8Array];
// v28 = .unknown
for (let v32 = 0; v32 < 100; v32++) {
    const v33 = v5(v3);
    // v33 = .unknown
}
let v36 = 0;
}
%NeverOptimizeFunction(main);
main();
