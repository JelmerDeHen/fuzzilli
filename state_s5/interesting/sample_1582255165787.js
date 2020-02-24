function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v3 = {valueOf:"e",length:1337,a:v2,b:v2,e:1337};
// v3 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "length", "a", "valueOf", "b"])
function v4(v5,v6) {
    let v13 = 0;
    for (const v14 in "boolean") {
        let v16 = 0;
        do {
            let v19 = 0;
            const v20 = v19 + 1;
            // v20 = .primitive
            v19 = v20;
            for (const v31 of "pvU0UUjoya") {
            }
            const v32 = v16 + 1;
            // v32 = .primitive
            v16 = v32;
        } while (v16 < v14);
    }
    v13 = v3;
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v36 = v35;
const v37 = v4(v36);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
