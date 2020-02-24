function main() {
const v3 = new Uint16Array(234126503);
const v4 = v3.sort(valueOf);
}
%NeverOptimizeFunction(main);
main();
