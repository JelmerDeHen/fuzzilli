function main() {
let v1 = "e";
function v5(v6,v7) {
    let v14 = 0;
    let v17 = 0;
    do {
        let v20 = 0;
        do {
            const v21 = v20 + 1;
            // v21 = .primitive
            const v22 = {constructor:3156875969,...v21,...8};
            // v22 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
            v20 = v21;
        } while (v20 < 7);
        const v29 = v17 + 1;
        // v29 = .primitive
        v17 = v29;
    } while (v17 < 8);
    const v30 = v14 + 1;
    // v30 = .primitive
    const v31 = Array(v30,v1,1337,v7);
    // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    v14 = v30;
}
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v35 = v34;
const v36 = v5(v35);
// v36 = .unknown
const v37 = v5(1024,4.0);
// v37 = .unknown
const v38 = v5(v37,v35);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
