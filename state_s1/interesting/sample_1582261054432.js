function main() {
let v4 = 0;
const v8 = [13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v9 = {d:-65537,b:undefined};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "d"])
const v10 = {length:"boolean",c:13.37,constructor:"boolean",d:v8};
// v10 = .object(ofGroup: Object, withProperties: ["constructor", "c", "length", "__proto__", "d"])
let v11 = v10;
function v12(v13,v14) {
    for (const v16 in "boolean") {
        let v19 = 0;
        do {
            for (let v23 = -3664528053; v23 < 0; v23 = v23 >> 1327239868) {
            }
            const v24 = v19 + 1;
            // v24 = .primitive
            v19 = v24;
        } while (v19 < 8);
    }
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v27 = v26;
const v28 = v12(v27);
// v28 = .unknown
const v29 = v12(v9,v11);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
