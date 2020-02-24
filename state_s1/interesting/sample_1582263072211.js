function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = {a:"MAX_VALUE",toString:v3,length:13.37,b:v3};
// v4 = .object(ofGroup: Object, withProperties: ["toString", "length", "a", "b", "__proto__"])
function v5(v6,v7) {
    for (const v9 in "boolean") {
        let v12 = 0;
        do {
            const v15 = [13.37,13.37,-4294967297,13.37];
            // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
// v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v33 = v32;
const v34 = v5(v33);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
