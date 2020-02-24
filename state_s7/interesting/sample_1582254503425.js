function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [v4,471091797,DataView];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {c:1337};
// v8 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v9 = {constructor:v4,toString:v8,__proto__:471091797,length:v7};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "length", "toString", "__proto__"])
let v10 = 471091797;
const v15 = 13.37 << 9007199254740993;
// v15 = .integer
v10 = 9007199254740993;
const v36 = {};
// v36 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v37 = v9[4294967295];
// v37 = .unknown
const v38 = Reflect << 9007199254740993;
// v38 = .integer
}
%NeverOptimizeFunction(main);
main();
