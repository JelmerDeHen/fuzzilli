function main() {
let v7 = 0;
while (v7 > 8) {
    const v8 = (1337)(-1247882257);
    // v8 = .unknown
    let v9 = v8;
    v9.valueOf = v9;
}
}
%NeverOptimizeFunction(main);
main();
