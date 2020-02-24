function main() {
function v2(v3,v4) {
    let v8 = 0;
    const v9 = v8 + 1;
    // v9 = .primitive
    v8 = v9;
    const v14 = [1337,1337];
    // v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v15 = {b:13.37,d:1607264097,e:1607264097,constructor:v14,valueOf:WeakSet};
    // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "d", "constructor", "b", "e"])
    const v18 = new Int16Array(19873);
    // v18 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
    return 1024;
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v22 = v21;
const v23 = v2(v22);
// v23 = .unknown
const v24 = v2(1024,4.0);
// v24 = .unknown
const v25 = JSON.parse(v23);
// v25 = .unknown
let v28 = 0;
const v29 = v28 + 1;
// v29 = .primitive
v28 = v29;
}
%NeverOptimizeFunction(main);
main();
