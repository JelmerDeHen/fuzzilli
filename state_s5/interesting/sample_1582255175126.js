function main() {
function v4(v5,v6) {
}
function v8(v9,v10) {
    let v15 = 0;
    let v18 = 0;
    const v19 = v18 + 1;
    // v19 = .primitive
    v18 = v19;
    const v20 = v15 + 1;
    // v20 = .primitive
    v15 = v20;
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v23 = v22;
const v24 = v8(v23);
// v24 = .unknown
const v25 = v8();
// v25 = .unknown
const v27 = ["PI"];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v29 = [1337,1337,1337];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v30 = [13.37,v29];
// v30 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v31 = {toString:v27,b:"PI",valueOf:v29};
// v31 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "__proto__", "b"])
const v32 = {b:v31};
// v32 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
let v33 = v32;
if ("PI") {
    v29.toString = v4;
    v33 = v31;
} else {
    const v34 = v4(1337,v4,...v33,v27);
    // v34 = .unknown
}
let v41 = "number";
}
%NeverOptimizeFunction(main);
main();