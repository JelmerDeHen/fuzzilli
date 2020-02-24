function main() {
let v2 = 0;
let v6 = 0;
do {
    const v7 = v6 + 1;
    // v7 = .primitive
    function v8(v9,v10) {
        for (let v14 = 0; v14 < 10; v14++) {
            for (const v15 in "undefined") {
            }
        }
        let v17 = 0;
        for (let v21 = 0; v21 < 1; v21++) {
            let v24 = 0;
            const v29 = v17 * 0;
            // v29 = .number
            const v32 = eval(1337);
            // v32 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
        }
    }
    const v34 = [1337];
    // v34 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v35 = v34;
    const v36 = v8(v35);
    // v36 = .unknown
    v6 = v7;
} while (v6 < 7);
}
%NeverOptimizeFunction(main);
main();
