function main() {
const v2 = {e:13.37,d:"d"};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d"])
function v3(v4,v5) {
    let v9 = -128;
    const v10 = v2 === 0;
    // v10 = .boolean
    const v11 = ~v9;
    // v11 = .boolean
    const v12 = v10 % v11;
    // v12 = .number
    const v13 = -128 + v12;
    // v13 = .primitive
    v9 = v11;
}
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
for (let v21 = 0; v21 < 100; v21++) {
    const v22 = v3();
    // v22 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
