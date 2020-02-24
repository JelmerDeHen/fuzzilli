function main() {
const v1 = {valueOf:"string"};
// v1 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
function v2(v3,v4) {
    for (let v9 = 0; v9 < 100; v9++) {
        function v10(v11,v12) {
            let v16 = 0;
            const v18 = [13.37,13.37,13.37,13.37,13.37];
            // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
