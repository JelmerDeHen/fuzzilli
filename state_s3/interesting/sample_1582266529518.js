function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = {length:parseFloat,e:v2};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "e"], withMethods: ["length"])
function v4(v5,v6) {
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            const v13 = [];
            // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            let v14 = "function";
            let v18 = 0;
            while (v18 < 3) {
                const v19 = v3.__proto__;
                // v19 = .object()
                const v20 = v18 + 1;
                // v20 = .primitive
                v18 = v20;
            }
            let v21 = 2947655073;
            const v22 = v21 % v8;
            // v22 = .number
            v13[v22] = v14;
            const v23 = v11 + 1;
            // v23 = .primitive
            v11 = v23;
            let v25 = -3888010622;
        } while (v11 < 8);
    }
}
const v26 = [v4];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v27 = v26;
const v28 = v4(v27);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
