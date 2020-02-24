function main() {
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = {b:13.37,d:1607264097,e:1607264097,constructor:v4,valueOf:WeakSet};
// v5 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "b", "e", "constructor", "valueOf"])
const v7 = [13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v13 = {c:1337};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v17 = [13.37,13.37,13.37,13.37];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v19 = [v17,471091797,DataView];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v20 = {c:1337};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v21 = {constructor:v17,toString:v20,__proto__:471091797,length:v19};
// v21 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "toString", "constructor"])
const v23 = typeof v21;
// v23 = .string
const v25 = v23 === "object";
// v25 = .boolean
for (const v26 of v7) {
    let v29 = 0;
    delete v13.c;
    const v30 = v29 + 1;
    // v30 = .primitive
    v29 = v30;
}
}
%NeverOptimizeFunction(main);
main();
