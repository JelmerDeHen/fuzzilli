function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [JSON,JSON,"0mosCN9zL0"];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = {b:v5,constructor:JSON,length:1337,c:v3};
// v6 = .object(ofGroup: Object, withProperties: ["constructor", "b", "c", "__proto__", "length"])
let v7 = v6;
const v10 = new Set("asyncIterator");
// v10 = .object(ofGroup: Set, withProperties: ["size", "__proto__"], withMethods: ["has", "clear", "values", "delete", "add", "keys", "entries", "forEach"])
const v13 = Number(v7,0,1337,...v10);
// v13 = .number
let v16 = 0;
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
let v23 = 0;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
}
%NeverOptimizeFunction(main);
main();
