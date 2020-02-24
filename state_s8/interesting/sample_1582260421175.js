function main() {
function v3(v4,v5) {
    let v8 = 0;
    do {
        let v11 = 0;
        do {
            const v12 = v11 + 1;
            // v12 = .primitive
            const v13 = {constructor:3156875969,...v12,...8};
            // v13 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
            v11 = v12;
        } while (v11 < 7);
        const v16 = [13.37,13.37];
        // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v18 = [];
        // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v19 = {b:"split",__proto__:v16,constructor:1337};
        // v19 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "b"])
        function v20(v21,v22) {
            const v24 = v18.map(Number,v19);
            // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        }
        for (let v28 = 0; v28 < 100; v28++) {
            const v29 = v20();
            // v29 = .unknown
        }
        const v30 = v8 + 1;
        // v30 = .primitive
        v8 = v30;
    } while (v8 < 8);
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v32 = v31;
const v33 = v3(v32);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
