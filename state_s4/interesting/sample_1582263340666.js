function main() {
let v1 = 0;
const v2 = v1 + 1;
// v2 = .primitive
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v5 = v4;
let v7 = undefined;
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
const v17 = {call:Object};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call"])
const v19 = new Proxy(Array,v17);
// v19 = .unknown
let v20 = v19;
let v23 = 0;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
function v26(v27,v28) {
}
const v29 = v26 >= Number;
// v29 = .boolean
let v30 = 0;
const v31 = v30 + 1;
// v31 = .primitive
let v37 = 0;
const v38 = v37 + 1;
// v38 = .primitive
v37 = v38;
let v42 = 0;
const v43 = new v20(v2);
// v43 = .object()
const v44 = v42 + 1;
// v44 = .primitive
v42 = v44;
v30 = v31;
}
%NeverOptimizeFunction(main);
main();
