function main() {
function v3(v4,v5) {
    Reflect.constructor = NaN;
    let v13 = 0;
    let v16 = 0;
    do {
        let v19 = 0;
        do {
            const v20 = v19 + 1;
            // v20 = .primitive
            const v21 = {constructor:3156875969,...v20,...8};
            // v21 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
            v19 = v20;
        } while (v19 < 7);
        const v28 = v16 + 1;
        // v28 = .primitive
        v16 = v28;
    } while (v16 < 8);
    const v29 = v13 + 1;
    // v29 = .primitive
    v13 = v29;
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v33 = v32;
const v34 = v3(v33);
// v34 = .unknown
const v35 = v3(1024,4.0);
// v35 = .unknown
const v36 = v3(v35,v33);
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();
