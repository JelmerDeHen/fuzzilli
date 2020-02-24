function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v2 = {valueOf:v1};
// v2 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
const v5 = {e:v2,d:"d"};
// v5 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "d"])
function v6(v7,v8) {
    let v13 = -128;
    while (v13 < 5) {
        const v14 = v5 === 0;
        // v14 = .boolean
        const v15 = v13 + 1;
        // v15 = .primitive
        const v16 = v14 + v15;
        // v16 = .primitive
        const v17 = -128 & v16;
        // v17 = .integer
        v13 = v15;
        let v18 = 1337;
        delete v17[v18];
    }
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v21 = v20;
const v22 = v6(v21);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
