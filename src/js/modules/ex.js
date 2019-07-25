/* eslint-disable */
const exampleJs = () => {

    const init = () => {

        // Swiper, build/ex/swiper.html
        // eslint-disable-next-line no-console
        console.log('exampleJs');
        const swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        // bootstrap popover
        $('[data-toggle="popover"]').popover();

    };

    return {
        init,
    };

};

export default exampleJs();
