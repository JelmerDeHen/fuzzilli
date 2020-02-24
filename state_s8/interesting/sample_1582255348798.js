function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [13.37,13.37,-4294967297,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {length:v7,constructor:Uint8Array};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
const v9 = {toString:Uint8Array,e:"boolean",constructor:v6,valueOf:v8,b:v7};
// v9 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "toString", "__proto__", "constructor", "e"])
let v10 = "boolean";
const v12 = [13.37,13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v15 = [1337];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v16 = v15;
const v17 = v12.indexOf(13.37);
// v17 = .integer
const v18 = v16 != v17;
// v18 = .boolean
const v25 = [3156875969,3156875969,1337,DataView];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v26 = {e:DataView,constructor:1337,valueOf:1337,d:v25};
// v26 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "constructor", "d", "valueOf"])
const v32 = Object();
// v32 = .object()
const v33 = Object(1337,v32,13.37,v26,3156875969);
// v33 = .object()
const v38 = [13.37,13.37];
// v38 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v39 = v38[1024];
// v39 = .unknown
let v42 = 0;
let v45 = 0;
let v48 = 0;
const v49 = v48 + 1;
// v49 = .primitive
v48 = v49;
let v52 = 0;
const v56 = v45 + 1;
// v56 = .primitive
v45 = v56;
const v57 = v42 + 1;
// v57 = .primitive
v42 = v57;
try {
    const v64 = v39();
    // v64 = .unknown
} catch(v65) {
    v33.c = v65;
}
const v66 = {c:13.37};
// v66 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
let v72 = 0;
const v73 = v72 + 1;
// v73 = .primitive
v72 = v73;
const v76 = gc();
// v76 = .undefined
function v77(v78,v79,v80,v81,...v82) {
    const v83 = v66.includes(v81,v80,"boolean");
    // v83 = .unknown
    return 13.37;
}
const v84 = gc();
// v84 = .undefined
}
%NeverOptimizeFunction(main);
main();
