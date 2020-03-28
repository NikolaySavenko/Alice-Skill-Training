// Для асинхронной работы используется пакет micro.
const { json } = require('micro');

// Запуск асинхронного сервиса.
module.exports = async (req, res) => {
    const { request, session, version } = await json(req);
    let  answer;

    let astroPhrase = "Бессовестный незнающий жалости человек который всем ставить колы";

    switch(request.original_utterance){
        case "Кто такой астроном?":
            answer = astroPhrase;
        break;
        default:
            answer = "Здравстуйте, что вы хотите узнать?";
        break;
    }

    res.end(JSON.stringify(
        {
            version,
            session,
            response: {
                text: answer,
                end_session: true,
            },
        }
    ));
};