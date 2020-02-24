function main() {
const v1 = {has:gc,call:gc};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "has"])
const v3 = new Proxy(gc,v1);
// v3 = .unknown
let v10 = 0;
const v11 = 1337 || 0;
// v11 = .boolean
const v12 = new v3(v11,v10,"boolean",NaN,1);
// v12 = .object()
const v15 = [1337,1337,1337,1337,1337];
// v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v16(v17,v18) {
    const v21 = "iterator".__proto__;
    // v21 = .object()
    let v25 = 0;
    const v26 = v25 + 1;
    // v26 = .primitive
    v25 = v26;
    for (const v27 in "boolean") {
        let v31 = 0;
        while (v31 < 8) {
            delete v12.c;
            const v32 = v31 + 1;
            // v32 = .primitive
            v31 = v32;
        }
    }
}
const v33 = v15.forEach(v16,"eeeRbEqfAO");
// v33 = .undefined
}
%NeverOptimizeFunction(main);
main();
