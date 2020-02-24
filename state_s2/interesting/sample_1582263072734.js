function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = {a:"MAX_VALUE",toString:v3,length:13.37,b:v3};
// v4 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "length", "b", "toString"])
function v5(v6,v7) {
    for (const v9 in "boolean") {
        let v12 = 0;
        do {
            const v15 = [13.37,13.37,-4294967297,13.37];
            // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            let v18 = 0;
            let v21 = 0;
            while (v21 < 9) {
                const v22 = v21 % 9;
                // v22 = .number
                const v23 = v22 + 1;
                // v23 = .primitive
                const v27 = v23 != v12;
                // v27 = .boolean
                let v28 = v15;
                if (v27) {
                    v4.__proto__ = v28;
                } else {
                }
                v21 = v23;
            }
            const v29 = v18 + 1;
            // v29 = .primitive
            v18 = v29;
            const v30 = v12 + 1;
            // v30 = .primitive
            v12 = v30;
        } while (v12 < 8);
    }
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v33 = v32;
const v34 = v5(v33);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
