function main() {
const v4 = [-22411.210504713817,-22411.210504713817];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [-162257780,-162257780,-162257780,-162257780,-162257780];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {a:-4278040760,constructor:-22411.210504713817,__proto__:v7,d:"xJs.h31L*m",toString:v4,length:Set};
// v8 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__", "toString", "a", "d"])
const v9 = {constructor:v4};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
let v10 = v9;
function v11(v12,v13) {
    const v15 = {a:v13,preventExtensions:v13,defineProperty:v11,getPrototypeOf:v13,deleteProperty:v13,has:v11,set:v12,apply:v13};
    // v15 = .object(ofGroup: Object, withProperties: ["deleteProperty", "preventExtensions", "set", "__proto__", "getPrototypeOf", "apply", "a"], withMethods: ["defineProperty", "has"])
    const v17 = new Proxy(v11,v15);
    // v17 = .unknown
    const v18 = {__proto__:0,...Proxy,...v11,...v17};
    // v18 = .object(ofGroup: Object, withProperties: ["__proto__"])
    return v8;
}
const v19 = v11();
// v19 = .unknown
const v20 = v19[9007199254740991];
// v20 = .unknown
v10.constructor = "xJs.h31L*m";
const v21 = v11();
// v21 = .unknown
const v22 = v10 % v4;
// v22 = .number
let v23 = v19;
if (v21) {
    v21.c = v21;
    v23 = "xJs.h31L*m";
} else {
    const v24 = v9[1073741824];
    // v24 = .unknown
    v23 = v23;
}
let v27 = 0;
do {
    const v28 = v27 + 1;
    // v28 = .primitive
    v27 = v28;
} while (v27 < 1);
let v31 = 0;
do {
    const v34 = v31 + 1;
    // v34 = .primitive
    v31 = v34;
} while (v31 < 7);
const v35 = v11(v10);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
