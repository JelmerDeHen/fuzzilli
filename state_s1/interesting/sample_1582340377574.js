function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = {valueOf:v2};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
const v6 = {e:v3,d:"d"};
// v6 = .object(ofGroup: Object, withProperties: ["d", "e", "__proto__"])
function v7(v8,v9) {
    let v13 = -128;
    while (v13 < 5) {
        const v14 = v6 <= 0;
        // v14 = .boolean
        const v15 = v13 + 1;
        // v15 = .primitive
        const v16 = v14 + v14;
        // v16 = .primitive
        const v17 = v13 + v16;
        // v17 = .primitive
        v13 = v15;
        let v18 = v17;
        const v19 = v16 + 1;
        // v19 = .primitive
        const v20 = v14[v19];
        // v20 = .unknown
        delete v17[v18];
    }
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v23 = v22;
const v24 = v7(v23);
// v24 = .unknown
const v25 = v7(1337,1337);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
