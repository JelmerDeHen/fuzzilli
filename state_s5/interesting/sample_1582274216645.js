function main() {
const v1 = {has:gc,call:gc};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "call"])
const v3 = new Proxy(gc,v1);
// v3 = .unknown
const v5 = {constructor:"species"};
// v5 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
function v6(v7,v8) {
    for (const v10 in "boolean") {
        let v13 = 0;
        do {
            let v16 = 0;
            do {
                const v17 = v16 + 1;
                // v17 = .primitive
                const v18 = new v3(v10,v17);
                // v18 = .object()
                v16 = v18;
            } while (v16 < 7);
            const v19 = v13 + 1;
            // v19 = .primitive
            v13 = v19;
        } while (v13 < 8);
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v22 = v21;
const v23 = v6(v22);
// v23 = .unknown
const v24 = v6(v5);
// v24 = .unknown
let v27 = 0;
let v30 = 0;
let v39 = 0;
let v42 = 0;
let v45 = 0;
let v48 = 0;
}
%NeverOptimizeFunction(main);
main();