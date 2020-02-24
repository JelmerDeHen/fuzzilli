function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [v4,471091797,DataView];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {c:1337};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v9 = {constructor:v4,toString:v8,__proto__:471091797,length:v7};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "toString", "length"])
let v10 = 471091797;
let v11 = v4;
try {
    const v12 = "undefined" / v10;
    // v12 = .number
    v11 = v12;
} catch(v13) {
    v13.c = 13.37;
    v11 = v10;
}
for (const v14 in "undefined") {
    let v15 = v8;
}
let v29 = 0;
const v30 = v29 + 1;
// v30 = .primitive
v29 = v30;
const v70 = [13.37,13.37,13.37,13.37];
// v70 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v72 = [v70,-1970853828,DataView];
// v72 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v73 = {c:1337};
// v73 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v74 = {constructor:v70,toString:v73,e:-1970853828,length:v72};
// v74 = .object(ofGroup: Object, withProperties: ["toString", "constructor", "length", "__proto__", "e"])
}
%NeverOptimizeFunction(main);
main();
