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
            // v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v18 = {a:v9,c:v17,valueOf:v15,constructor:0,b:"N0Xx92zvHQ"};
            // v18 = .object(ofGroup: Object, withProperties: ["b", "c", "a", "valueOf", "constructor", "__proto__"])
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
