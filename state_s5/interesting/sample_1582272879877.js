function main() {
function v0(v1,v2) {
    const v5 = {set:v0,get:v0};
    // v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
    const v7 = Object.defineProperty(arguments,7,v5);
    // v7 = .undefined
    const v8 = Object.getOwnPropertyDescriptors(arguments);
    // v8 = .object()
}
for (let v13 = 0; v13 < 100; v13++) {
    const v14 = v0();
    // v14 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
