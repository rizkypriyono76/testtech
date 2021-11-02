/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
    //periksa kotak perbatasan ukuran 1 array dan kosongkan kata pertama
  if (!words[0] || words.length ==  1) return words[0] || "";
  let i = 0;
  // utk sementara semua kata memiliki karakter yang sama pada position i, increment i
  while(words[0][i] && words.every(w => w[i] === words[0][i]))
    i++;
  
  // substring dari awal hingga terakhir yang telah berhasil diperiksa
  return words[0].substr(0, i);
}

console.log(result(words));
