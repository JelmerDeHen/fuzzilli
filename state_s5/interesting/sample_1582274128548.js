function main() {
function v1(v2,v3) {
    let v11 = 0;
    for (const v12 in "boolean") {
        let v15 = 0;
        do {
            let v18 = 0;
            const v19 = v18 + 1;
            // v19 = .primitive
            v18 = v19;
            const v22 = [13.37,13.37,13.37,13.37];
            // v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v24 = [1337,1337];
            // v24 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v25 = [v24];
            // v25 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v26 = {valueOf:Int32Array,c:v24,__proto__:v25,b:v22};
            // v26 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "__proto__", "c"])
            const v28 = new Map(v26);
            // v28 = .object(ofGroup: Map, withProperties: ["size", "__proto__"], withMethods: ["get", "clear", "forEach", "delete", "keys", "values", "has", "entries", "set"])
            const v29 = v15 + 1;
            // v29 = .primitive
            v15 = v29;
            const v30 = v28.keys();
            // v30 = .object()
        } while (v15 < 8);
    }
}
const v33 = new Int16Array(34096);
// v33 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
const v34 = v33 >= 1;
// v34 = .boolean
const v35 = v1();
// v35 = .unknown
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v38 = v37;
const v39 = v1(v38);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
