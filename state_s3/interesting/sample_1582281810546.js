function main() {
const v3 = [];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = {valueOf:v3,length:13.37,d:127,e:127};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "d", "length", "e"])
let v5 = v4;
const v9 = [];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v10 = {valueOf:v9,length:13.37,d:127,e:127};
// v10 = .object(ofGroup: Object, withProperties: ["length", "d", "__proto__", "e", "valueOf"])
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
