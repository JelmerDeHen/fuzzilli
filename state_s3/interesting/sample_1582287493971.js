function main() {
let v4 = Proxy;
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = String <= v4;
// v7 = .boolean
function v8(v9,v10) {
    let v13 = 0;
    do {
        let v16 = 0;
        const v17 = new ArrayBuffer(1337);
        // v17 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
        const v18 = v16 + 1;
        // v18 = .primitive
        v16 = v18;
        const v19 = v13 + 1;
        // v19 = .primitive
        v13 = v19;
    } while (v13 < 10);
}
for (let v23 = 0; v23 < 100; v23++) {
    const v24 = v8(v6);
    // v24 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
