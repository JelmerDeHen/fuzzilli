function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = [13.37,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [v5,-3856173342,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = {a:13.37,d:v5,constructor:v3,length:v3,c:1337};
// v7 = .object(ofGroup: Object, withProperties: ["constructor", "length", "c", "d", "__proto__", "a"])
const v8 = {e:v3,d:13.37,valueOf:-3856173342,b:"43Wuhi4r4T",constructor:13.37,toString:v3};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "__proto__", "d", "constructor", "b", "e"])
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
const v14 = "43Wuhi4r4T" == -3856173342;
// v14 = .boolean
let v19 = 0;
let v24 = 0;
const v25 = v7 + 1;
// v25 = .primitive
v24 = v25;
const v26 = Math.atan2(v24,13.37);
// v26 = .number
}
%NeverOptimizeFunction(main);
main();
