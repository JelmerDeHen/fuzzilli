function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v7(v8,v9,v10,v11,...v12) {
    const v13 = Symbol(...v9,v10,...Symbol);
    // v13 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
}
with (Symbol) {
    d = v7;
    const v14 = v7[v7];
    // v14 = .unknown
}
with (v4) {
    e = v6;
    const v15 = "MAX_VALUE".codePointAt(536870912);
    // v15 = .integer
}
const v16 = {toString:1337,constructor:"MAX_VALUE",d:1337,c:v4,__proto__:536870912,valueOf:13.37};
// v16 = .object(ofGroup: Object, withProperties: ["c", "d", "valueOf", "__proto__", "constructor", "toString"])
const v17 = {c:536870912,b:1337,valueOf:v4};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "b", "valueOf"])
let v18 = v4;
let v21 = 0;
for (const v22 of v18) {
    const v23 = v6.reduce(Symbol);
    // v23 = .unknown
}
const v26 = JSON.__proto__;
// v26 = .unknown
v26[3133106106] = v26;
let v28 = undefined;
const v29 = typeof v26;
// v29 = .string
const v31 = v29 === "number";
// v31 = .boolean
const v33 = new Int32Array(v28);
// v33 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "__proto__", "constructor", "byteLength", "byteOffset"], withMethods: ["forEach", "entries", "find", "reduce", "lastIndexOf", "indexOf", "map", "slice", "findIndex", "set", "keys", "subarray", "join", "filter", "some", "values", "fill", "copyWithin", "reverse", "sort", "includes", "every", "reduceRight"])
let v34 = v21;
const v35 = !v34;
// v35 = .boolean
v34 = v35;
const v36 = v21 + 1;
// v36 = .primitive
v21 = v36;
const v39 = new Float64Array(57816);
// v39 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "buffer", "__proto__", "length", "byteLength"], withMethods: ["fill", "sort", "reduceRight", "values", "every", "includes", "lastIndexOf", "findIndex", "copyWithin", "reverse", "keys", "entries", "some", "filter", "forEach", "set", "find", "subarray", "indexOf", "map", "reduce", "slice", "join"])
for (const v40 in v39) {
}
}
%NeverOptimizeFunction(main);
main();
