function main() {
const v2 = [7,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v6(v7,v8) {
    const v10 = Reflect.get(v2,v7);
    // v10 = .unknown
    let v13 = 0;
    do {
        let v16 = 0;
        do {
            const v17 = v16 + 1;
            // v17 = .primitive
            const v18 = {constructor:3156875969,...v17,...8};
            // v18 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
            v16 = v17;
        } while (v16 < 7);
        const v19 = v13 + 1;
        // v19 = .primitive
        v13 = v19;
    } while (v13 < 8);
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v22 = v21;
const v23 = v6(v22);
// v23 = .unknown
const v24 = v6(1862007616,4.0);
// v24 = .unknown
const v25 = v6(v24,v22);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();