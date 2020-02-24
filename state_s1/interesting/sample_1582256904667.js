function main() {
function v2(v3,v4) {
    let v8 = 0;
    for (const v9 in "boolean") {
        let v12 = 0;
        do {
            let v15 = 0;
            const v16 = v15 + 1;
            // v16 = .primitive
            const v17 = [v12,7];
            // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v18 = {a:v9,c:v17,valueOf:v15,constructor:0,b:"N0Xx92zvHQ"};
            // v18 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "a", "__proto__", "c", "constructor"])
            const v20 = {set:v4};
            // v20 = .object(ofGroup: Object, withProperties: ["set", "__proto__"])
            const v22 = Object.call(v18,"d",v20);
            // v22 = .unknown
            v15 = v16;
            const v23 = v12 + 1;
            // v23 = .primitive
            v12 = v23;
        } while (v12 < 8);
    }
    const v24 = v8 + 1;
    // v24 = .primitive
    v8 = v24;
}
const v27 = v2(1024,4.0);
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
