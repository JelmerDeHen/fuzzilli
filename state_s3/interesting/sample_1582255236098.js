function main() {
const v7 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "toString", "d", "e"])
function v9(v10,v11) {
    for (const v12 in "object") {
        let v15 = 0;
        do {
            let v18 = 0;
            do {
                const v19 = v18 + 1;
                // v19 = .primitive
                v18 = v19;
            } while (v18 < 7);
            const v20 = v15 + 1;
            // v20 = .primitive
            v15 = v20;
        } while (v15 != 8);
    }
    return v7;
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v23 = v22;
const v24 = v9(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
