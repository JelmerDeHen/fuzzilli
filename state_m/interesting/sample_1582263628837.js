function main() {
const v3 = isFinite > "d";
// v3 = .boolean
const v7 = typeof -225787572;
// v7 = .string
const v9 = v7 === "undefined";
// v9 = .boolean
let v15 = 0;
function v17(v18,v19) {
    const v20 = v18 in v17;
    // v20 = .boolean
    let v28 = 0;
    for (const v29 in "boolean") {
        let v32 = 0;
        let v36 = 0;
        const v37 = v36 + 1;
        // v37 = .primitive
        v36 = v37;
        const v38 = {isExtensible:v18,construct:v17,defineProperty:v19};
        // v38 = .object(ofGroup: Object, withProperties: ["isExtensible", "defineProperty", "__proto__"], withMethods: ["construct"])
        const v39 = 0 >= v19;
        // v39 = .boolean
        for (let v42 = 0; v42 < 100; v42++) {
        }
        for (let v46 = 0; v46 < 0; v46++) {
            let v47 = 1337;
            for (const v54 of v38) {
                const v58 = v54(v54,v29,v54,v39,v47);
                // v58 = .unknown
            }
        }
        const v66 = v32 + 1;
        // v66 = .primitive
        v32 = v66;
    }
    const v67 = v28 + 1;
    // v67 = .primitive
    v28 = v67;
}
const v70 = v17(1024,4.0);
// v70 = .unknown
let v73 = 0;
const v77 = v73 + 1;
// v77 = .primitive
v73 = v77;
let v80 = 0;
const v81 = v80 + 1;
// v81 = .primitive
v80 = v81;
let v85 = 0;
}
%NeverOptimizeFunction(main);
main();
