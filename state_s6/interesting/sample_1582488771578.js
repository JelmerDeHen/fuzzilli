function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [this,v6,v4,v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v9 = {length:1337,a:1337,d:v7,valueOf:13.37,constructor:"Ty*j/kHzHQ"};
// v9 = .object(ofGroup: Object, withProperties: ["d", "constructor", "valueOf", "a", "__proto__", "length"])
let v10 = "Ty*j/kHzHQ";
const v14 = [-2887278826,1337,"FV.x+lA7RO"];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v16(v17,v18) {
    const v20 = 13.37 < 13.37;
    // v20 = .boolean
    let v21 = 0;
    if (v17) {
        const v22 = !v10;
        // v22 = .boolean
        v21 = v20;
    } else {
        const v23 = !"Nz76fg+VWn";
        // v23 = .boolean
        v21 = "Nz76fg+VWn";
    }
    let v24 = 0;
    const v25 = "Nz76fg+VWn" + 1;
    // v25 = .primitive
    v24 = v25;
    const v26 = v14[v25];
    // v26 = .unknown
    this.valueOf = v24;
    const v29 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
    // v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "defineProperty", "ownKeys", "isExtensible", "preventExtensions", "set", "apply", "get", "getOwnPropertyDescriptor", "construct", "getPrototypeOf"])
    const v31 = new ArrayBuffer(gc,v29);
    // v31 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    v31.toString = valueOf;
    return 1337;
}
for (let v36 = 0; v36 < 100; v36++) {
    const v37 = v16();
    // v37 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
