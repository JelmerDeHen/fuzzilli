function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v2 = v1;
function v4(v5,v6) {
    const v12 = [3156875969,3156875969,1337,DataView];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v13 = {constructor:v12,c:v12,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v13 = .object(ofGroup: Object, withProperties: ["a", "e", "c", "__proto__", "d", "constructor"])
    for (const v18 in "boolean") {
        let v21 = 0;
        do {
            try {
                const v22 = Boolean === v5;
                // v22 = .boolean
                let v25 = 0;
                const v26 = v2.keys();
                // v26 = .object()
                for (const v27 of v26) {
                    const v28 = v18 in 0;
                    // v28 = .boolean
                }
            } catch(v29) {
            }
            const v37 = v21 + 1;
            // v37 = .primitive
            v21 = v37;
        } while (v21 < 8);
    }
}
const v39 = [1337];
// v39 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v40 = v39;
const v41 = v4(v40);
// v41 = .unknown
}
%NeverOptimizeFunction(main);
main();
