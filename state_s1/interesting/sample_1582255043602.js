function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = {valueOf:"e",length:1337,a:v2,b:v2,e:1337};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length", "a", "e", "b"])
function v4(v5,v6) {
    let v13 = 0;
    for (const v14 in "boolean") {
        let v17 = 0;
        do {
            let v20 = 0;
            const v21 = v20 + 1;
            // v21 = .primitive
            v20 = v21;
            for (let v31 = 0; v31 < 100; v31 = v31 + v3) {
            }
            for (const v32 of "pvU0UUjoya") {
            }
            const v33 = v17 + 1;
            // v33 = .primitive
            v17 = v33;
        } while (v17 < 8);
    }
    const v34 = v13 + 1;
    // v34 = .primitive
    v13 = v34;
}
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v38 = v37;
const v39 = v4(v38);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
