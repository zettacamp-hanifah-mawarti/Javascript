const { error } = require('console');

//manggil modul file system
var fs = require('fs').promises;

/*function read() {
    fs.readFile('./text.txt')
        .then(value => console.log(value.toString()));
}
read();*/

const bacaFile = namaFile => {
    //catch dieksekusi segera setelah reject atau ketika kondisinya tidak terpenuhi
    const hasil = fs.readFile(namaFile)
        .catch(error => console.log(error));
    return hasil;
};
//baca adalah callback function yg akan dieksekusi setelah beforeTextnya selesai atau setelah before tercetak 
const beforeText = baca => {
    baca
        .then((result) => console.log(result.toString()))
        .catch((error) => console.log(error))
        .finally(() => console.log('Finished'))
    console.log('Before');
};
//bacaFile sebagai argumen untuk callback function 
//beforeText(bacaFile('text.txt'));

const filenya = async(value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value) {
                const result = fs.readFile(value)
                resolve(result);
            } else {
                reject(`Masukkan textnya`);
            }
        }, 2000)
    })
}

const after = () => {
    filenya('./text.txt')
        .then(value => {
            console.log(value.toString());
            console.log('After');
        })
        .catch(error => console.log(error))
        .finally('Finished')
}
after();