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
                // v20 = .object(ofGroup: Object, withProperties: ["b", "constructor", "__proto__", "e", "length", "a", "c"])
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
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v25 = v24;
const v26 = v3(v25);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
