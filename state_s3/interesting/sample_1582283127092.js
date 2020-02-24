function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = Object.prototype;
// v3 = .object()
function v4(v5,v6) {
    for (const v8 in "boolean") {
        const v11 = v3.__proto__;
        // v11 = .unknown
        let v12 = 0;
        do {
            const v13 = v12 + 1;
            // v13 = .primitive
            v12 = v13;
        } while (v12 < 7);
    }
}
v1[1] = v4;
for (const v14 of v1) {
    v3[-4103680879] = v14;
}
const v15 = v4();
// v15 = .unknown
}
%NeverOptimizeFunction(main);
main();
