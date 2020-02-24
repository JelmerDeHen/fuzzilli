function main() {
function v2(v3,v4) {
    const v8 = new Uint16Array(1000);
    // v8 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "byteOffset", "length", "byteLength", "__proto__", "constructor"], withMethods: ["join", "slice", "sort", "reduceRight", "reverse", "forEach", "values", "some", "findIndex", "find", "keys", "map", "filter", "fill", "set", "includes", "subarray", "reduce", "indexOf", "entries", "every", "copyWithin", "lastIndexOf"])
    for (const v9 in "boolean") {
        const v15 = [1337,1337,1337,1337];
        // v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v16 = [v15,13.37];
        // v16 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v17 = {__proto__:13.37,a:v16,constructor:"boolean",b:Promise,toString:v16,length:v16};
        // v17 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "length", "toString", "constructor", "a"])
        const v18 = {__proto__:v16,a:v15,valueOf:13.37,length:v15,toString:Promise};
        // v18 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "__proto__", "a", "toString"])
        const v20 = [13.37,13.37,13.37];
        // v20 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        for (let v24 = 0; v24 < 3; v24++) {
            const v27 = {valueOf:v4,length:13.37,d:127,e:127};
            // v27 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "e", "length", "d"])
            function v28(v29,v30) {
                let v32 = 0;
                let v34 = 0;
                v20.toString = v20;
            }
            const v36 = [1337];
            // v36 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            let v37 = v36;
            const v38 = v28(v37);
            // v38 = .unknown
        }
        const v42 = Symbol.toStringTag;
        // v42 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
        const v43 = v8[v42];
        // v43 = .unknown
        for (let v44 = 0; v44 < 100; v44++) {
        }
    }
}
const v46 = [1337];
// v46 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v47 = v46;
const v48 = v2(v47);
// v48 = .unknown
const v49 = v2(JSON,"function");
// v49 = .unknown
const v56 = typeof 1337;
// v56 = .string
const v58 = v56 === "undefined";
// v58 = .boolean
const v59 = v2(v47,0);
// v59 = .unknown
}
%NeverOptimizeFunction(main);
main();
