function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = [v3,471091797,DataView];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = {toString:1337};
// v6 = .object(ofGroup: Object, withProperties: ["toString", "__proto__"])
const v7 = {constructor:v3,toString:v6,__proto__:471091797,length:v5};
// v7 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__", "toString"])
let v8 = 471091797;
const v10 = isFinite();
// v10 = .boolean
}
%NeverOptimizeFunction(main);
main();
