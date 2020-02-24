function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [RegExp,v6,"NEGATIVE_INFINITY",13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {toString:v4,valueOf:2147483648,constructor:"NEGATIVE_INFINITY",length:RegExp,__proto__:RegExp,b:RegExp,d:13.37,a:2147483648,c:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "valueOf", "d", "c", "a", "constructor"], withMethods: ["__proto__", "b", "length"])
const v9 = {};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = v7;
function v11(v12,v13) {
    const v16 = [1337,1337,1337,1337];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    function v17(v18,v19) {
        return v17;
    }
    const v21 = [1337];
    // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v22 = v21;
    const v23 = v17(v22);
    // v23 = .unknown
    const v25 = {get:gc};
    // v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
    const v27 = Object.defineProperty(v23,2743566176,v25);
    // v27 = .undefined
    const v28 = {toString:v17,...v16,...v27};
    // v28 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"], withMethods: ["lastIndexOf", "some", "reduce", "indexOf", "flat", "shift", "sort", "every", "map", "keys", "includes", "join", "flatMap", "slice", "values", "fill", "reverse", "reduceRight", "splice", "concat", "push", "pop", "entries", "copyWithin", "filter", "forEach", "findIndex", "toLocaleString", "toString", "unshift", "find"])
}
function v30(v31,v32) {
    let v36 = 0;
    const v41 = v36 + 1;
    // v41 = .primitive
    v36 = v41;
    const v50 = [];
    // v50 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    return v30;
}
const v60 = [1337];
// v60 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v61 = v60;
const v62 = v30(v61);
// v62 = .unknown
const v63 = v30(1024,4.0);
// v63 = .unknown
function v64(v65,v66) {
    const v67 = v66(v4,v65);
    // v67 = .unknown
    return 13.37;
}
v63.valueOf = v11;
const v68 = RegExp(v63);
// v68 = .object()
}
%NeverOptimizeFunction(main);
main();
