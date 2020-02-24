function main() {
const v2 = [-4163351276,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = {valueOf:v2};
// v3 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
const v6 = {e:v3,d:"d"};
// v6 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "d"])
function v7(v8,v9) {
    let v12 = -128;
    while (v12 < 5) {
        const v13 = v6 <= v12;
        // v13 = .boolean
        const v14 = v12 + 1;
        // v14 = .primitive
        const v15 = v13 - v12;
        // v15 = .number
        const v16 = v12 + v15;
        // v16 = .primitive
        v12 = v14;
        let v17 = 1337;
        delete v16[v17];
    }
}
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v20 = v19;
const v21 = v7(v20);
// v21 = .unknown
const v22 = v7(1337,-4163351276);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
