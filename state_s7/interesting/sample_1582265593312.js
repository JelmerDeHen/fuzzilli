function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [v6,Reflect,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {length:13.37,constructor:13.37,d:13.37,toString:13.37,e:v6,c:Reflect};
// v8 = .object(ofGroup: Object, withProperties: ["c", "toString", "d", "constructor", "length", "e", "__proto__"])
const v10 = {toString:v4};
// v10 = .object(ofGroup: Object, withProperties: ["toString", "__proto__"])
let v11 = v4;
const v14 = [13.37];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v16 = [1337,1337,1337,1337];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v17 = [v14,v16];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
const v22 = 13.37 < v17;
// v22 = .boolean
function v23(v24,v25) {
    let v29 = 0;
    v29 = "boolean";
    return v23;
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v32 = v31;
const v33 = v23(v32);
// v33 = .unknown
const v35 = {get:gc};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
let v38 = 0;
while (v38 < 8) {
    for (const v40 in "object") {
    }
    const v41 = v38 + 1;
    // v41 = .primitive
    v38 = v41;
}
const v43 = Object.defineProperty(v33,2743566176,v35);
// v43 = .undefined
const v44 = {toString:v23,...v16,...v43};
// v44 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"], withMethods: ["push", "toString", "some", "pop", "values", "copyWithin", "sort", "unshift", "indexOf", "join", "reduceRight", "slice", "reduce", "forEach", "findIndex", "fill", "keys", "shift", "every", "splice", "find", "entries", "toLocaleString", "map", "filter", "reverse", "flat", "flatMap", "lastIndexOf", "includes", "concat"])
const v45 = v32.shift();
// v45 = .unknown
const v46 = gc();
// v46 = .undefined
}
%NeverOptimizeFunction(main);
main();
