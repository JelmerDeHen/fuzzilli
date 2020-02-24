function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        const v13 = [];
        // v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v14 = {valueOf:v13,length:13.37,d:127,e:127};
        // v14 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "d", "e", "__proto__"])
        const v15 = {c:v13,valueOf:v14,d:Array,a:1337};
        // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "valueOf", "c"], withMethods: ["d"])
        const v18 = [];
        // v18 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v19 = {valueOf:v18,length:13.37,d:v15,e:127};
        // v19 = .object(ofGroup: Object, withProperties: ["d", "e", "__proto__", "valueOf", "length"])
        let v20 = v19;
        do {
            const v23 = [13.37,13.37,13.37,13.37];
            // v23 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v25 = [1337,1337];
            // v25 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v26 = [v25];
            // v26 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v27 = {valueOf:Int32Array,c:v25,__proto__:v26,b:v23};
            // v27 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "__proto__", "b"])
            const v29 = new Map(v27);
            // v29 = .object(ofGroup: Map, withProperties: ["size", "__proto__"], withMethods: ["get", "clear", "forEach", "delete", "keys", "values", "has", "entries", "set"])
            v25.__proto__ = v29;
            const v33 = v29.get(v20);
            // v33 = .unknown
            const v34 = v8 + 1;
            // v34 = .primitive
            v8 = v34;
        } while (v8 < 8);
    }
}
let v35 = "boolean";
const v36 = v1(v35);
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();
