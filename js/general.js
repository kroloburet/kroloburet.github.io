/**
 * @author Sergey Nizhnik <kroloburet@gmail.com>
 */

;(function () {

    /**
     * Отложенная загрузка ресурсов
     */
    //////////// CSS
    const head = document.getElementsByTagName('head')[0];
    // главная таблица стилей
    const gc = document.createElement('link');
    gc.rel = 'stylesheet';
    gc.href = 'css/general.css';
    head.insertBefore(gc, head.firstChild);
    // Tagra_UI
    const tuiCss = document.createElement('link');
    tuiCss.rel = 'stylesheet';
    tuiCss.href = 'https://rawgit.com/kroloburet/TAGRA_CMS/master/Tagra_UI/style.css';
    head.insertBefore(tuiCss, head.firstChild);
    //////////// JS
    // fontawesome
    const fa = document.createElement('script');
    fa.src = 'https://kit.fontawesome.com/bacee63d78.js'
    head.insertBefore(fa, head.firstChild);
    // addThis
    setTimeout(() => {
        const at = document.createElement('script');
        at.src = '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-53f083b102776710';
        head.insertBefore(at, head.firstChild);
    }, 3000);

    /**
     * Загрузка альтернативного изображения
     */
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', () => img.src = 'img/noimg.svg');
    });

})();
