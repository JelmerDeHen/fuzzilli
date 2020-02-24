function main() {
const v3 = [];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = {valueOf:13.37,b:"toStringTag"};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "valueOf"])
const v5 = {length:"toStringTag",a:v3,d:-1050326348,b:-1050326348};
// v5 = .object(ofGroup: Object, withProperties: ["b", "a", "d", "__proto__", "length"])
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
// v37 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v38 = v37;
const v39 = v6(v38);
// v39 = .unknown
v5.valueOf = -1050326348;
const v43 = v6(v4,1);
// v43 = .unknown
}
%NeverOptimizeFunction(main);
main();
