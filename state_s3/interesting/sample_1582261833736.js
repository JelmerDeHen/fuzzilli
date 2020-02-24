function main() {
for (let v3 = 0; v3 < 3; v3++) {
    const v6 = [];
    // v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v7 = {valueOf:v6,length:13.37,d:127,e:127};
    // v7 = .object(ofGroup: Object, withProperties: ["length", "d", "valueOf", "__proto__", "e"])
    const v9 = [-128];
    // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v10 = v9;
    let v12 = undefined;
    for (const v14 in "boolean") {
        let v17 = 0;
        do {
            v7.__proto__ = null;
            const v19 = v17 + 1;
            // v19 = .primitive
            v17 = v19;
        } while (v17 < 8);
    }
}
}
%NeverOptimizeFunction(main);
main();
