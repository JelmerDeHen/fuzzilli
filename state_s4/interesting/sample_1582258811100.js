function main() {
function v1(v2,v3) {
    let v10 = 0;
    let v13 = 0;
    let v16 = 0;
    const v17 = v16 + 1;
    // v17 = .primitive
    v16 = v17;
    const v28 = v13 + 1;
    // v28 = .primitive
    v13 = v28;
    const v29 = v10 + 1;
    // v29 = .primitive
    v10 = v29;
    const v35 = {get:Number,set:Number};
    // v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
    const v37 = Object.defineProperty(this,"d",v35);
    // v37 = .undefined
    let v41 = 0;
    const v42 = v41 + 1;
    // v42 = .primitive
    v41 = v42;
    const v49 = 1337 == 13.37;
    // v49 = .boolean
    const v51 = Object();
    // v51 = .object()
    let v54 = 0;
    const v55 = v54 + 1;
    // v55 = .primitive
    v54 = v55;
    let v58 = 0;
    const v59 = v58 + 1;
    // v59 = .primitive
    v58 = v59;
    let v62 = 0;
    const v63 = v62 + 1;
    // v63 = .primitive
    v62 = v63;
}
const v66 = [1337];
// v66 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v67 = v66;
const v68 = v1(v67);
// v68 = .unknown
const v69 = v1(1024,4.0);
// v69 = .unknown
}
%NeverOptimizeFunction(main);
main();
