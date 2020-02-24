function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            const v11 = {valueOf:"string",length:13.37,d:127,e:127};
            // v11 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "d", "__proto__", "e"])
            let v12 = v11;
            for (const v13 in v11) {
                break;
            }
            const v14 = v12[3];
            // v14 = .unknown
            function v15(v16,v17) {
                if (v14) {
                } else {
                }
            }
            const v18 = v8 + 1;
            // v18 = .primitive
            v8 = v18;
        } while (v8 <= 8);
    }
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v21 = v20;
const v22 = v1(v21);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
