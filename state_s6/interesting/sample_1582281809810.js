function main() {
const v3 = [];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = {valueOf:v3,length:13.37,d:127,e:127};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "d", "valueOf", "e"])
let v5 = v4;
const v9 = [];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v10 = {valueOf:v9,length:13.37,d:127,e:127};
// v10 = .object(ofGroup: Object, withProperties: ["length", "e", "__proto__", "d", "valueOf"])
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
