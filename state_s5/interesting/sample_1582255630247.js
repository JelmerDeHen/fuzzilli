function main() {
function v0(v1,v2) {
    let v7 = 0;
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            const v18 = [];
            // v18 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v19 = {valueOf:v18,length:13.37,d:127,e:127};
            // v19 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "e", "length", "d"])
            const v20 = {c:v18,valueOf:v19,d:Array,a:1337};
            // v20 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "__proto__", "c"], withMethods: ["d"])
            length = v20;
            let v22 = 0;
            do {
                const v23 = v22 + 1;
                // v23 = .primitive
                v22 = v23;
            } while (v22 < 7);
            let v26 = 0;
            const v27 = v11 + 1;
            // v27 = .primitive
            v11 = v27;
        } while (v11 < 8);
    }
    const v28 = v7 + 1;
    // v28 = .primitive
    v7 = v28;
}
const v30 = [1337];
// v30 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v31 = v30;
const v32 = v0(v31);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();