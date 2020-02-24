function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v5 = v4;
const v6 = v1.indexOf(13.37);
// v6 = .integer
const v7 = v5 != v6;
// v7 = .boolean
const v14 = [3156875969,3156875969,1337,DataView];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v15 = {e:DataView,constructor:1337,valueOf:1337,d:v14};
// v15 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "constructor", "e", "d"])
const v21 = Object();
// v21 = .object()
const v22 = Object(1337,v21,13.37,v15,3156875969);
// v22 = .object()
const v27 = [13.37,13.37];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v28 = v27[1024];
// v28 = .unknown
let v31 = 0;
let v34 = 0;
let v37 = 0;
const v38 = v37 + 1;
// v38 = .primitive
v37 = v38;
let v41 = 0;
const v45 = v34 + 1;
// v45 = .primitive
v34 = v45;
const v46 = v31 + 1;
// v46 = .primitive
v31 = v46;
try {
    const v52 = v28();
    // v52 = .unknown
} catch(v53) {
    v22.c = v53;
}
const v54 = {c:13.37};
// v54 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
let v60 = 0;
const v61 = v60 + 1;
// v61 = .primitive
v60 = v61;
const v64 = gc();
// v64 = .undefined
function v65(v66,v67,v68,v69,...v70) {
    const v71 = v54.includes(v69,v68,"boolean");
    // v71 = .unknown
}
const v72 = gc();
// v72 = .undefined
}
%NeverOptimizeFunction(main);
main();
