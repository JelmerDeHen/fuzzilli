function main() {
const v3 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "preventExtensions", "construct", "defineProperty", "ownKeys", "apply", "deleteProperty", "set", "getOwnPropertyDescriptor", "getPrototypeOf", "get"])
const v5 = new ArrayBuffer(gc,v3);
// v5 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
function v7(v8,v9) {
    let v13 = 0;
    const v14 = v13 + 1;
    // v14 = .primitive
    v13 = v14;
    let v17 = 0;
    const v18 = v17 + 1;
    // v18 = .primitive
    v17 = v18;
    let v25 = 0;
    for (const v26 in "boolean") {
        let v29 = 0;
        do {
            let v32 = 0;
            const v33 = v32 + 1;
            // v33 = .primitive
            v32 = v33;
            let v36 = 0;
            const v37 = v29 + 1;
            // v37 = .primitive
            v29 = v37;
            const v38 = v5[1893352411];
            // v38 = .unknown
            let v41 = 0;
        } while (v29 < 8);
    }
    const v46 = [1337,1337,1337,1337];
    // v46 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    for (const v47 of v46) {
        return v47;
    }
}
const v50 = [1337];
// v50 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v51 = v50;
const v52 = v7(v51);
// v52 = .unknown
const v53 = v7(1024,4.0);
// v53 = .unknown
const v54 = v7();
// v54 = .unknown
}
%NeverOptimizeFunction(main);
main();
