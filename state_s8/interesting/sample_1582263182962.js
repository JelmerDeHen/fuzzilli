function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v7 = [13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v9 = [v7,471091797,DataView];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v10 = {c:1337};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v11 = {constructor:v7,toString:v10,__proto__:471091797,length:v9};
// v11 = .object(ofGroup: Object, withProperties: ["constructor", "length", "toString", "__proto__"])
for (const v13 in "object") {
    function v14(v15,v16) {
        for (const v18 in "boolean") {
            let v20 = 0;
            do {
                const v21 = "boolean" + 1;
                // v21 = .primitive
                v20 = v21;
            } while (v20 == v18);
            for (let v25 = 0; v25 < 7; v25++) {
            }
        }
    }
    const v27 = [1337];
    // v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v28 = v27;
    const v29 = v14(v28);
    // v29 = .unknown
}
const v31 = typeof v11;
// v31 = .string
const v33 = v31 === "object";
// v33 = .boolean
}
%NeverOptimizeFunction(main);
main();
