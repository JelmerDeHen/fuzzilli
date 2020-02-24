function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,v4];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = {b:v6,a:v6,__proto__:v6};
// v7 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "a"])
let v8 = eval;
const v11 = [1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
