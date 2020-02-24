function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [v4,String,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = 13.37 != v7;
// v8 = .boolean
"number"[65537] = 3971043784;
v4.__proto__ = v6;
const v10 = Symbol.isConcatSpreadable;
// v10 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v6[v10] = 1337;
const v11 = Symbol(...v6,...v6,1337,"number",v8);
// v11 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v12 = {valueOf:1337,c:3971043784,b:13.37,a:"number"};
// v12 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "__proto__", "c", "b"])
const v13 = {c:String};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["c"])
let v14 = v4;
const v18 = Array(3197492984);
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v19 = 1337 + 1;
// v19 = .primitive
let v20 = 1337;
let v21 = v18;
try {
    const v22 = [...3197492984,..."object",...v21];
    // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
} catch(v23) {
}
}
%NeverOptimizeFunction(main);
main();
