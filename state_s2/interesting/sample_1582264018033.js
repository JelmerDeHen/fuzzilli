function main() {
function v1(v2,v3) {
    let v6 = 0;
    do {
        for (let v10 = 0; v10 < 100; v10++) {
        }
        const v13 = [13.37,13.37,13.37,13.37,13.37];
        // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v15 = {a:2676202182,e:1337,length:v13};
        // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "a", "e"])
        const v17 = Array(1337);
        // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v18 = v17.includes(v15,v15);
        // v18 = .boolean
        const v19 = v6 + 1;
        // v19 = .primitive
        v6 = v19;
    } while (v6 < 8);
}
let v20 = 1337;
const v21 = v1(v20);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
