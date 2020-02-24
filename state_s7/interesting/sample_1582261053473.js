function main() {
let v4 = 0;
const v8 = [13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v9 = {d:-65537,b:undefined};
// v9 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "d"])
const v10 = {length:"boolean",c:13.37,constructor:"boolean",d:v8};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "d", "length", "c"])
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
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v27 = v26;
const v28 = v12(v27);
// v28 = .unknown
const v29 = v12(v9,v11);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
