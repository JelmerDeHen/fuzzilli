function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = ["undefined",13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {b:2147483647};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v9 = {__proto__:Uint8Array,a:v8,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "constructor", "d", "valueOf", "b"])
let v10 = Uint8Array;
let v14 = 0;
do {
    const v15 = v14 + 1;
    // v15 = .primitive
    v14 = v15;
} while (v14 < 7);
let v20 = 0;
while (v20 < 7) {
    const v21 = v20 + 1;
    // v21 = .primitive
    v20 = v21;
}
for (const v23 in "object") {
}
let v26 = 0;
while (v26 < 9) {
    const v27 = v26 + 1;
    // v27 = .primitive
    v26 = v27;
}
let v30 = 0;
do {
    const v31 = v30 + 1;
    // v31 = .primitive
    v30 = v31;
} while (v30 < 9);
for (let v35 = 0; v35 < 9; v35++) {
}
for (const v36 of "iterator") {
}
const v37 = gc();
// v37 = .undefined
const v38 = [];
// v38 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v44 = [1337];
// v44 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v45 = {b:v44,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v45 = .object(ofGroup: Object, withProperties: ["length", "e", "valueOf", "a", "__proto__", "b"])
const v47 = {set:gc,get:gc};
// v47 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v49 = Object.defineProperty(v44,-128,v47);
// v49 = .undefined
let v51 = 0;
const v52 = v51 + 1;
// v52 = .primitive
const v53 = ~"iterator";
// v53 = .boolean
const v54 = {c:v8};
// v54 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v55 = Object();
// v55 = .object()
}
%NeverOptimizeFunction(main);
main();
