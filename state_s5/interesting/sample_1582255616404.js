function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
try {
    const v13 = (1337)(60643);
    // v13 = .unknown
} catch(v14) {
}
const v15 = [];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v16 = {valueOf:v15,length:13.37,d:127,e:127};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "valueOf", "d", "length"])
const v17 = {c:v15,valueOf:v16,d:Array,a:1337};
// v17 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "c", "__proto__"], withMethods: ["d"])
const v19 = v2 != v17;
// v19 = .boolean
let v22 = 0;
const v23 = v22 + 1;
// v23 = .primitive
v22 = v23;
let v27 = 0;
const v28 = v27 + 1;
// v28 = .primitive
v27 = v28;
let v32 = 0;
}
%NeverOptimizeFunction(main);
main();
