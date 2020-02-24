function main() {
const v16 = [13.37,13.37,13.37,13.37];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v18 = [v16,471091797,DataView];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v19 = {c:1337};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v20 = {constructor:v16,toString:v19,__proto__:471091797,length:v18};
// v20 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length", "toString"])
let v33 = 0;
const v34 = v33 + 1;
// v34 = .primitive
v33 = v34;
v20.length = 9007199254740993;
for (let v41 = 0; v41 < 100; v41++) {
}
const v42 = (9007199254740993)[1337];
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
