function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            try {
                const v9 = v3 instanceof Reflect;
                // v9 = .boolean
                const v13 = [13.37,13.37,-4294967297,13.37];
                // v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
                const v14 = {length:v13,d:Uint8Array};
                // v14 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "d"])
                for (const v15 in v14) {
                    let v18 = 0;
                    let v21 = 0;
                }
            } catch(v22) {
            }
            const v23 = v8 + 1;
            // v23 = .primitive
            v8 = v23;
        } while (v8 < 8);
    }
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v26 = v25;
const v27 = v1(v26);
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
