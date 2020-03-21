$(document).ready(function () {



    //Для вывода
    let modelSpecs,
        modelPrice,
        modelPriceUSD;

    //Для подсчета
    modelSpecs = $('#modelSpecs');
    modelPrice = $('#modelPrice');
    modelPriceUSD = $('#modelPriceUSD');





    let specs = '';
    let price = 0;



    function calc() {

        let engine = $('input[name=engine]:checked', '#autoForm').val() //Ищет только в форме теги инпут с чекед
        engine = parseInt(engine)

        let complect = $('input[name=complect]:checked', '#autoForm').val()
        complect = parseInt(complect)

        price = engine + complect

    }




    function spec() {
        specs = $('input[name=engine]:checked + label', '#autoForm').text()
        specs = specs + ', ' + $('input[name=complect]:checked + label', '#autoForm').text()
        modelSpecs.text(specs)
    }







    //Получить курс валют
    var currencyUrl = "https://www.cbr-xml-daily.ru/daily_json.js";
    var rurUsdRate = 0;
    $.getJSON(currencyUrl, function (data) {
        console.log(data.Valute.USD.Value);
        rurUsdRate = data.Valute.USD.Value;

    });







    // function USD() {

    //     let priceUSD = price / rurUsdRate;
    //     console.log('доллары' + priceUSD);


    // }






    $('#autoForm input').on('change', function () {
        calc()
        modelPrice.text(price + ' руб')
        modelPriceUSD.text((price / rurUsdRate).toFixed(0) + ' $')
        spec()

    })




    $('#imgHolder').on('click', function () {
        let defaultIMG = "https://cdn0.iconfinder.com/data/icons/coronavirus-3/64/Coronavirus_travel_warning_25-128.png"
        $('.imgHolder img').attr('src', defaultIMG)
    })

    $('.color').on('click', function () {
        let imgPath = $(this).attr('data-img-path')

        $('.imgHolder img').fadeOut(1000, function () {
            $('.imgHolder img').attr('src', imgPath).fadeIn(1000)
        })

    })

    //Новый коммент


})


// 1) создал аккаунт
// 2) настроить user.name и user.email   list посмотреть
// 3) Инициализировать репозиторий(git init)