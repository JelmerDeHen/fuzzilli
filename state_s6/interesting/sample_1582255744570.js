function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [1337,v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {a:eval,length:1337};
// v8 = .object(ofGroup: Object, withProperties: ["length", "__proto__"], withMethods: ["a"])
const v9 = {b:v7,a:v7,__proto__:v7};
// v9 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "a"])
let v10 = eval;
function v11(v12,v13) {
    for (let v22 = 0; v22 === 1; v22++) {
    }
    let v25 = 0;
    let v28 = 0;
    const v29 = v28 + 1;
    // v29 = .primitive
    v28 = v29;
    let v32 = 0;
    const v36 = v25 + 1;
    // v36 = .primitive
    v25 = v36;
    return 13.37;
}
for (let v40 = 0; v40 < 100; v40++) {
    const v41 = v11();
    // v41 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
