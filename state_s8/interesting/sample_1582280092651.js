function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = [-1.0];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {d:v3,c:Float64Array,b:v4};
// v5 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "d", "b"])
try {
    try {
        const v7 = "c"();
        // v7 = .unknown
    } catch(v10) {
        for (let v15 = 0; v15 < 6; v15++) {
            const v16 = v10(v5,v5,v15);
            // v16 = .unknown
        }
        let v19 = 0;
    }
} catch(v20) {
    let v23 = 0;
    v20.valueOf = v20;
    const v24 = v23 + 1;
    // v24 = .primitive
    v23 = v24;
    delete v20.valueOf;
}
}
%NeverOptimizeFunction(main);
main();
