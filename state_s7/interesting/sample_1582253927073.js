function main() {
const v10 = {c:1337};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
"undefined".valueOf = v10;
const v24 = [13.37,13.37,13.37,13.37];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v26 = [v24,471091797,DataView];
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v27 = {c:1337};
// v27 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v28 = {constructor:v24,toString:v27,__proto__:471091797,length:v26};
// v28 = .object(ofGroup: Object, withProperties: ["length", "toString", "__proto__", "constructor"])
let v29 = 13.37;
v28.length = 9007199254740993;
for (let v45 = 0; v45 < 100; v45 = v45 + 1337) {
    const v49 = [13.37,13.37,13.37,13.37];
    // v49 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v50 = [v49,471091797,DataView];
    // v50 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
}
}
%NeverOptimizeFunction(main);
main();
