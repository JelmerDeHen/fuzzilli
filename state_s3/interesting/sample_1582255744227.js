function main() {
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = {valueOf:v4,length:13.37,d:127,e:127};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "__proto__", "e", "d"])
const v7 = Symbol.unscopables;
// v7 = .unknown
const v8 = Object[v7];
// v8 = .unknown
let v9 = v5;
try {
    v8.length = 1337;
} catch(v10) {
    v9.__proto__ = v10;
    const v11 = v4 > v5;
    // v11 = .boolean
}
}
%NeverOptimizeFunction(main);
main();
