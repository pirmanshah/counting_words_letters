const huruf_kata = document.getElementById('huruf_kata');
const huruf_berulang = document.getElementById('huruf_berulang');
const huruf_tidak_berulang = document.getElementById('huruf_tidak_berulang');
const karakter_string = document.getElementById('karakter_string');
const jumlah_kata_berulang = document.getElementById('jumlah_kata_berulang');
const jumlah_kata = document.getElementById('jumlah_kata');
const toast = document.getElementById('toast');
const myToast = bootstrap.Toast.getOrCreateInstance(toast);

const hitung = document.getElementById('hitung').addEventListener('click', () => {
    if(huruf_kata.value === ''){
        myToast.show();
        return false;
    }
    // Jumlah Huruf (dengan huruf berulang)
    hitungHurufBerulang(huruf_kata);
    // Jumlah Karakter/String
    hitungKarakterString(huruf_kata);
    // Jumlah Huruf (tanpa huruf berulang)
    hurufTidakBerulang(huruf_kata);
    // Jumlah Kata (berulang)
    hitungKataBerulang(huruf_kata);
    // Jumlah Kata (tidak berulang)
    hitungKata(huruf_kata);
});

const btnDelete = document.getElementById('delete').addEventListener('click', () => {
    remove();
})

const hapusSpasi = (str) => {
    return str.value.replace(/ /g, '');
}   

const remove = () => {
    huruf_kata.value = '';
    huruf_berulang.innerHTML = '';
    karakter_string.innerHTML = 0;
    huruf_tidak_berulang.innerHTML = 0;
    jumlah_kata_berulang.innerHTML = '';
    jumlah_kata.innerHTML = 0;
}

const  hitungHurufBerulang = (param) => {
    let letters = hapusSpasi(param).toLowerCase();
    let sum = '';
    let letterMap = {};

    const iterable = [...letters].forEach((value, index) => {
        console.log(index)
        let currentLetterCount = letterMap[letters[index]];
        let count = currentLetterCount ? currentLetterCount : 0;
        letterMap[letters[index]] = count + 1;
    });
    let result = Object.keys(letterMap).map((key) => {
      sum += `<li>${key} = ${letterMap[key]}</li>`
    });
    huruf_berulang.innerHTML = sum;
}

const hitungKarakterString = (param) => {
    let temp = hapusSpasi(param);
    karakter_string.innerHTML = `${temp.length}`;
}

const hurufTidakBerulang = (param) => {
    let temp = hapusSpasi(param).toLowerCase();
    let arr = [];
    const count = [...temp].forEach(value => {
        if(!arr.includes(value)) {
            arr.push(value);
        }
    })
    huruf_tidak_berulang.innerHTML = arr.length;
}

const  hitungKataBerulang = (param) => {
  let words = param.value.toLowerCase().split(" ");
  let sum = '';
  let wordMap = {};

  for (let i = 0; i < words.length; i++) {
    let currentWordCount = wordMap[words[i]];
    let count = currentWordCount ? currentWordCount : 0;
    wordMap[words[i]] = count + 1;
  }
  let result = Object.keys(wordMap).map((key) => {
    sum += `<li>${key} = ${wordMap[key]}</li>`
  });
  jumlah_kata_berulang.innerHTML = sum;
}

const hitungKata = (param) => {
    let countWord = 0;
    let length = param.value.length;
    for (let i = 0; i < length; i++) {
        let currentCharacter = param.value[i];
        if (currentCharacter === " ") {
            countWord += 1;
        }
    }
    countWord += 1;
    jumlah_kata.innerHTML = countWord;
}