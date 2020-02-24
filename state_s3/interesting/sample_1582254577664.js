function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v4 = {constructor:"symbol",length:9007199254740993};
// v4 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
const v7 = [13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v12 = v7[1024];
// v12 = .unknown
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
const v18 = v4[Reflect];
// v18 = .unknown
let v21 = 0;
const v22 = v21 + 1;
// v22 = .primitive
v21 = v22;
const v24 = {get:v12};
// v24 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v26 = Object.defineProperty(Object,-1243385935,v24);
// v26 = .undefined
}
%NeverOptimizeFunction(main);
main();
