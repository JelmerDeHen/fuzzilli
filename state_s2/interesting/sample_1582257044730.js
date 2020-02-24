function main() {
function v0(v1,v2) {
    let v6 = 0;
    const v9 = Int16Array(19873);
    // v9 = .unknown
}
let v11 = "e";
function v15(v16,v17) {
    let v20 = 0;
    let v23 = 0;
    do {
        let v26 = 0;
        do {
            let v28 = 0;
            const v29 = v28 + 1;
            // v29 = .primitive
            const v30 = v26 + 1;
            // v30 = .primitive
            const v31 = {constructor:3156875969,...v30,...8};
            // v31 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
            v26 = v30;
        } while (v26 < 7);
        const v32 = v23 + 1;
        // v32 = .primitive
        v23 = v32;
    } while (v23 < 8);
    const v33 = v20 + 1;
    // v33 = .primitive
    const v34 = Array(v33,v11,1337,v17);
    // v34 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
}
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v37 = v36;
const v38 = v15(v37);
// v38 = .unknown
const v39 = v15(1024,4.0);
// v39 = .unknown
const v40 = v15(v39,v37);
// v40 = .unknown
}
%NeverOptimizeFunction(main);
main();
