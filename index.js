$(document).ready(function () {

    $('#btn').on('click', function () {
        alert('ПРИВЕТ ДЖИКВЕРУ');
    });






    // $('h1').addClass('selected');

    // $('#bbb').addClass('selected');

    // $('p:first').addClass('selected');

    // $('h3:has(span)').addClass('selected');

    // $('.block:empty').addClass('selected');

    // $('a[href="#"]').addClass('selected');




    // $('.inner').addClass('selected');
    // $('.inner').parent().addClass('selected')
    // $('.test').children().addClass('selected')




    // $('#btn1').click(() => {
    //     $('#top-header').toggleClass('pinkColor')
    //     // alert('Hello')
    // });


    // $('#btn1').dbclick(() => {
    //     $('#top-header').toggleClass('pinkColor')
    //     // alert('Hello')
    // });


    // $('#btn1').mouseenter(() => {
    //     $('#top-header').toggleClass('pinkColor')
    //     // alert('Hello')
    // });



    // $('#btn1').mouseleave(() => {
    //     $('#top-header').toggleClass('pinkColor')
    //     // alert('Hello')
    // });

    // $('#btn1').click(() => {
    //     $('#top-header').toggleClass('pinkColor')
    //     // alert('Hello')
    // });





    // $('#testArea').on('mouseenter', () => {
    //     $('#top-header').toggleClass('pinkColor')
    // })


    // $('#inputName').on('focus', () => {
    //     $('#inputName').addClass('focus')
    // })

    // $('#inputName').on('blur', () => {
    //     $('#inputName').removeClass('focus')
    // })


    // $('#inputName').on('keyup', () => {
    //     // alert('help')
    //     $('#textHolder').text($('#inputName').val())
    // })



    // $('#inputName').on('keyup', (e) => {
    //     if (e.whick == 27) {
    //         alert('НАЖАЛ ESCAPE')
    //     }
    // })


    // $('#inputName').on('keyup', (e) => {
    //     if (e.which == 27) {
    //         $('#textHolder').text('')
    //     }


    // })

    ///////АНИМАЦИЯ
    $('#btn1').on('click', () => {
        $('.testing').animate({ 'opacity': '0' }, 1000)
        $('.testing').animate({ 'opacity': '5' }, 1000)
        $('.testing').animate({ 'width': '200px' }, 4000)
        $('.testing').animate({ 'height': '10px' }, 4000)

    })


    $('#btn2').on('click', () => {
        $('.testing').hide(1000).delay(1000).show(500)

    })


    $('#btn3').on('click', () => {
        $('.testing').show(1000)

    })


    $('#btn4').on('click', () => {
        $('.testing').fadeOut(1000)
    })



    $('#btn5').on('click', () => {
        $('.testing').fadeIn(1000)
    })



    /////////КАЛЬКУЛЯТОР

    $('.formaa').on('submit', (event) => {

        event.preventDefault()//Отменяет стандартное поведение

        let x1 = $('#inpt1').val()
        let x2 = $('#inpt2').val()

        x1 = parseInt(x1)
        x2 = parseInt(x2)

        if (isNaN(x1)) {
            x1 = 0;

        }



        if (isNaN(x2)) {
            x2 = 0;

        }


        let result = parseInt(x1) + parseInt(x2)


        $('.result').text(result)

        // alert(x1)
        // alert(x2)
        // alert(result)
    })




    // $('#sub').on('click', () => {
    //     $('#inpt1').val()
    //     $('#inpt2').val()
    // })


    // // $('#inpt1').
    // //     $('#inpt2').
    // $('.result').

    //////////////////////=================//////////////////////// СМЕНА КАРТИНКИ

    let scrcValue = $('.imgHolder img').attr('src')



    $('.imgHolder img').on('click', () => {

        $('.imgHolder img').attr('src', '')
    })




    // $('.color1').on('click', () => {

    //     $('.imgHolder img').attr('src', 'https://cdn0.iconfinder.com/data/icons/coronavirus-3/64/Coronavirus_pneumonia_8-128.png')
    // })


    // $('.color2').on('click', () => {

    //     $('.imgHolder img').attr('src', 'https://cdn0.iconfinder.com/data/icons/coronavirus-3/64/Coronavirus_puke_7-128.png')
    // })

    // $('.color3').on('click', () => {

    //     $('.imgHolder img').attr('src', 'https://cdn0.iconfinder.com/data/icons/coronavirus-3/64/Coronavirus_dont_touch_wild_animal_11-128.png')
    // })
    // // alert(scrcValue)




    $('.color').on('click', function () {
        let imgPath;

        imgPath = $(this).attr('data-img-path')
        console.log(imgPath);


        $('.imgHolder img').fadeOut(1000, function () {
            $('.imgHolder img').attr('src', imgPath).fadeIn(1000)
        })

    })

});






////////////////////////////////////////
//Добавление текста


// $('.testBoxx').text('dsfsdfdsf')

// $('.testBoxx').html('<div>1234</div>')

$('.testBoxx').addClass('selected')

$('.testBoxx').prepend('перед')
$('.testBoxx').append('после')

$('.testBoxx').before('<p>перед!!!</p>')
$('.testBoxx').after('после!!!')


