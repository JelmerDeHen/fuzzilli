function main() {
function v0(v1,v2) {
    const v4 = [13.37,13.37,13.37];
    // v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v10 = [3156875969,3156875969,127,DataView];
    // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v11 = {constructor:v10,c:v10,e:13.37,d:127,a:3156875969,__proto__:"boolean"};
    // v11 = .object(ofGroup: Object, withProperties: ["a", "c", "d", "e", "constructor", "__proto__"])
    let v13 = 0;
    const v14 = v4[v13];
    // v14 = .unknown
    const v15 = v14 && "boolean";
    // v15 = .boolean
    v11.a = v15;
}
for (let v19 = 0; v19 < 100; v19++) {
    const v20 = v0();
    // v20 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
