function main() {
const v3 = [13.37,13.37,-4294967297,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = {length:v3,d:Uint8Array};
// v4 = .object(ofGroup: Object, withProperties: ["d", "length", "__proto__"])
function v5(v6,v7) {
    let v9 = 0;
    for (const v10 in v4) {
        let v13 = 0;
        do {
            let v16 = 0;
            while (v16 < 9) {
                const v17 = v16 % 9;
                // v17 = .number
                const v18 = v17 + 1;
                // v18 = .primitive
                v16 = v18;
            }
            const v19 = v13 + 1;
            // v19 = .primitive
            v13 = v19;
        } while (v13 < 8);
    }
    return v9;
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v22 = v21;
const v23 = v5(v22);
// v23 = .unknown
v23.constructor = v5;
const v24 = v5(v3,v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
