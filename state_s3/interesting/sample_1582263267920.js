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
            // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            const v22 = [1337,v20,13.37,1024];
            // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            const v23 = v22.find(Number);
            // v23 = .unknown
            v9 = v14;
        } while (v9 < 8);
    }
}
const v24 = [undefined];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v25 = v24;
const v26 = v2(v25);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
