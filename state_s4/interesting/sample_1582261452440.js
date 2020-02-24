function main() {
let v2 = 0;
do {
    const v3 = v2 + 1;
    // v3 = .primitive
    function v4(v5,v6) {
        const v13 = {set:v4,get:v4};
        // v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
        const v15 = Object.defineProperty(arguments,-1,v13);
        // v15 = .undefined
        let v18 = 0;
        let v21 = 0;
        let v24 = 0;
        const v25 = v24 + 1;
        // v25 = .primitive
        v24 = v25;
        let v28 = 0;
        const v29 = v21 + 1;
        // v29 = .primitive
        v21 = v29;
        const v30 = v18 + 1;
        // v30 = .primitive
        v18 = v30;
    }
    const v33 = [1337];
    // v33 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v34 = v33;
    const v35 = v4(v34);
    // v35 = .unknown
    v2 = v3;
} while (v2 < 7);
}
%NeverOptimizeFunction(main);
main();
