function main() {
function v3(v4,v5) {
    let v9 = 0;
    do {
        let v12 = 0;
        do {
            const v13 = v12 + 1;
            // v13 = .primitive
            const v14 = {constructor:3156875969,...v13,...8};
            // v14 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
            v12 = v13;
        } while (v12 < 7);
        let v16 = 1337;
        const v20 = v9 + 1;
        // v20 = .primitive
        v9 = v20;
    } while (v9 < 8);
    const v24 = [13.37,13.37,13.37];
    // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v25 = ["uchqlZ8s2I",v24];
    // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v26 = Math.cosh(v25);
    // v26 = .number
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v29 = v28;
const v30 = v3(v29);
// v30 = .unknown
const v31 = v3(1024,4.0);
// v31 = .unknown
const v32 = v3(v31,v29);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
