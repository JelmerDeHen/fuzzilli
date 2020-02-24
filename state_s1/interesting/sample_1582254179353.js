function main() {
Object.prototype = 1337;
}
%NeverOptimizeFunction(main);
main();
