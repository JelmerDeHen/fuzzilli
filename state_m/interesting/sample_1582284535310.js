function main() {
let v3 = 0;
const v5 = v3 + 1;
// v5 = .primitive
v3 = v5;
function v6(v7,v8) {
    const v11 = {set:v6,get:v6};
    // v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
    const v13 = Object.seal(arguments,7,v11);
    // v13 = .object()
    const v14 = Object.getOwnPropertyDescriptors(arguments);
    // v14 = .object()
}
let v18 = 0;
const v20 = v18 + 1;
// v20 = .primitive
v18 = v20;
const v21 = v6();
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
