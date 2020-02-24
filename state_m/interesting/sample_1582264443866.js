function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [parseFloat,v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {__proto__:v6,e:-4070953421,d:v6,a:v7,length:parseFloat};
// v8 = .object(ofGroup: Object, withProperties: ["e", "a", "__proto__", "d"], withMethods: ["length"])
let v9 = "arguments";
function v10(v11,v12) {
    for (const v14 in "boolean") {
        function v16(v17,v18,v19,v20,v21) {
            return v16;
        }
        const v23 = v16();
        // v23 = .unknown
        for (let v27 = 0; v27 < 1337; v27++) {
            const v28 = v23(Reflect,Reflect,v27,v27);
            // v28 = .unknown
        }
        const v29 = new v23(0,v9);
        // v29 = .object()
        let v32 = 0;
    }
}
const v33 = v10();
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
