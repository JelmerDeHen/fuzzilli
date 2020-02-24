function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v3 = Reflect;
for (let v7 = 0; v7 < 100; v7++) {
    function v8(v9,v10) {
        let v13 = 0;
        const v14 = v13 + 1;
        // v14 = .primitive
        v13 = v14;
        const v15 = v2.length;
        // v15 = .integer
        const v16 = v3.preventExtensions(v2);
        // v16 = .boolean
    }
    const v18 = [1337];
    // v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v19 = v18;
    const v20 = v8(v19);
    // v20 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
