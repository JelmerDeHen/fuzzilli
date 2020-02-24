function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = [1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v9 = {valueOf:v8};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
const v12 = {e:v9,d:"d"};
// v12 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "d"])
function v13(v14,v15) {
    let v19 = -128;
    while (v19 < 5) {
        const v20 = v12 <= 0;
        // v20 = .boolean
        const v21 = v19 + 1;
        // v21 = .primitive
        const v22 = v20 + v19;
        // v22 = .primitive
        const v23 = -128 + v22;
        // v23 = .primitive
        v19 = v21;
        let v24 = 1337;
        delete v23[v24];
    }
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v27 = v26;
const v28 = v13(v27);
// v28 = .unknown
const v29 = v13(1337,1337);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
