function main() {
function v1(v2,v3) {
    let v7 = 0;
    let v10 = 0;
    let v13 = 0;
    const v14 = v13 + 1;
    // v14 = .primitive
    v13 = v14;
    const v25 = v10 + 1;
    // v25 = .primitive
    v10 = v25;
    const v26 = v7 + 1;
    // v26 = .primitive
    v7 = v26;
    const v35 = 1337 == 13.37;
    // v35 = .boolean
    const v37 = Object();
    // v37 = .object()
    const v40 = [];
    // v40 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v41 = {valueOf:v40,length:13.37,d:127,e:127};
    // v41 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "d", "length", "__proto__"])
    let v42 = v41;
    delete v42.e;
    let v45 = 0;
    const v46 = v45 + 1;
    // v46 = .primitive
    v45 = v46;
    let v49 = 0;
    const v50 = v49 + 1;
    // v50 = .primitive
    v49 = v50;
}
const v53 = [1337];
// v53 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v54 = v53;
const v55 = v1(v54);
// v55 = .unknown
const v56 = v1(1024,4.0);
// v56 = .unknown
}
%NeverOptimizeFunction(main);
main();
