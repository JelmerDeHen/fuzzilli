function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [v6,v6,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {d:"undefined",e:v4,__proto__:v6,c:v6,toString:v7};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "c", "d", "e", "__proto__"])
const v9 = {b:13.37,d:1607264097,e:1607264097,constructor:v6,valueOf:WeakSet};
// v9 = .object(ofGroup: Object, withProperties: ["b", "constructor", "valueOf", "d", "__proto__", "e"])
let v10 = v8;
const v44 = {e:13.37};
// v44 = .object(ofGroup: Object, withProperties: ["e", "__proto__"])
let v45 = 1337;
let v48 = 0;
const v49 = v48 + 1;
// v49 = .primitive
v48 = v49;
const v51 = {length:gc,a:v44,constructor:0,b:v45,__proto__:1337,b:v48,e:"object",valueOf:3};
// v51 = .object(ofGroup: Object, withProperties: ["e", "constructor", "__proto__", "b", "a", "valueOf"], withMethods: ["length"])
function v52(v53,v54,v55) {
    return v45;
}
let v56 = WeakSet;
const v57 = gc();
// v57 = .undefined
}
%NeverOptimizeFunction(main);
main();
