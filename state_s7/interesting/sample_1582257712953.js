function main() {
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = ["e",3999259790,v4];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v9(v10,v11) {
    const v15 = [3156875969,3156875969,1337,DataView];
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v18 = v15.includes(v5);
    // v18 = .boolean
    let v19 = 0;
    do {
        let v22 = 0;
        do {
            const v23 = v22 + 1;
            // v23 = .primitive
            const v24 = {constructor:3156875969,...v23,...8};
            // v24 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
            v22 = v23;
        } while (v22 < 7);
        const v25 = v19 + 1;
        // v25 = .primitive
        v19 = v25;
    } while (v19 < 8);
}
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v28 = v27;
const v29 = v9(v28);
// v29 = .unknown
const v30 = v9(1024,4.0);
// v30 = .unknown
const v31 = v9(v30,v28);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
