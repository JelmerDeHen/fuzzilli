function main() {
let v4 = 0;
const v8 = [13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v9 = {d:-65537,b:undefined};
// v9 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "b"])
const v10 = {length:"boolean",c:13.37,constructor:"boolean",d:v8};
// v10 = .object(ofGroup: Object, withProperties: ["c", "d", "constructor", "length", "__proto__"])
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
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v27 = v26;
const v28 = v12(v27);
// v28 = .unknown
const v29 = v12(v9,v11);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
