// Soal no 1
function findSaleSocks(socks) {
  const sockCount = new Map();
  for (const sock of socks) {
    if (sockCount.has(sock)) {
      sockCount.set(sock, sockCount.get(sock) + 1);
    } else {
      sockCount.set(sock, 1);
    }
  }

  let saleSockCount = 0;
  for (const [sock, count] of sockCount) {
    saleSockCount += Math.floor(count / 2);
  }

  return saleSockCount;
}

const arr1 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const arr2 = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
const arr3 = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

console.log(findSaleSocks(arr1));
console.log(findSaleSocks(arr2));
console.log(findSaleSocks(arr3));

// Soal no 2
function countWords(sentence) {
  const words = sentence.split(" ");
  const regex = /[`~@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/]/gi;

  let count = 0;
  for (const word of words) {
    if (!regex.test(word)) {
      count++;
    }
  }

  return count;
}

const input1 = "Saat meng*ecat tembok, Agung dib_antu oleh Raihan.";
const input2 = "Berapa u(mur minimal[ untuk !mengurus ktp?";
const input3 = "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.";

console.log(countWords(input1));
console.log(countWords(input2));
console.log(countWords(input3));
