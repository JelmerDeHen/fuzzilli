function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,v4];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = {b:v6,a:v6,__proto__:v6};
// v7 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "b"])
let v8 = eval;
const v11 = [1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v14(v15,v16) {
    try {
        v6.toString = v8;
    } catch(v20) {
    }
}
for (let v24 = 0; v24 < 100; v24++) {
    const v25 = v14();
    // v25 = .unknown
    const v26 = v25 * v25;
    // v26 = .number
    let v29 = 0;
    const v30 = v29 + 1;
    // v30 = .primitive
    v29 = v30;
    let v35 = 0;
    const v36 = v35 + 1;
    // v36 = .primitive
    v35 = v36;
}
}
%NeverOptimizeFunction(main);
main();
