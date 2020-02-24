function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = {__proto__:String,b:-1780133803};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "b"], withMethods: ["__proto__"])
const v8 = {__proto__:-1780133803,a:String,e:v4,d:String};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "e"], withMethods: ["d", "a"])
function v9(v10,v11) {
    for (const v13 in "boolean") {
        let v16 = 0;
        do {
            let v19 = 0;
            do {
                const v20 = v19 + 1;
                // v20 = .primitive
                v19 = v20;
            } while (v19 < 7);
            const v21 = v16 + 1;
            // v21 = .primitive
            v16 = v21;
        } while (v16 < 8);
    }
    return v4;
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v24 = v23;
const v25 = v9(v24);
// v25 = .unknown
for (const v26 of "KHTJyWatMU") {
    v25[v26] = v26;
}
let v29 = 0;
let v32 = 0;
const v33 = v32 + 1;
// v33 = .primitive
v32 = v33;
const v34 = v29 + 1;
// v34 = .primitive
v29 = v34;
const v35 = v9(v6,v7);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
