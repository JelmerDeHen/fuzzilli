function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = {valueOf:"e",length:1337,a:v2,b:v2,e:1337};
// v3 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "__proto__", "e", "length", "a"])
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
// v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v36 = v35;
const v37 = v4(v36);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
