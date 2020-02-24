function main() {
let v1 = 0;
try {
    const v3 = "/Y6Q9W.clJ"[v1];
    // v3 = .unknown
    let v4 = v3;
    const v6 = Function(v3);
    // v6 = .unknown
} catch(v7) {
}
}
%NeverOptimizeFunction(main);
main();
