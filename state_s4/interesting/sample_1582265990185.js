function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = v4[1024];
// v5 = .unknown
let v8 = 0;
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
const v14 = v8 + 1;
// v14 = .primitive
v8 = v14;
function v16(v17,v18) {
    let v21 = -128;
    do {
        const v24 = {c:13.37};
        // v24 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
        const v26 = Array(0);
        // v26 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v27 = v1.lastIndexOf();
        // v27 = .integer
        const v28 = v26.every(Array);
        // v28 = .boolean
        v26[0] = v24;
        const v29 = v21 + 1;
        // v29 = .primitive
        v21 = v29;
    } while (v21 < -2);
}
let v30 = 1337;
const v31 = v16(v30);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
