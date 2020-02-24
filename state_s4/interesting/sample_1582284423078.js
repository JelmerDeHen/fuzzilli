function main() {
function v2(v3,v4) {
    const v8 = new Uint16Array(1000);
    // v8 = .object(ofGroup: Uint16Array, withProperties: ["length", "byteLength", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["fill", "findIndex", "filter", "entries", "map", "find", "sort", "every", "reduce", "join", "set", "copyWithin", "subarray", "reverse", "some", "indexOf", "includes", "reduceRight", "lastIndexOf", "values", "slice", "keys", "forEach"])
    for (const v9 in "boolean") {
        const v15 = [1337,1337,1337,1337];
        // v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v16 = [v15,13.37];
        // v16 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v17 = {__proto__:13.37,a:v16,constructor:"boolean",b:Promise,toString:v16,length:v16};
        // v17 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length", "b", "toString", "a"])
        const v18 = {__proto__:v16,a:v15,valueOf:13.37,length:v15,toString:Promise};
        // v18 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "__proto__", "length", "a"])
        const v20 = [13.37,13.37,13.37];
        // v20 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        for (let v24 = 0; v24 < 3; v24++) {
            const v27 = {valueOf:v4,length:13.37,d:127,e:127};
            // v27 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "e", "d"])
            function v28(v29,v30) {
                let v32 = 0;
                let v34 = 0;
                v20.toString = v20;
            }
            const v36 = [1337];
            // v36 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
// v46 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
