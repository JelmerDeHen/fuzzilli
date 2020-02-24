function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = {constructor:"species"};
// v3 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
function v4(v5,v6) {
    let v10 = 0;
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            let v16 = 0;
            const v17 = v16 + 1;
            // v17 = .primitive
            const v20 = ~v10;
            // v20 = .boolean
            const v21 = 0 != v20;
            // v21 = .boolean
            v2.__proto__ = 100;
            const v22 = v14 + 1;
            // v22 = .primitive
            const v23 = {c:v2,valueOf:3,__proto__:v3};
            // v23 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "c"])
            if (v21) {
            } else {
            }
            v14 = v22;
        } while (v14 < 8);
    }
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v26 = v25;
const v27 = v4(v26);
// v27 = .unknown
for (const v29 in "boolean") {
    let v32 = 0;
    const v33 = typeof v29;
    // v33 = .string
    let v34 = v33;
    const v35 = v34[3];
    // v35 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
