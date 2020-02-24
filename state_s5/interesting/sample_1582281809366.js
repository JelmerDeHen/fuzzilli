function main() {
const v3 = [];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = {valueOf:v3,length:13.37,d:127,e:127};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e", "length", "valueOf"])
let v5 = v4;
const v9 = [];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v10 = {valueOf:v9,length:13.37,d:127,e:127};
// v10 = .object(ofGroup: Object, withProperties: ["e", "length", "d", "__proto__", "valueOf"])
const v12 = Symbol.unscopables;
// v12 = .unknown
const v13 = Object.isSealed(v5);
// v13 = .boolean
try {
    const v15 = v9.fill(0,v12,1337);
    // v15 = .undefined
} catch(v16) {
}
}
%NeverOptimizeFunction(main);
main();
