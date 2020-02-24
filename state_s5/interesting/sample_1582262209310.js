function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {toString:v4,valueOf:2147483648,constructor:"NEGATIVE_INFINITY",length:RegExp,__proto__:RegExp,b:RegExp,d:13.37,a:2147483648,c:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "c", "toString", "a", "__proto__", "constructor"], withMethods: ["__proto__", "length", "b"])
const v7 = [13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v8 = 13.37;
function v10(v11,v12) {
    const v13 = v11 in v10;
    // v13 = .boolean
    const v14 = {set:v10};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
    let v15 = v7;
    v15[1024] = v12;
    const v17 = v13[v14];
    // v17 = .unknown
    let v19 = 0;
    const v21 = v19 + 1;
    // v21 = .primitive
    v19 = v21;
}
const v23 = v10(1024,4.0);
// v23 = .unknown
let v26 = 0;
const v27 = v26 + 1;
// v27 = .primitive
v26 = v27;
v7.length = 0;
const v30 = v10(Float64Array,v5);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
