import { BoxContent, Container } from "@/app/components";
import styles from './page.module.scss';

export default function PostPage() {
    return (
        <Container>
            <BoxContent>
                <div className={styles.content}>
                    <h1>Введение в JavaScript: Основы для Начинающих</h1>

                    <p>JavaScript — это один из самых популярных языков программирования, используемый для разработки
                        веб-приложений. В этой статье мы рассмотрим основы JavaScript и как его использовать для
                        создания
                        динамических и интерактивных веб-страниц.</p>

                    <h2>Что такое JavaScript?</h2>
                    <p>JavaScript — это язык программирования, который выполняется на стороне клиента, то есть
                        непосредственно в браузере. Он позволяет:</p>

                    <ul>
                        <li>Изменять содержание страницы в реальном времени;</li>
                        <li>Реагировать на действия пользователя;</li>
                        <li>Обрабатывать и проверять формы;</li>
                        <li>Создавать анимации и интерактивные элементы.</li>
                    </ul>

                    <h3>Пример кода на JavaScript</h3>
                    <p>Ниже приведен простой пример кода на JavaScript, который выводит сообщение в консоль:</p>

                    <pre><code>
    // Выводим сообщение в консоль
    console.log('Привет, мир!');
  </code></pre>

                    <h4>Как запустить этот код?</h4>
                    <p>Вы можете вставить этот код в HTML-документ между
                        тегами <code>&lt;script&gt;&lt;/script&gt;</code> или запустить его через инструменты
                        разработчика в
                        вашем браузере.</p>

                    <blockquote>
                        "JavaScript — это не просто язык программирования, это основа для создания современных
                        веб-приложений."
                    </blockquote>

                    <h2>Циклы в JavaScript</h2>
                    <p>Циклы позволяют выполнять одно и то же действие несколько раз. Рассмотрим <strong>цикл
                        for</strong>:
                    </p>

                    <pre><code>

  </code></pre>

                    <p>Этот код выводит числа от 0 до 4 в консоль.</p>

                    <h2>Таблица операторов JavaScript</h2>
                    <p>Вот таблица с основными операторами JavaScript:</p>

                    <table>
                        <thead>
                        <tr>
                            <th>Оператор</th>
                            <th>Описание</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>+</td>
                            <td>Сложение двух значений</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Вычитание одного значения из другого</td>
                        </tr>
                        <tr>
                            <td>*</td>
                            <td>Умножение двух значений</td>
                        </tr>
                        <tr>
                            <td>/</td>
                            <td>Деление одного значения на другое</td>
                        </tr>
                        </tbody>
                    </table>

                    <h2>Работа с изображениями</h2>
                    <p>JavaScript также может управлять изображениями на странице. Например, вы можете динамически
                        менять
                        изображение при взаимодействии пользователя:</p>

                    <img src="https://via.placeholder.com/800x400" alt="Пример изображения JavaScript"/>

                    <h2>Заключение</h2>
                    <p>JavaScript — это мощный инструмент для веб-разработки. Он позволяет создавать интерактивные
                        элементы
                        на сайте, изменять структуру страницы, работать с данными и многими другими аспектами
                        веб-программирования. Чтобы углубить знания, советуем изучить официальную <a
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">документацию по
                            JavaScript</a>.
                    </p>
                </div>
            </BoxContent>
        </Container>
    );
}
