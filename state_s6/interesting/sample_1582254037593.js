function main() {
let v38 = 0;
delete Object.prototype;
}
%NeverOptimizeFunction(main);
main();
