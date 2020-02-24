function main() {
const v1 = {has:gc,call:gc};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "call"])
const v3 = new Proxy(gc,v1);
// v3 = .unknown
const v6 = {constructor:"species"};
// v6 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
function v8(v9,v10) {
    for (const v15 in "boolean") {
        let v18 = 0;
        do {
            let v21 = 0;
            do {
                const v22 = v21 + 1;
                // v22 = .primitive
                v21 = v22;
            } while (v21 < 7);
            const v23 = v18 + 1;
            // v23 = .primitive
            v18 = v23;
        } while (v18 < 8);
        const v24 = 1337 || 0;
        // v24 = .boolean
        const v25 = new v3(v24,v18,"boolean",NaN,1);
        // v25 = .object()
    }
}
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v28 = v27;
const v29 = v8(v28);
// v29 = .unknown
const v30 = v8(v6);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
