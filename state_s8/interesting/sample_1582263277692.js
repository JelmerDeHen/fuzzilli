function main() {
const v1 = {valueOf:"string"};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
function v2(v3,v4) {
    for (let v9 = 0; v9 < 100; v9++) {
        function v10(v11,v12) {
            let v16 = 0;
            const v18 = [13.37,13.37,13.37,13.37,13.37];
            // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            let v19 = v18;
        }
        const v21 = "boolean".lastIndexOf(v9,1);
        // v21 = .integer
        const v22 = v21 * v9;
        // v22 = .number
    }
}
let v23 = v1;
const v24 = v2(v23);
// v24 = .unknown
const v26 = v2(v23,1337);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
