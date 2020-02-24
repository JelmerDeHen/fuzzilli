function main() {
function v2(v3,v4) {
    const v8 = new Uint16Array(1000);
    // v8 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
    for (const v9 in "boolean") {
        const v15 = [1337,1337,1337,1337];
        // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v16 = [v15,13.37];
        // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v17 = {__proto__:13.37,a:v16,constructor:"boolean",b:Promise,toString:v16,length:v16};
        // v17 = .object(ofGroup: Object, withProperties: ["constructor", "toString", "__proto__", "a", "b", "length"])
        const v18 = {__proto__:v16,a:v15,valueOf:13.37,length:v15,toString:Promise};
        // v18 = .object(ofGroup: Object, withProperties: ["length", "a", "valueOf", "__proto__", "toString"])
        const v20 = [13.37,13.37,13.37];
        // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        for (let v24 = 0; v24 < 3; v24++) {
            const v27 = {valueOf:v4,length:13.37,d:127,e:127};
            // v27 = .object(ofGroup: Object, withProperties: ["e", "d", "length", "valueOf", "__proto__"])
            function v28(v29,v30) {
                let v32 = 0;
                let v34 = 0;
                v20.toString = v20;
            }
            const v36 = [1337];
            // v36 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            let v37 = v36;
            const v38 = v28(v37);
            // v38 = .unknown
        }
        const v42 = Symbol.toStringTag;
        // v42 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        const v43 = v8[v42];
        // v43 = .unknown
        for (let v44 = 0; v44 < 100; v44++) {
        }
    }
}
const v46 = [1337];
// v46 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
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
