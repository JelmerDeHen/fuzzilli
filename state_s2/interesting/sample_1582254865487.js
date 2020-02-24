function main() {
const v2 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v2 = .object(ofGroup: Object, withProperties: ["d", "e", "__proto__", "b", "toString"])
function v4(v5,v6) {
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            let v14 = 0;
            do {
                const v15 = v14 + 1;
                // v15 = .primitive
                v14 = v15;
            } while (v14 < 7);
            const v16 = v11 + 1;
            // v16 = .primitive
            v11 = v16;
        } while (v11 < 8);
    }
    return v2;
}
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v19 = v18;
const v20 = v4(v19);
// v20 = .unknown
const v21 = v4();
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
