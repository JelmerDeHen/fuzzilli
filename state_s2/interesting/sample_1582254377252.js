function main() {
const v3 = [];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = {valueOf:v3,length:13.37,d:127,e:127};
// v4 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "length", "e", "__proto__"])
let v5 = v4;
let v8 = 0;
while (v8 < 9) {
    const v10 = Symbol.iterator;
    // v10 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    Array[v10] = v5;
    const v11 = v8 + 1;
    // v11 = .primitive
    v8 = v11;
}
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
}
%NeverOptimizeFunction(main);
main();
