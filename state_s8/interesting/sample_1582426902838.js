function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [13.37,13.37,v4,"number"];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {c:1337,__proto__:v7,valueOf:1000,toString:"number",constructor:1337};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "toString", "valueOf", "c"])
const v9 = {c:1337,__proto__:v4,toString:13.37,constructor:v7};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "toString", "c"])
let v10 = Function;
let v12 = 13.37;
const v14 = [13.37,13.37];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v15 = {valueOf:v14};
// v15 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
v12 = Uint8ClampedArray;
const v20 = [2,1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v21 = [Uint8ClampedArray,13.37,2];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v22 = v20;
v21.length = 1337;
const v24 = {get:Uint8ClampedArray};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v26 = Object.freeze(v21,65537,v24);
// v26 = .undefined
const v28 = v21.includes(v12,v22,v21,"Ol*2*xBE*6",v15);
// v28 = .boolean
const v29 = Function("Ol*2*xBE*6");
// v29 = .unknown
const v30 = Object(Object,2);
// v30 = .object()
}
%NeverOptimizeFunction(main);
main();
