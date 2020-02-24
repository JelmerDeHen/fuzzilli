function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = {b:v3,__proto__:v3,valueOf:"boolean",d:Infinity};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "d", "b"])
function v5(v6,v7) {
    for (const v9 in "boolean") {
        let v12 = 0;
        do {
            const v15 = [13.37,13.37,13.37,13.37];
            // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v17 = [1337,1337];
            // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v18 = [v17];
            // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v19 = {valueOf:Int32Array,c:v17,__proto__:v18,b:v15};
            // v19 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "c", "__proto__"])
            const v21 = new Map(v19);
            // v21 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["clear", "entries", "forEach", "delete", "has", "keys", "get", "set", "values"])
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
