function main() {
let v4 = 0;
const v6 = v4 + 1;
// v6 = .primitive
v4 = v6;
const v9 = [13.37];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v11 = [v9,1337,3779702335];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v12(v13,v14) {
    const v16 = [-1024];
    // v16 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v17 = v16;
    const v19 = Math.acosh(v17);
    // v19 = .number
    for (const v21 in "boolean") {
        const v22 = ~v19;
        // v22 = .boolean
        for (const v24 of "pvU0UUjoya") {
        }
        let v27 = 0;
        const v28 = v27 + 1;
        // v28 = .primitive
        v27 = v28;
    }
    with ("pvU0UUjoya") {
        toString = v16;
    }
}
const v30 = [1337];
// v30 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v31 = v30;
const v32 = v12(v31);
// v32 = .unknown
const v34 = v12(Uint32Array,v11);
// v34 = .unknown
const v35 = v12();
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();