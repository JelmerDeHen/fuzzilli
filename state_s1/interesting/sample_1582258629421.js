function main() {
const v2 = [7,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
