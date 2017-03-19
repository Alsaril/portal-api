/**
 * Created by ivan on 19.03.17.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.json(jsonData);
});

module.exports = router;


var jsonData = [
    { title: 'Russian Code Cup 2017',
     text: 'Друзья, всем привет! \nРады вам сообщить, что 19 марта стартует ежегодный крупнейший чемпионат' +
     ' по спортивному программированию Russian Code Cup 2017. В прошлом году чемпионат стал международным. ' +
     'Теперь уже талантливые программисты со всего мира вновь будут соревноваться в правильности и ' +
     'скорости решения задач и поборются за призовой фонд в размере 750 тысяч рублей.',
     author: 'Дмитрий Санников' },

    { title: 'Russian Code Cup 2017',
        text: 'Друзья, ' +
        'напоминаю вам, что ауд.395 закрывается в 22-00!' +
        '\nДо 22-00 все студенты Технопарка обязаны покинуть помещение.' +
        '\nЯ знаю, что есть случаи, когда студенты остаются после 22-00 в Центре. ' +
        'Сейчас мы составляем список этих людей. '+
        'Считаю такое поведение крайне некорректным.Люди, злоупотребляющие доверием, должны нести ответственность. ',
        author: 'Елена Чернега' },


    { title: 'Защита выпускных проектов (весна 2017 года)',
        text: 'Друзья, размещаю здесь видео с защиты выпускных проектов , чтобы вы имели представление о том, что' +
        ' вам предстоит и как вообще защита проходит. ' +
        'Видео с мероприятия находится здесь: https://youtu.be/yzbJX4kQiGk. Полезного просмотра!',
        author: 'Елена Чернега' }
    ];