function main() {
function v3(v4,v5) {
    let v12 = 0;
    const v15 = ~"boolean";
    // v15 = .boolean
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
    const v29 = v12 + 1;
    // v29 = .primitive
    v12 = v29;
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
