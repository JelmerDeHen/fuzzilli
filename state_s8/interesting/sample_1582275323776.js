function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [v6,v4,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {__proto__:13.37,constructor:v6,d:13.37,toString:1337};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "d", "__proto__", "constructor"])
const v9 = {length:v8,e:13.37,b:v8};
// v9 = .object(ofGroup: Object, withProperties: ["b", "e", "__proto__", "length"])
let v10 = v9;
const v15 = [13.37,13.37,13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v18(v19,v20,v21,v22,...v23) {
    const v24 = Symbol(...v20,v21,...Symbol);
    // v24 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    return v24;
}
with (Symbol) {
    d = v18;
    const v25 = v18[v18];
    // v25 = .unknown
}
with (v15) {
    e = v17;
    const v26 = "MAX_VALUE".codePointAt(536870912);
    // v26 = .integer
}
const v27 = {c:536870912,b:1337,valueOf:v15};
// v27 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "__proto__", "b"])
let v28 = v15;
const v30 = [1337,1337,1337,1337];
// v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v33 = 0;
const v36 = v30.push(8,v33,7,0,7);
// v36 = .integer
let v40 = 0;
for (const v41 of v28) {
    const v42 = v17.reduce(Symbol);
    // v42 = .unknown
}
const v45 = JSON.__proto__;
// v45 = .unknown
v45[3133106106] = v45;
let v47 = undefined;
const v48 = typeof v45;
// v48 = .string
const v50 = v48 === "number";
// v50 = .boolean
const v52 = new Int32Array(v47);
// v52 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "__proto__", "constructor", "byteLength", "byteOffset"], withMethods: ["forEach", "entries", "find", "reduce", "lastIndexOf", "indexOf", "map", "slice", "findIndex", "set", "keys", "subarray", "join", "filter", "some", "values", "fill", "copyWithin", "reverse", "sort", "includes", "every", "reduceRight"])
let v53 = v40;
const v54 = !v53;
// v54 = .boolean
v53 = v54;
const v55 = v40 + 1;
// v55 = .primitive
const v58 = new Float64Array(57816);
// v58 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "buffer", "__proto__", "length", "byteLength"], withMethods: ["fill", "sort", "reduceRight", "values", "every", "includes", "lastIndexOf", "findIndex", "copyWithin", "reverse", "keys", "entries", "some", "filter", "forEach", "set", "find", "subarray", "indexOf", "map", "reduce", "slice", "join"])
for (const v59 in v58) {
}
function v60(v61,...v62) {
    let v65 = 0;
    while (v65 < 4) {
        const v67 = v65 + 1;
        // v67 = .primitive
        v65 = v67;
    }
    return v65;
}
v33 = 6;
v8.c = v60;
const v68 = Symbol(v45);
// v68 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
}
%NeverOptimizeFunction(main);
main();
