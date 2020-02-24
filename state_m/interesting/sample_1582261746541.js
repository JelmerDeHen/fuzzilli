function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v5 = v4;
let v7 = undefined;
for (let v12 = 0; v12 < 10; v12++) {
    function v13(v14,v15) {
        for (const v17 in "boolean") {
            let v20 = 0;
            let v23 = 0;
            const v25 = "undefined".__proto__;
            // v25 = .object()
            const v26 = v25.lastIndexOf();
            // v26 = .unknown
            const v27 = v20 + 1;
            // v27 = .primitive
            v20 = v27;
        }
    }
    const v29 = [1337];
    // v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v30 = v29;
    const v31 = v13(v30);
    // v31 = .unknown
}
let v34 = 0;
const v35 = v34 + 1;
// v35 = .primitive
v34 = v35;
}
%NeverOptimizeFunction(main);
main();
