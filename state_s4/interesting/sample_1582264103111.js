function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = [13.37];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = {b:v2,c:13.37,valueOf:-9007199254740993,d:v5,constructor:1337,__proto__:v4};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "c", "valueOf", "b", "constructor"])
let v7 = v6;
const v9 = [13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v11 = [1337];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v15 = [13.37,13.37,13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v18 = [];
// v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v19 = {b:v17,c:Math,e:"toPrimitive",constructor:Math,__proto__:13.37};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "constructor", "e", "b"])
const v20 = {c:v18,constructor:Math,valueOf:v19,b:1337,e:v15,a:13.37,length:v15};
// v20 = .object(ofGroup: Object, withProperties: ["a", "c", "b", "constructor", "length", "e", "__proto__", "valueOf"])
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v23 = v22;
for (const v25 in "boolean") {
    try {
        function v26(v27,v28) {
            const v30 = {get:v26};
            // v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
            const v32 = Object.defineProperty(v9,"toString",v30);
            // v32 = .undefined
            let v33 = v28;
            const v34 = v33.add(1337,v11,v33,v20);
            // v34 = .unknown
        }
        let v35 = v23;
        let v38 = 0;
        v7[v9] = v25;
        const v39 = v38 + 1;
        // v39 = .primitive
        v38 = v39;
        const v40 = v26(v35);
        // v40 = .unknown
    } catch(v41) {
    }
}
}
%NeverOptimizeFunction(main);
main();
