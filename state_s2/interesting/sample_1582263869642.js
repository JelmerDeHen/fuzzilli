function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = v4 - 1;
// v5 = .primitive
v4[1024] = "toString";
"toString".valueOf = isFinite;
let v6 = isFinite;
try {
    const v7 = "toString".__proto__;
    // v7 = .object()
    v6 = v7;
} catch(v8) {
    const v9 = ~v4;
    // v9 = .boolean
    v6 = v5;
}
"toString".valueOf = v6;
const v11 = [1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v14 = new Uint8Array(56488);
// v14 = .object(ofGroup: Uint8Array, withProperties: ["buffer", "byteLength", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["copyWithin", "keys", "forEach", "findIndex", "map", "sort", "entries", "subarray", "includes", "set", "reverse", "reduceRight", "join", "values", "fill", "indexOf", "every", "slice", "find", "filter", "some", "reduce", "lastIndexOf"])
"toString".toString = v5;
for (let v18 = 0; v18 < 100; v18++) {
    const v19 = isFinite(v4);
    // v19 = .boolean
}
"toString".length = 1;
const v22 = [v4];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v23 = {__proto__:13.37,length:v22};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v24 = {__proto__:v23,length:v11,valueOf:3356252410};
// v24 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "__proto__"])
let v25 = v4;
const v27 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
// v27 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "getOwnPropertyDescriptor", "ownKeys", "deleteProperty", "defineProperty", "construct", "get", "isExtensible", "getPrototypeOf", "preventExtensions", "apply"])
let v31 = 0;
let v36 = 0;
let v39 = 0;
let v42 = 0;
const v44 = new ArrayBuffer(gc,v27);
// v44 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v46 = v44.slice(0,0);
// v46 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
}
%NeverOptimizeFunction(main);
main();
