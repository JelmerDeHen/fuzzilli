function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = {valueOf:v4,length:13.37,d:127,e:127};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "valueOf", "d", "length"])
const v8 = [];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v9 = {valueOf:v8,length:13.37,d:127,e:127};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "valueOf", "length", "e"])
let v10 = v9;
const v13 = "object".constructor;
// v13 = .function()
let v16 = 0;
while (v16 < 3) {
    v1.__proto__ = v10;
    const v17 = v16 + 1;
    // v17 = .primitive
    v16 = v17;
}
const v18 = v5[v13];
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
