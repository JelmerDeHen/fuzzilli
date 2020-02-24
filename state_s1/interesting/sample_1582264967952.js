function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = {constructor:v2,valueOf:"38aPKToPGP"};
// v3 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "constructor"])
const v4 = v3.__proto__;
// v4 = .object()
v4.length = -3823952735;
const v6 = {};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
function v7(v8,v9) {
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            const v15 = v4.length;
            // v15 = .unknown
            const v16 = v14 + 1;
            // v16 = .primitive
            v14 = v16;
            let v19 = 0;
            do {
                const v20 = v19 + 1;
                // v20 = .primitive
                v19 = v20;
            } while (v19 < 5);
        } while (v14 < 8);
    }
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v23 = v22;
const v24 = v7(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
