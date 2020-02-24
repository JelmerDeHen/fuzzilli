function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = 13.37 + 13.37;
// v7 = .primitive
const v8 = v4 || v4;
// v8 = .boolean
const v9 = [];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v10 = {};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v11 = {d:Float64Array};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
let v12 = v4;
const v16 = {d:13.37,constructor:"__proto__"};
// v16 = .object(ofGroup: Object, withProperties: ["d", "constructor", "__proto__"])
function v17(v18,v19) {
    let v23 = -65535;
    while (v23 < 5) {
        const v24 = v16 === 0;
        // v24 = .boolean
        const v25 = v23 + 1;
        // v25 = .primitive
        const v26 = v24 << v25;
        // v26 = .integer
        const v27 = -65535 + v26;
        // v27 = .primitive
        v23 = v25;
        let v28 = -4277543386;
        delete v27[v28];
    }
    return v9;
}
const v30 = [1337];
// v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v31 = v30;
const v32 = v17(v31);
// v32 = .unknown
const v33 = v17();
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
