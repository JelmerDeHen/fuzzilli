function main() {
for (const v1 in "boolean") {
    function v2(v3,v4) {
        const v5 = v3 in v2;
        // v5 = .boolean
        for (const v7 in "boolean") {
            let v9 = -2340774650;
            const v11 = v9 - 1;
            // v11 = .primitive
            const v12 = v11 - v5;
            // v12 = .number
            "object".__proto__ = v12;
            for (const v14 in "boolean") {
                const v18 = [1337];
                // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                const v19 = {a:Number,b:Number,valueOf:9007199254740991,length:v18};
                // v19 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf"], withMethods: ["b", "a"])
            }
        }
    }
    const v21 = v2(0);
    // v21 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
