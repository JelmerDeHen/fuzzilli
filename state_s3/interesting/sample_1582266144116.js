function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = {a:"MAX_VALUE",toString:v3,length:13.37,b:v3};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "toString", "b", "length"])
function v5(v6,v7) {
    for (const v9 in "boolean") {
        let v12 = 0;
        do {
            const v15 = [13.37,13.37,-4294967297,13.37];
            // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            let v18 = 0;
            while (v18 < 9) {
                const v19 = v18 % 9;
                // v19 = .number
                const v20 = v19 + 1;
                // v20 = .primitive
                const v21 = v20 != v12;
                // v21 = .boolean
                let v22 = v15;
                if (v21) {
                    v4.__proto__ = v22;
                } else {
                }
                v18 = v20;
            }
            const v23 = 13.37 + 1;
            // v23 = .primitive
            v12 = v23;
        } while (v12 < 8);
    }
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v26 = v25;
const v27 = v5(v26);
// v27 = .unknown
const v28 = v26.reduce(v5,"MAX_VALUE");
// v28 = .unknown
let v31 = 0;
const v35 = v5();
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
