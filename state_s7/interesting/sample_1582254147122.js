function main() {
let v63 = 0;
const v64 = v63 + 1;
// v64 = .primitive
v63 = v64;
const v72 = [13.37,13.37,13.37,13.37];
// v72 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v74 = [v72,471091797,DataView];
// v74 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v75 = {c:1337};
// v75 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v76 = {constructor:v72,toString:v75,__proto__:471091797,length:v74};
// v76 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor", "toString"])
const v101 = typeof v76;
// v101 = .string
const v103 = v101 == "object";
// v103 = .boolean
}
%NeverOptimizeFunction(main);
main();
