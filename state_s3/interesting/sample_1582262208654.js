function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = {toString:v4,valueOf:2147483648,constructor:"NEGATIVE_INFINITY",length:RegExp,__proto__:RegExp,b:RegExp,d:13.37,a:2147483648,c:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["c", "d", "constructor", "valueOf", "a", "__proto__", "toString"], withMethods: ["b", "__proto__", "length"])
const v7 = [13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
