/**
 * Created by ivan on 19.03.17.
 */

var express = require('express');
var router = express.Router();

var blogList = [
    { name: 'Алгоритмы (первый семестр)' },
    { name: 'Web-технологии (первый семестр)' },
    { name: 'Подготовительное отделение С/С++ (открытые курсы)' },
    { name: 'С++ (первый семестр)' },
    { name: 'Linux (открытые курсы)' },
    { name: 'Java (второй семестр)' },
    { name: 'Фронтенд (второй семестр)' },
    { name: 'Разработка приложений на iOS (открытый курс)' },
    { name: 'Интерфейсы (второй семестр)' },
    { name: 'СУБД (второй семестр)' },
    { name: 'Программирование на Python' },
    { name: 'Углубленная мобильная разработка на Android (открытый курс)' },
    { name: 'Анализ защищенности (третий семестр)' },
    { name: 'Лекции и семинары' },
    { name: 'Стажировка' },
    { name: 'Программирование CUDA C/C++ (открытый курс)' },
    { name: 'Android (третий семестр)' },
    { name: 'HighLoad (третий семестр)' },
    { name: 'Управление продуктом и проектом (четвертый семестр)' },
    { name: 'Тестирование мобильных приложений' }
];

router.get('/', function(req, res) {
    res.json(blogList);
});

module.exports = router;