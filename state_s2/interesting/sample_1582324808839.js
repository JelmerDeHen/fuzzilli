function main() {
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {valueOf:v4};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
const v8 = {e:v5,d:"d"};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d"])
function v9(v10,v11) {
    let v15 = -128;
    while (v15 < 5) {
        const v16 = v8 <= 0;
        // v16 = .boolean
        const v17 = v15 + 1;
        // v17 = .primitive
        const v18 = v16 + v15;
        // v18 = .primitive
        const v19 = v15 + v18;
        // v19 = .primitive
        v15 = v17;
        let v20 = 1337;
        delete v19[v20];
    }
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v23 = v22;
const v24 = v9(v23);
// v24 = .unknown
const v25 = v9(1337,1337);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
