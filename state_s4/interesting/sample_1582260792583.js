function main() {
const v1 = {c:1337};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
function v2(v3,v4) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v13 = 0;
            do {
                const v14 = v13 + 1;
                // v14 = .primitive
                v13 = v14;
            } while (v13 < 7);
            const v15 = 1337 in v1;
            // v15 = .boolean
            const v16 = v10 + 1;
            // v16 = .primitive
            v10 = v16;
        } while (v10 < 8);
    }
}
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v19 = v18;
const v20 = v2(v19);
// v20 = .unknown
const v22 = {get:v2};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v24 = Object.defineProperty(v1,-1687751422,v22);
// v24 = .undefined
const v25 = v2();
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
