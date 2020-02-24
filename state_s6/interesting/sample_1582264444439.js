function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [parseFloat,v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {__proto__:v6,e:-4070953421,d:v6,a:v7,length:parseFloat};
// v8 = .object(ofGroup: Object, withProperties: ["e", "a", "d", "__proto__"], withMethods: ["length"])
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
