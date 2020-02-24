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
                // v18 = .object(ofGroup: Object, withProperties: ["e", "c", "constructor", "a", "length", "__proto__", "b"])
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
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v23 = v22;
const v24 = v3(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
