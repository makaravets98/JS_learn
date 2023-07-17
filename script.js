/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
'use strict';
const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const question_1 = prompt('Один из последних просмотренных фильмов?', '');
const question_2 = +prompt('На сколько оцените его?', '');
const question_3 = prompt('Один из последних просмотренных фильмов?', '');
const question_4 = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[question_1] = question_2;
personalMovieDB.movies[question_3] = question_4;

console.log(personalMovieDB);