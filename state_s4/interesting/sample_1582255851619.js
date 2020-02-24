function main() {
function v1(v2,v3) {
    let v6 = 0;
}
const v8 = {};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v9 = {getOwnPropertyDescriptor:1337};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "getOwnPropertyDescriptor"])
const v11 = new Proxy(v8,v9);
// v11 = .unknown
let v14 = 0;
delete v11[v1];
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
}
%NeverOptimizeFunction(main);
main();
