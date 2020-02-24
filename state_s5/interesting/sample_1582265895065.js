function main() {
let v1 = "string";
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        const v15 = [];
        // v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v16 = {valueOf:v15,length:13.37,d:127,e:127};
        // v16 = .object(ofGroup: Object, withProperties: ["length", "d", "valueOf", "e", "__proto__"])
        const v17 = {c:v15,valueOf:v16,d:Array,a:1337};
        // v17 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "valueOf", "c"], withMethods: ["d"])
        const v20 = [];
        // v20 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v21 = {valueOf:v20,length:13.37,d:v17,e:127};
        // v21 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e", "valueOf", "length"])
        let v22 = v21;
        do {
            const v25 = [13.37,13.37,13.37,13.37];
            // v25 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v27 = [1337,1337];
            // v27 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v28 = [v27];
            // v28 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v29 = {valueOf:Int32Array,c:v27,__proto__:v28,b:v25};
            // v29 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "b", "__proto__"])
            const v31 = new Map(v29);
            // v31 = .object(ofGroup: Map, withProperties: ["size", "__proto__"], withMethods: ["get", "clear", "forEach", "delete", "keys", "values", "has", "entries", "set"])
            const v32 = v31.get(v22);
            // v32 = .unknown
            const v33 = v10 + 1;
            // v33 = .primitive
            v10 = v33;
        } while (v10 < 8);
    }
}
let v34 = "boolean";
const v35 = v3(v34);
// v35 = .unknown
const v36 = "string"[1337];
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();
