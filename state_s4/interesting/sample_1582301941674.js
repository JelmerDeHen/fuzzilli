function main() {
const v3 = {e:13.37,d:"d"};
// v3 = .object(ofGroup: Object, withProperties: ["d", "e", "__proto__"])
function v4(v5,v6) {
    let v11 = -128;
    while (v11 < 5) {
        const v12 = v3 === 0;
        // v12 = .boolean
        const v13 = v11 + 1;
        // v13 = .primitive
        const v14 = v12 << v13;
        // v14 = .integer
        const v15 = -128 + v14;
        // v15 = .primitive
        v11 = v13;
        let v16 = 1337;
        delete v15[v16];
    }
}
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v19 = v18;
const v20 = v4(v19);
// v20 = .unknown
const v21 = v4();
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
