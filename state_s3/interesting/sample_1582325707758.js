function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v5(v6,v7) {
    let v10 = -128;
    while (v10 < 5) {
        const v11 = v10 + 1;
        // v11 = .primitive
        const v12 = -2147483648 + v10;
        // v12 = .primitive
        const v13 = -128 + v12;
        // v13 = .primitive
        v10 = v11;
        let v14 = 1337;
        delete v13[v14];
    }
}
let v15 = v2;
const v16 = v5(v15);
// v16 = .unknown
const v17 = v5(1337,1337);
// v17 = .unknown
}
%NeverOptimizeFunction(main);
main();
