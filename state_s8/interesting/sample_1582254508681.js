function main() {
let v50 = 0;
let v53 = 0;
try {
    let v56 = 0;
    const v57 = v56 + 1;
    // v57 = .primitive
    v56 = v57;
} catch(v62) {
    let v63 = v62;
    let v66 = 0;
    try {
    } catch(v70) {
        const v72 = {set:v70,get:v63};
        // v72 = .object(ofGroup: Object, withProperties: ["__proto__", "get", "set"])
        v72[-3448193934] = v62;
    }
}
const v75 = v53 + 1;
// v75 = .primitive
v53 = v75;
const v76 = v50 + 1;
// v76 = .primitive
v50 = v76;
let v90 = 0;
const v91 = v90 + 1;
// v91 = .primitive
v90 = v91;
}
%NeverOptimizeFunction(main);
main();
