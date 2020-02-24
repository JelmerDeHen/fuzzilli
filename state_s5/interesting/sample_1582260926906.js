function main() {
try {
    const v11 = "PI"[5];
    // v11 = .unknown
    throw v11;
    let v15 = 0;
    let v23 = 0;
} catch(v25) {
}
}
%NeverOptimizeFunction(main);
main();
