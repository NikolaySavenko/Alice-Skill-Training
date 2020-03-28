// Для асинхронной работы используется пакет micro.
const { json } = require('micro');

// Запуск асинхронного сервиса.
module.exports = async (req, res) => {
    const { request, session, version } = await json(req);
    let  answer;
    switch(request.original_utterance){
        case "Кто такой астроном":
            answer = "Бессовестный человек";
        break;
        default:
            answer = "Ошибка";
        break;
    }

    res.end(JSON.stringify(
        {
            version,
            session,
            response: {
                text: answer || "Не задекларировано",
                end_session: true,
            },
        }
    ));
};