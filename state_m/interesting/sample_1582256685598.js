function main() {
const v4 = {valueOf:1337,c:3971043784,b:13.37,a:"number"};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "b", "valueOf", "c"])
function v6(v7,v8) {
    let v12 = 0;
    for (const v13 in "boolean") {
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
        } while (v16 < 8);
    }
    const v33 = v12 + 1;
    // v33 = .primitive
    v12 = v33;
    const v36 = [13.37,13.37,13.37,13.37,13.37];
    // v36 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v37 = typeof v36;
    // v37 = .string
    const v38 = v4 + v37;
    // v38 = .primitive
    const v47 = 1337 == 13.37;
    // v47 = .boolean
    const v49 = Object();
    // v49 = .object()
    let v52 = 0;
    const v53 = v52 + 1;
    // v53 = .primitive
    v52 = v53;
    let v56 = 0;
    const v57 = v56 + 1;
    // v57 = .primitive
    v56 = v57;
}
const v60 = [1337];
// v60 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v61 = v60;
const v62 = v6(v61);
// v62 = .unknown
const v63 = v6(1024,4.0);
// v63 = .unknown
}
%NeverOptimizeFunction(main);
main();
