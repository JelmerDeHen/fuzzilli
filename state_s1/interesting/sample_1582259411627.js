function main() {
function v0(v1,v2) {
    const v4 = [13.37,13.37,13.37];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v10 = [3156875969,3156875969,127,DataView];
    // v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v11 = {constructor:v10,c:v10,e:13.37,d:127,a:3156875969,__proto__:"boolean"};
    // v11 = .object(ofGroup: Object, withProperties: ["e", "c", "a", "constructor", "__proto__", "d"])
    let v13 = 0;
    const v14 = v4[v13];
    // v14 = .unknown
    const v15 = v14 && "boolean";
    // v15 = .boolean
    v11.a = v15;
}
for (let v20 = 0; v20 < 100; v20++) {
    const v21 = v0();
    // v21 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
