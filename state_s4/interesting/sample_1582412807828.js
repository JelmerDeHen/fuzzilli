function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [-2887278826,1337,"FV.x+lA7RO"];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {__proto__:v6};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v9 = {d:-2887278826,b:v6,c:v4,a:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["b", "a", "d", "c", "__proto__"])
for (let v13 = 0; v13 < 9; v13++) {
    v9.__proto__ = v8;
}
v4.e = v4;
let v14 = 1337;
const v18 = [-2887278826,1337,"FV.x+lA7RO"];
// v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v20(v21,v22) {
    let v24 = 0;
    const v25 = "Nz76fg+VWn" + 1;
    // v25 = .primitive
    v24 = v25;
    const v26 = v18[v25];
    // v26 = .unknown
    this.valueOf = v24;
    const v29 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
    // v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "apply", "getPrototypeOf", "set", "ownKeys", "construct", "defineProperty", "deleteProperty", "getOwnPropertyDescriptor", "preventExtensions", "isExtensible"])
    const v31 = new ArrayBuffer(gc,v29);
    // v31 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    v31.toString = valueOf;
    return v26;
}
for (let v36 = 0; v36 < 100; v36++) {
    const v37 = v20();
    // v37 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
