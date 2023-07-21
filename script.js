/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function rememberMyFilms () {
    for (let i = 0; i< 2; i++){
        let question_1 = prompt('Один из последних просмотренных фильмов?', '');
        let question_2 = +prompt('На сколько оцените его?', '');
            if ( question_1 != null && question_2 != null && question_1 != '' && question_2 != '' && question_1.length<50){
                personalMovieDB.movies[question_1] = question_2;
                alert('Done');
            }
            else{
                alert('Error');
                i--;
            }
        }
}
rememberMyFilms();


function detectPersonalLevel (){
    if ( personalMovieDB.count < 10 ){
        alert('Просмотрено довольно мало фильмов');
    }
    else if ( personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ){
        alert('Вы классический зритель');
    }
    else if (personalMovieDB.count > 30){
        alert('Вы - киноман');
    }
    else {
        alert('Произошла ошибка');
    }
}
detectPersonalLevel();


function writeYourGenres() {
    for (let i = 1; i<=3;i++){
        const question_genges = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = question_genges;
    }
}
writeYourGenres();


function showMyDB (hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.private);





// Функция без аргументов
// function showMyDB () {
//     if (personalMovieDB.private == false){
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();
