function main() {
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = {valueOf:v4};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
const v8 = {e:v5,d:"d"};
// v8 = .object(ofGroup: Object, withProperties: ["e", "d", "__proto__"])
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
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v23 = v22;
const v24 = v9(v23);
// v24 = .unknown
const v25 = v9(1337,1337);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
