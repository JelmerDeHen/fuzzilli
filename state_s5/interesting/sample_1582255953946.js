function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            const v11 = {constructor:"symbol",length:"symbol"};
            // v11 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
            const v13 = Reflect.preventExtensions(v11);
            // v13 = .boolean
            function v14(v15,v16) {
                let v20 = 0;
            }
            let v22 = v1;
            do {
            } while (v22 < 7);
            for (let v28 = 0; v28 < 0; v28++) {
                const v29 = arguments(v28,1337,v28);
                // v29 = .unknown
            }
            const v30 = v9 + 1;
            // v30 = .primitive
            v9 = v30;
        } while (v9 < 8);
    }
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v33 = v32;
const v34 = v2(v33);
// v34 = .unknown
const v35 = v2();
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
