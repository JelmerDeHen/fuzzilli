function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {a:-4294967297,valueOf:"function",b:1337,length:v6,d:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "d", "a", "length", "valueOf"])
const v9 = {a:"function",c:v7};
// v9 = .object(ofGroup: Object, withProperties: ["a", "c", "__proto__"])
let v10 = "function";
let v13 = 0;
do {
    const v14 = {};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v16 = Object();
    // v16 = .object()
    const v17 = Object.seal(v16);
    // v17 = .object()
    const v18 = v13 + 1;
    // v18 = .primitive
    v13 = v18;
} while (v13 < 3);
const v19 = ~v4;
// v19 = .boolean
const v21 = {set:Array};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v23 = Object.defineProperty(v4,"e",v21);
// v23 = .undefined
let v24 = v23;
with (v7) {
}
}
%NeverOptimizeFunction(main);
main();
