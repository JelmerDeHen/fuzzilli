function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [v6,v6,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {d:"undefined",e:v4,__proto__:v6,c:v6,toString:v7};
// v8 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "toString", "c", "e"])
const v9 = {b:13.37,d:1607264097,e:1607264097,constructor:v6,valueOf:WeakSet};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "e", "b", "d", "valueOf", "__proto__"])
let v10 = v8;
const v15 = [13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v17 = [1337,1337,1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v18 = [13.37,v15];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v19 = {constructor:13.37};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
const v20 = {d:gc,valueOf:v17};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["d"])
let v21 = 1337;
const v22 = v15[1024];
// v22 = .unknown
v18.d = v10;
v4.toString = gc;
const v25 = v19 - 1;
// v25 = .primitive
let v28 = 0;
while (v28 < 3) {
    const v29 = v28 + 1;
    // v29 = .primitive
    v28 = v29;
}
let v30 = 0;
do {
    const v31 = v30 + 1;
    // v31 = .primitive
    v30 = v31;
} while (v30 < 4096);
v30 = 4096;
const v32 = {__proto__:4096,constructor:v30,d:v19,valueOf:v22,length:13.37};
// v32 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "constructor", "valueOf", "length"])
const v35 = {get:v22,set:v22};
// v35 = .object(ofGroup: Object, withProperties: ["get", "set", "__proto__"])
const v37 = Object.defineProperty(v10,-3627291860,v35);
// v37 = .undefined
const v38 = Object();
// v38 = .object()
}
%NeverOptimizeFunction(main);
main();
