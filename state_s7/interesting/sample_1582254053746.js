function main() {
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
const v23 = [13.37,13.37,13.37,13.37];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v25 = [v23,471091797,DataView];
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v26 = {c:1337};
// v26 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v27 = {constructor:v23,toString:v26,__proto__:471091797,length:v25};
// v27 = .object(ofGroup: Object, withProperties: ["constructor", "toString", "length", "__proto__"])
const v52 = [999390.6102043171,999390.6102043171,999390.6102043171,999390.6102043171];
// v52 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v54 = typeof v27;
// v54 = .string
const v56 = v54 === "object";
// v56 = .boolean
}
%NeverOptimizeFunction(main);
main();
