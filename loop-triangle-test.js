let triangle = 11;
let indexspasi = triangle-1;
for (let index = 0; index <= triangle; index++) {
    for (let indexspasi = triangle-(index+1); indexspasi >= 0; indexspasi--) {
        process.stdout.write(" ");
    }
    for (let index2 = 0; index2 < index; index2++) {
        process.stdout.write('* ');
    }
    process.stdout.write('\n ');
}