function main() {
const v3 = [];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = {valueOf:v3,length:13.37,d:127,e:127};
// v4 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "length", "e", "valueOf"])
let v5 = v4;
const v9 = [];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v10 = {valueOf:v9,length:13.37,d:127,e:127};
// v10 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "valueOf", "d", "e"])
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
