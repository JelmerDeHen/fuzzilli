function main() {
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [v4];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = {__proto__:v5,c:"object",constructor:-3613839107,e:"object",d:v5};
// v6 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "constructor", "c", "d"])
const v7 = {toString:13.37,valueOf:-3613839107,a:v6,e:-3613839107,__proto__:v4,d:v5,constructor:-3613839107};
// v7 = .object(ofGroup: Object, withProperties: ["toString", "d", "a", "constructor", "__proto__", "e", "valueOf"])
let v8 = v4;
function v9(v10,v11) {
    for (const v13 in "boolean") {
        let v16 = 0;
        do {
            let v19 = 0;
            do {
                const v20 = v19 + 1;
                // v20 = .primitive
                v19 = v20;
            } while (v19 < 7);
            const v21 = v16 + 1;
            // v21 = .primitive
            v16 = v21;
        } while (v16 < 8);
    }
    const v22 = v8.keys();
    // v22 = .object()
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v26 = v25;
const v27 = v9(v26);
// v27 = .unknown
const v28 = v9();
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();