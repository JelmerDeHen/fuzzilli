function main() {
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v13 = 0;
            const v14 = {};
            // v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
            v14.a = "boolean";
            const v15 = v13 + 1;
            // v15 = .primitive
            let v18 = 0;
            do {
                const v19 = Infinity * 0;
                // v19 = .number
                const v20 = {b:1337,a:0,e:v10,length:7,c:0,constructor:v14};
                // v20 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "length", "c", "a", "constructor", "e"])
            } while (v18 < 0);
            const v21 = {get:v3};
            // v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
            const v22 = v10 + 1;
            // v22 = .primitive
            v10 = v22;
        } while (v10 < 8);
    }
}
const v24 = [1337];
// v24 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v25 = v24;
const v26 = v3(v25);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
