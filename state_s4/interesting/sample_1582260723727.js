function main() {
const v3 = ["c",1337,3488870410];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v5 = 0;
function v7(v8,v9) {
    let v13 = 0;
    for (const v14 in "boolean") {
        let v17 = 0;
        do {
            const v18 = v17 + 1;
            // v18 = .primitive
            v17 = v18;
            v8.valueOf = v8;
        } while (v17 < 7);
    }
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v21 = v20;
const v22 = v7(v21);
// v22 = .unknown
const v23 = v7(v5,0);
// v23 = .unknown
v21.valueOf = v7;
const v24 = v7(v3,v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
