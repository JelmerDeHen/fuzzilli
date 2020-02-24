function main() {
const v4 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v4 = .object(ofGroup: Object, withProperties: ["b", "d", "__proto__", "e", "toString"])
for (let v11 = 0; v11 < 3; v11++) {
    let v14 = 0;
    while (v14 < 9) {
        const v15 = v14 + 1;
        // v15 = .primitive
        v14 = v15;
    }
}
let v19 = 0;
while (v19 < 7) {
    const v20 = v19 + 1;
    // v20 = .primitive
    v19 = v20;
}
for (const v21 in "object") {
}
let v24 = 0;
while (v24 < 8) {
    const v25 = v24 + 1;
    // v25 = .primitive
    v24 = v25;
}
for (const v26 in v4) {
    let v27 = "iterator";
    const v28 = (4294967297)[v27];
    // v28 = .unknown
}
const v35 = 1337 == 13.37;
// v35 = .boolean
const v37 = Object();
// v37 = .object()
}
%NeverOptimizeFunction(main);
main();
