function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v3 = v2;
const v6 = {a:isFinite};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
function v7(v8,v9) {
    for (const v11 in "toString") {
        let v14 = 0;
        const v15 = v6.a(-225787572,"boolean",8,v6,"boolean");
        // v15 = .unknown
        do {
            for (let v18 = v14; v18 < 4; v18++) {
            }
            const v19 = v6.a(v15);
            // v19 = .unknown
            const v20 = v14 + 1;
            // v20 = .primitive
            const v23 = new Uint16Array(13637);
            // v23 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
            function v24(v25,v26,v27) {
                const v28 = v19(v25,v11);
                // v28 = .unknown
            }
            function v30(v31,v32) {
            }
            try {
                const v33 = {get:v9,set:Object,setPrototypeOf:v8,deleteProperty:Object,construct:v15,apply:v8};
                // v33 = .object(ofGroup: Object, withProperties: ["get", "apply", "construct", "setPrototypeOf", "__proto__"], withMethods: ["deleteProperty", "set"])
                const v35 = Proxy(v30,v33);
                // v35 = .unknown
                const v36 = {defineProperty:v19,has:v9};
                // v36 = .object(ofGroup: Object, withProperties: ["has", "__proto__", "defineProperty"])
                const v37 = {get:v30,set:Object};
                // v37 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
            } catch(v38) {
            }
            v14 = v20;
        } while (v14 < 8);
    }
}
const v39 = v7(v3);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
