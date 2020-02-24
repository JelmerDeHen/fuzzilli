function main() {
const v2 = {constructor:"symbol",length:9007199254740993};
// v2 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
function v7(v8,v9,v10,v11,v12) {
    const v13 = v2[1288410297];
    // v13 = .unknown
}
let v16 = 0;
do {
    for (let v20 = 0; v20 < 100; v20++) {
        const v21 = v7();
        // v21 = .unknown
    }
    const v22 = v16 + 1;
    // v22 = .primitive
    v16 = v22;
} while (v16 < 2);
let v32 = 0;
}
%NeverOptimizeFunction(main);
main();
