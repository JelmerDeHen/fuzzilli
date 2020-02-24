function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            const v11 = v10 + 1;
            // v11 = .primitive
            v10 = v11;
            const v12 = v7 + 1;
            // v12 = .primitive
            v7 = v12;
            const v14 = [13.37,13.37,13.37];
            // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v20 = [3156875969,3156875969,127,DataView];
            // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v21 = {constructor:v20,c:v20,e:13.37,d:127,a:3156875969,__proto__:"boolean"};
            // v21 = .object(ofGroup: Object, withProperties: ["constructor", "e", "__proto__", "c", "a", "d"])
            let v23 = 0;
            const v24 = v14[v23];
            // v24 = .unknown
            const v25 = v24 && "boolean";
            // v25 = .boolean
            v21.a = v25;
        } while (v7 < 8);
    }
}
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v28 = v27;
const v29 = v0(v28);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
