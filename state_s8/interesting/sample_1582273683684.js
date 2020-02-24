function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [1337,String,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {e:v4,length:1337,toString:v4};
// v8 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "toString", "length"])
const v9 = {valueOf:v8,a:v7,e:-1073741824,length:String,c:v7};
// v9 = .object(ofGroup: Object, withProperties: ["a", "c", "e", "valueOf", "__proto__"], withMethods: ["length"])
let v10 = String;
const v16 = new Uint8ClampedArray(57874);
// v16 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "__proto__", "buffer", "length", "byteLength", "constructor"], withMethods: ["every", "reduce", "indexOf", "reverse", "map", "join", "entries", "reduceRight", "subarray", "includes", "sort", "some", "values", "copyWithin", "filter", "lastIndexOf", "set", "fill", "find", "findIndex", "keys", "forEach", "slice"])
const v17 = v16.indexOf(8,9007199254740993);
// v17 = .integer
function v20(v21,v22) {
    Reflect.constructor = NaN;
    let v30 = 0;
    let v33 = 0;
    do {
        let v36 = 0;
        do {
            const v37 = v36 + 1;
            // v37 = .primitive
            const v38 = {constructor:3156875969,...v37,...8};
            // v38 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
            v36 = v37;
        } while (v36 < 7);
        const v45 = v33 + 1;
        // v45 = .primitive
        v33 = v45;
    } while (v33 < 8);
    const v46 = v30 + 1;
    // v46 = .primitive
    v30 = v46;
    return 13.37;
}
const v49 = [1337];
// v49 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v50 = v49;
const v51 = v20(v50);
// v51 = .unknown
const v52 = v20(1024,4.0);
// v52 = .unknown
const v53 = v20(v52,v50);
// v53 = .unknown
}
%NeverOptimizeFunction(main);
main();
