function main() {
function v0(v1,v2) {
    let v6 = 0;
    do {
        let v9 = 0;
        while (v9 < 8) {
            for (const v11 in "object") {
            }
            const v12 = v9 + 1;
            // v12 = .primitive
            v9 = v12;
        }
        const v20 = [1337,1337];
        // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        v20[5] = 9007199254740993;
        const v21 = [3156875969,3156875969,1337,DataView];
        // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v22 = {constructor:v21,c:v21,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
        // v22 = .object(ofGroup: Object, withProperties: ["constructor", "c", "d", "e", "__proto__", "a"])
        const v23 = v6 + 1;
        // v23 = .primitive
        v6 = v23;
    } while (v6 < 8);
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v26 = v25;
const v27 = v0(v26);
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
