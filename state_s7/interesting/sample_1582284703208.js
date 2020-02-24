function main() {
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v13 = 0;
            const v14 = {};
            // v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
            v14.a = "boolean";
            do {
                const v17 = Infinity - v10;
                // v17 = .number
                const v18 = {b:1337,a:0,e:v10,length:7,c:0,constructor:v14};
                // v18 = .object(ofGroup: Object, withProperties: ["b", "constructor", "e", "c", "a", "length", "__proto__"])
            } while ("boolean" < 0);
            const v19 = {get:v3};
            // v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
            const v20 = v10 + 1;
            // v20 = .primitive
            v10 = v20;
        } while (v10 < 8);
    }
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v23 = v22;
const v24 = v3(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
