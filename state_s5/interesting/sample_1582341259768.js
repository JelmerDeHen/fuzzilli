function main() {
const v2 = [-2490171089,2103616979,2103616979,2103616979];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v3 = {valueOf:v2};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
const v6 = {e:v3,d:"d"};
// v6 = .object(ofGroup: Object, withProperties: ["e", "d", "__proto__"])
function v7(v8,v9) {
    let v12 = -128;
    while (v12 < 5) {
        const v13 = v6 === v12;
        // v13 = .boolean
        const v14 = v12 + 1;
        // v14 = .primitive
        const v15 = v13 - v12;
        // v15 = .number
        const v16 = v12 + v15;
        // v16 = .primitive
        v12 = v14;
        let v17 = -4294967297;
        delete v16[v17];
    }
}
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v20 = v19;
const v21 = v7(v20);
// v21 = .unknown
const v22 = v7(1337,-2490171089);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
