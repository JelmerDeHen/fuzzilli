function main() {
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            let v11 = 0;
            const v12 = {};
            // v12 = .object(ofGroup: Object, withProperties: ["__proto__"])
            v12.a = "boolean";
            do {
                const v13 = v11 + 1;
                // v13 = .primitive
            } while (v11 < undefined);
            const v14 = v9 + 1;
            // v14 = .primitive
            let v19 = 0;
            const v20 = [13.37,13.37,13.37,13.37,13.37];
            // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v22 = [1337,v20,13.37,1024];
            // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v23 = v22.find(Number);
            // v23 = .unknown
            v9 = v14;
        } while (v9 < 8);
    }
}
const v24 = [undefined];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v25 = v24;
const v26 = v2(v25);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
