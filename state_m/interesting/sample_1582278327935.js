function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = {b:v3,__proto__:v3,valueOf:"boolean",d:Infinity};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "b", "d"])
function v5(v6,v7) {
    for (const v9 in "boolean") {
        let v12 = 0;
        do {
            const v15 = [13.37,13.37,13.37,13.37];
            // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            const v17 = [1337,1337];
            // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            const v18 = [v17];
            // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            const v19 = {valueOf:Int32Array,c:v17,__proto__:v18,b:v15};
            // v19 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "c", "valueOf"])
            const v21 = new Map(v19);
            // v21 = .object(ofGroup: Map, withProperties: ["size", "__proto__"], withMethods: ["forEach", "entries", "clear", "set", "keys", "delete", "get", "values", "has"])
            const v22 = v21.has(8);
            // v22 = .boolean
            const v23 = v12 + 1;
            // v23 = .primitive
            v12 = v23;
        } while (v12 < 8);
    }
}
let v24 = v4;
const v25 = v5(v24);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
