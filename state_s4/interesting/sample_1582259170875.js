function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = {toString:v2,b:"PI",valueOf:v4};
// v5 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "toString", "valueOf"])
const v6 = {b:v5};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
function v8(v9,v10) {
    for (const v12 in "boolean") {
        let v15 = 0;
        do {
            const v19 = [1337,1337,1337];
            // v19 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v21 = [1337,1337,1337];
            // v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v22 = v21.every(gc,v4);
            // v22 = .boolean
            let v25 = 0;
            while (v25 < 8) {
                for (const v27 in "object") {
                }
                const v28 = v25 + 1;
                // v28 = .primitive
                v25 = v28;
            }
            v21[7] = v5;
            for (const v30 of v19) {
            }
            let v31 = 0;
            const v32 = v31 + 1;
            // v32 = .primitive
            v31 = v32;
            const v35 = {constructor:"symbol",length:9007199254740993};
            // v35 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
            const v38 = [13.37,13.37,13.37];
            // v38 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v39 = [];
            // v39 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v40 = v38[Function];
            // v40 = .unknown
            const v41 = v15 + 1;
            // v41 = .primitive
            v15 = v41;
        } while (v15 < 8);
    }
}
const v43 = [1337];
// v43 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v44 = v43;
const v45 = v8(v44);
// v45 = .unknown
}
%NeverOptimizeFunction(main);
main();
