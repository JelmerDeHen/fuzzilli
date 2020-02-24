function main() {
const v3 = [];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = {valueOf:13.37,b:"toStringTag"};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "b"])
const v5 = {length:"toStringTag",a:v3,d:-1050326348,b:-1050326348};
// v5 = .object(ofGroup: Object, withProperties: ["length", "a", "__proto__", "d", "b"])
function v6(v7,v8) {
    let v15 = 0;
    do {
        let v18 = 0;
        const v19 = v18 + 1;
        // v19 = .primitive
        v18 = v19;
        const v30 = v5.__proto__;
        // v30 = .object()
        for (const v32 of "pvU0UUjoya") {
        }
        const v33 = v15 + 1;
        // v33 = .primitive
        v15 = v33;
    } while (v15 < 8);
    for (const v35 in "object") {
    }
}
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v38 = v37;
const v39 = v6(v38);
// v39 = .unknown
v5.valueOf = -1050326348;
const v43 = v6(v4,1);
// v43 = .unknown
}
%NeverOptimizeFunction(main);
main();
