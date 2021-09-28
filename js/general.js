/**
 * @author Sergey Nizhnik <kroloburet@gmail.com>
 */

(() => {

    /**
     * Отложенная загрузка ресурсов
     */
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
