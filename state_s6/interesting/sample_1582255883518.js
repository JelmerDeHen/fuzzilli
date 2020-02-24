function main() {
function v4(v5,v6) {
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            let v14 = 0;
            const v15 = {};
            // v15 = .object(ofGroup: Object, withProperties: ["__proto__"])
            v15.a = "boolean";
            const v16 = v14 + 1;
            // v16 = .primitive
            let v19 = 0;
            do {
                const v20 = undefined * 0;
                // v20 = .number
                const v21 = {b:1337,a:0,e:v11,length:7,c:0,constructor:v15};
                // v21 = .object(ofGroup: Object, withProperties: ["constructor", "length", "b", "c", "e", "__proto__", "a"])
            } while (v19 < 0);
            const v22 = {get:v4};
            // v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
            const v23 = v11 + 1;
            // v23 = .primitive
            v11 = v23;
        } while (v11 < 8);
    }
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v26 = v25;
const v27 = v4(v26);
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
