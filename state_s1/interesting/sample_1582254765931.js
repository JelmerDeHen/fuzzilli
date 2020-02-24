function main() {
const v7 = RegExp("string");
// v7 = .object()
const v10 = [1337,"N0Xx92zvHQ"];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v15 = [128,128,"object",128];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v16 = {c:13.37};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v17 = {d:gc,valueOf:v15};
// v17 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"], withMethods: ["d"])
const v18 = v10[1024];
// v18 = .unknown
let v21 = 0;
const v22 = v21 + 1;
// v22 = .primitive
v21 = v22;
const v32 = v17.d(v16,Number,"N0Xx92zvHQ","N0Xx92zvHQ",1024);
// v32 = .unknown
const v33 = gc();
// v33 = .undefined
}
%NeverOptimizeFunction(main);
main();
