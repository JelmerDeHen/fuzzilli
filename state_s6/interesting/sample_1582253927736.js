function main() {
try {
    let v31 = 0;
    let v34 = 0;
    const v35 = (4294967297)[v34];
    // v35 = .unknown
    const v36 = v34 + 1;
    // v36 = .primitive
    v34 = v36;
    const v37 = v31 + 1;
    // v37 = .primitive
    v31 = v37;
} catch(v38) {
    let v41 = 0;
}
}
%NeverOptimizeFunction(main);
main();
