import React, { useCallback, useContext, useState } from "react";
import arrow from "../imgs/arrow.svg"

const QaContext = React.createContext(false);

const QaAccordion = ({ children }) => {
    const [activeQuestion, setActiveQuestion] = useState();

    const switchQuestion = useCallback((title) => {
        setActiveQuestion((activeQuest) =>
            activeQuest === title ? undefined : title
        )
    }, [])

    return (
        <QaContext.Provider value={{ activeQuestion, switchQuestion }}>
            {children}
        </QaContext.Provider>
    );
};

QaAccordion.Item = function QaItem({ children, title }) {
    const { activeQuestion, switchQuestion } = useContext(QaContext);
    return (
        <div onClick={() => switchQuestion(title)} className="qa-item">
            <div className="qa__row">
                <h3 className="qa__title">{title}</h3>
                <img className={activeQuestion === title ? "rotated-img" : "normal-img"} alt="arrow" src={arrow}></img>
            </div>
            {activeQuestion === title && <div className="qa__answer">{children}</div>}
        </div>
    );
};

QaAccordion.Answer = function QaAnswer({ title }) {
    return <>{title}</>;
};

export default function QaItems() {
    return (
        <QaAccordion>
            <QaAccordion.Item title={"Что такое Билетопоиск?"}>
                <QaAccordion.Answer title={"Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."} />
            </QaAccordion.Item>
            <QaAccordion.Item title={"Какой компании принадлежит Билетопоиск?"}>
                <QaAccordion.Answer title={"Ответ"} />
            </QaAccordion.Item>
            <QaAccordion.Item title={"Как купить билет на Билетопоиск?"}>
                <QaAccordion.Answer title={"Ответ"} />
            </QaAccordion.Item>
            <QaAccordion.Item title={"Как оставить отзыв на Билетопоиск?"}>
                <QaAccordion.Answer title={"Ответ"} />
            </QaAccordion.Item>
        </QaAccordion>
    );
};
