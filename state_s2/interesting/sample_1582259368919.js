function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [13.37,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v9 = {d:v7,c:v8,__proto__:"isConcatSpreadable",length:"isConcatSpreadable",toString:RegExp};
// v9 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "length", "d"], withMethods: ["toString"])
let v10 = v9;
const v15 = [1337,1337];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v16 = {b:13.37,d:1607264097,e:1607264097,constructor:v15,valueOf:WeakSet};
// v16 = .object(ofGroup: Object, withProperties: ["b", "e", "constructor", "d", "__proto__", "valueOf"])
try {
    do {
    } while (v16 < 2);
} catch(v18) {
}
const v20 = {get:RegExp};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v22 = Object.defineProperty(v8,9007199254740993,v20);
// v22 = .undefined
v10 = v15;
const v23 = typeof 13.37;
// v23 = .string
const v25 = v23 === "object";
// v25 = .boolean
const v26 = RegExp("isConcatSpreadable");
// v26 = .object()
const v27 = v6[0];
// v27 = .unknown
let v30 = 0;
while (v30 < 7) {
    const v31 = 13.37 === 13.37;
    // v31 = .boolean
    const v32 = v30 + 1;
    // v32 = .primitive
    v30 = v32;
}
const v33 = v26[-4193407549];
// v33 = .unknown
const v34 = RegExp("object");
// v34 = .object()
}
%NeverOptimizeFunction(main);
main();
