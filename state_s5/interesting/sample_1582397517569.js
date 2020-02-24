function main() {
for (let v3 = 0; v3 < 5; v3++) {
    const v4 = typeof v3;
    // v4 = .string
    const v6 = v4 === "boolean";
    // v6 = .boolean
}
const v10 = Symbol.toStringTag;
// v10 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
const v11 = Symbol[v10];
// v11 = .unknown
let v13 = 1337;
const v15 = [13.37,"b"];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v16 = Symbol - 1;
// v16 = .primitive
v13 = v16;
const v19 = [eval,13.37,v15];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v20 = v19;
const v22 = {get:eval};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v24 = Object.freeze(v19,1337,v22);
// v24 = .undefined
const v26 = v19.indexOf(v13,v20,v19,"name","isConcatSpreadable");
// v26 = .integer
}
%NeverOptimizeFunction(main);
main();
