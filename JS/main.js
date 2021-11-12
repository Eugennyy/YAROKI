//Developed by G E N 親切 a.k.a. Eugennyy

'use strict';

let stayStatus = Number,
    accountStatus = Number,
    access = Number,
    authSession;

(function preloader() {
    $('body').css('cursor', 'wait');
 
    setTimeout(function() {
        $('#preloader').fadeOut(500);
        $('body').css('cursor', 'auto');
        $('.main__title').css('animation', 'Greeting 1s forwards');

        setTimeout(function() {
            $('#preloader').remove();
        }, 1000);
    }, 5000);
} () );

(function checkStorage() {
    if (localStorage.getItem('stayStatus') != null && localStorage.getItem('status') != null && localStorage.getItem('access') != null) {
        stayStatus = parseInt(localStorage.getItem('stayStatus'));
        accountStatus = parseInt(localStorage.getItem('status'));
        
        if (parseInt(localStorage.getItem('stayStatus')) === 0) {
            access = 0;
        }

        else {
            access = parseInt(localStorage.getItem('access'));
        };
        
        return;
    }

    else {
        stayStatus = 0;
        accountStatus = 0;
        access = 0;
        localStorage.setItem('stayStatus', JSON.stringify(stayStatus));
        localStorage.setItem('status', JSON.stringify(accountStatus));
        localStorage.setItem('access', JSON.stringify(access));
    };
} () );

$(document).ready(function() {
    if (Boolean(parseInt(localStorage.getItem('status'))) === true && Boolean(parseInt(localStorage.getItem('stayStatus'))) === true) {
        $('#account').attr('id', 'signed').find('.main__span').text('Авторизовано');
    }

    else {
        localStorage.removeItem('auth');
        return;
    };

    authSession = localStorage.getItem('auth');
});

$(window).on('storage', function() {
    switch (true) {
        case (localStorage.getItem('status') !== accountStatus):
            localStorage.setItem('status', JSON.stringify(accountStatus));

        case (localStorage.getItem('stayStatus') !== stayStatus):
            localStorage.setItem('stayStatus', JSON.stringify(stayStatus));

        case (localStorage.getItem('access') !== access):
            localStorage.setItem('access', JSON.stringify(access));

        case (localStorage.getItem('auth') !== authSession):
            if (localStorage.getItem('auth') !== null) {
                localStorage.setItem('auth', authSession);
            }

            else {
                if (authSession !== undefined) {
                    localStorage.setItem('auth', authSession);
                }

                else {
                    return;
                };
            };
    };
});

$(function() {
    $('.mainSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 560,
            settings: {
                swipe: false,
                touchMove: false,
                autoplaySpeed: 6500,
                speed: 750
            },
        }],
    });

    $('.main__item').each(function() {
        $(this).on('click', function() {
            $(this).addClass('main__item_active').siblings().removeClass('main__item_active');
            $('.full-screen-substrate').removeClass('full-screen-substrate_notActive').addClass('full-screen-substrate_active');

            checkItemId($(this).attr('id'));
            
            setTimeout(function() {
                $('.content').css({
                    'animation': 'showContent 1s forwards',
                    'overflow-y': 'overlay'
                });
            }, 530);
        });
    });
});

function checkItemId(itemId) {
    switch (itemId) {
        case "aboutUs":
            renderAboutUsContent();
            break;

        case "cars":
            renderCarsContent();
            break;

        case "account":
            renderAccountContent();
            break;

        case "signed":
            renderAuthContent();
            break;

        case "support":
            renderSupportContent();
            break;
    };
};

function createAboutUsContent() {
    return `<div class="content__submain">
                <div class="content__caption">
                    <div class="content__circle">
                        <i class="fas fa-chevron-down content__arrow"></i>
                    </div>
                    <h2 class="content__title">Про нас</h2>
                </div>
                <p class="content__text">Автосалон YAROKI - швидко розвивающийся та набирающий популярність автосалон, що з'явився у 2019 році, засновником якого є молодий спеціаліст у сфері продаж. Завдяки численним старанням нашого засновника та персоналу, наш автосалон незабаром став одним з найпопулярніших підприємництв України. Ми усіляко підтримуємо та розвиваємо наш автосалон, розширюючи його сферу діяльності і покращуючи якість кожного замовлення.</p>
                <h2 class="content__h2">Чому наш автосалон?</h2>
                <span class="content__span">Гарантовані особливості</span>
                <div class="content__features">
                    <div class="content__feature">
                        <i class="fas fa-clipboard-list content__icon"></i>
                        <span class="content__note">Великий асортимент</span>
                    </div>
                    <div class="content__feature">
                        <i class="fas fa-hand-holding-usd content__icon"></i>
                        <span class="content__note">Доступні ціни</span>
                    </div>
                    <div class="content__feature">
                        <i class="fas fa-hands content__icon"></i>
                        <span class="content__note">Надійна страховка</span>
                    </div>
                </div>
                <h2 class="content__h2">Які марки авто ми продаємо?</h2>
                <span class="content__span">Перегляньте усі марки нижче</span>
            </div>
            <div class="content__brands">
                <div class="slider">
                    <div class="slider__item">
                        <img src="./img/Cars-bgImages/bgImg-Mazda.jpg" alt="Марка автомобілю" class="slider__img">
                        <div class="slider__content">
                            <img src="./img/Cars-brands/mazda.png" alt="Логотип автомобілю" class="slider__brand">
                            <div class="slider__lines">
                                <div class="slider__line"></div>
                            </div>
                            <div class="slider__btn">
                                <button type="button" class="slider__button">Перейти до каталогу</button>
                            </div>
                        </div>
                    </div>
                    <div class="slider__item">
                        <img src="./img/Cars-bgImages/bgImg-Cadillac.jpg" alt="Марка автомобілю" class="slider__img">
                        <div class="slider__content">
                            <img src="./img/Cars-brands/cadillac.png" alt="Логотип автомобілю" class="slider__brand">
                            <div class="slider__lines">
                                <div class="slider__line"></div>
                            </div>
                            <div class="slider__btn">
                                <button type="button" class="slider__button">Перейти до каталогу</button>
                            </div>
                        </div>
                    </div>
                    <div class="slider__item">
                        <img src="./img/Cars-bgImages/bgImg-Audi.jpg" alt="Марка автомобілю" class="slider__img">
                        <div class="slider__content">
                            <img src="./img/Cars-brands/audi.png" alt="Логотип автомобілю" class="slider__brand">
                            <div class="slider__lines">
                                <div class="slider__line"></div>
                            </div>
                            <div class="slider__btn">
                                <button type="button" class="slider__button">Перейти до каталогу</button>
                            </div>
                        </div>
                    </div>
                <div class="slider__item">
                    <img src="./img/Cars-bgImages/bgImg-Renault.jpg" alt="Марка автомобілю" class="slider__img">
                    <div class="slider__content">
                        <img src="./img/Cars-brands/renault.png" alt="Логотип автомобілю" class="slider__brand">
                        <div class="slider__lines">
                            <div class="slider__line"></div>
                        </div>
                        <div class="slider__btn">
                            <button type="button" class="slider__button">Перейти до каталогу</button>
                        </div>
                    </div>
                </div>
                <div class="slider__item">
                    <img src="./img/Cars-bgImages/bgImg-Nissan.jpg" alt="Марка автомобілю" class="slider__img">
                    <div class="slider__content">
                        <img src="./img/Cars-brands/nissan.png" alt="Логотип автомобілю" class="slider__brand">
                        <div class="slider__lines">
                            <div class="slider__line"></div>
                        </div>
                        <div class="slider__btn">
                            <button type="button" class="slider__button">Перейти до каталогу</button>
                        </div>
                    </div>
                </div>
                <div class="slider__item">
                    <img src="./img/Cars-bgImages/bgImg-Mercedes.jpg" alt="Марка автомобілю" class="slider__img">
                    <div class="slider__content">
                        <img src="./img/Cars-brands/mers.png" alt="Логотип автомобілю" class="slider__brand">
                        <div class="slider__lines">
                            <div class="slider__line"></div>
                        </div>
                        <div class="slider__btn">
                            <button type="button" class="slider__button">Перейти до каталогу</button>
                        </div>
                    </div>
                </div>
                <div class="slider__item">
                    <img src="./img/Cars-bgImages/bgImg-Bmw.jpg" alt="Марка автомобілю" class="slider__img">
                    <div class="slider__content">
                        <img src="./img/Cars-brands/bmw.png" alt="Логотип автомобілю" class="slider__brand">
                        <div class="slider__lines">
                            <div class="slider__line"></div>
                        </div>
                        <div class="slider__btn">
                            <button type="button" class="slider__button">Перейти до каталогу</button>
                        </div>
                    </div>
                </div>
                <div class="slider__item">
                    <img src="./img/Cars-bgImages/bgImg-Aurus.jpg" alt="Марка автомобілю" class="slider__img">
                    <div class="slider__content">
                        <img src="./img/Cars-brands/aurus.png" alt="Логотип автомобілю" class="slider__brand">
                        <div class="slider__lines">
                            <div class="slider__line"></div>
                        </div>
                        <div class="slider__btn">
                            <button type="button" class="slider__button">Перейти до каталогу</button>
                        </div>
                    </div>
                </div>
                <div class="slider__item">
                    <img src="./img/Cars-bgImages/bgImg-Volkswagen.jpg" alt="Марка автомобілю" class="slider__img">
                    <div class="slider__content">
                        <img src="./img/Cars-brands/volkswagen.png" alt="Логотип автомобілю" class="slider__brand">
                        <div class="slider__lines">
                            <div class="slider__line"></div>
                        </div>
                        <div class="slider__btn">
                            <button type="button" class="slider__button">Перейти до каталогу</button>
                        </div>
                    </div>
                </div>
                <div class="slider__item">
                    <img src="./img/Cars-bgImages/bgImg-Ford.jpg" alt="Марка автомобілю" class="slider__img">
                    <div class="slider__content">
                        <img src="./img/Cars-brands/ford.png" alt="Логотип автомобілю" class="slider__brand">
                        <div class="slider__lines">
                            <div class="slider__line"></div>
                        </div>
                        <div class="slider__btn">
                            <button type="button" class="slider__button">Перейти до каталогу</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
};

function createSupportContent() {
    return `<div class="content__submain">
                <div class="content__caption">
                    <div class="content__circle">
                        <i class="fas fa-chevron-down content__arrow"></i>
                    </div>
                    <h2 class="content__title">Підтримка<h2>
                </div>
                <h2 class="content__h2">Поширені запитання</h2>
                <div class="content__accordeons">
                    <div class="content__accordeon">
                        <h3 class="content__question">Як здійснити замовлення авто?</h3>
                        <ul class="content__list">
                            <li class="content__item">Перейдіть до вкладки "Автомобілі", оберіть потрібне вам авто та натисніть кнопку "Оформити замовлення".</li>
                        </ul>
                    </div>
                    <div class="content__accordeon">
                        <h3 class="content__question">Чи надаєте ви можливість проведення тест-драйву авто?</h3>
                        <ul class="content__list">
                            <li class="content__item">Так. Вагаєтеся у виборі авто? Тоді сміливо записуйтеся на його тест-драйв! Усе це ви можете здійснити на вкладці "Автомобілі", у розділі обраного вами автомобілю.</li>
                        </ul>
                    </div>
                    <div class="content__accordeon">
                        <h3 class="content__question">Чи надає ваш автосалон гарантію повернення автомобілю?</h3>
                        <ul class="content__list">
                            <li class="content__item">Так, звісно. Але тривалість гарантії різна в залежності від моделі авто.</li>
                        </ul>
                    </div>
                    <div class="content__accordeon">
                        <h3 class="content__question">Де знаходиться автосалон YAROKI?</h3>
                        <ul class="content__list">
                            <li class="content__item">
                            Наш автосалон знаходиться за адресою: Дніпро, Чигиринська 2б. 
                            <br> 
                            Телефон: <a href="tel: +380661860418" style="color: white; text-decoration: underline; font-size: 16px">380 66 186 04 18</a>
                                <div class="content__map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d661.4144405889302!2d34.95307602922555!3d48.46309568799289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3ea48773529%3A0x3452261034d2119c!2z0YPQuy4g0KfQuNCz0LjRgNC40L3RgdC60LDRjywg0JTQvdC40L_RgNC-LCDQlNC90LXQv9GA0L7Qv9C10YLRgNC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNDkwMDA!5e0!3m2!1sru!2sua!4v1625605094088!5m2!1sru!2sua" width="620" height="300" style="border:0; width: 100%;" allowfullscreen="" loading="lazy"></iframe>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <h2 class="content__h2">У вас є інше запитання?</h2>
                <span class="content__span">Напишіть нам:</span>
                <form class="content__form">
                    <div class="content__inputs">
                        <input type="text" class="content__input" placeholder="Ім'я*" title="Ваше ім'я" name="username" id="username">
                    </div>
                    <div class="content__inputs">
                        <input type="email" class="content__input" placeholder="E-mail*" title="Ваш e-mail" name="email" id="email">
                    </div>
                    <div class="content__inputs">
                        <input type="text" class="content__input" placeholder="Тема*" title="Тема запитання" name="subject" id="subject">
                    </div>
                    <div class="content__inputs">
                        <textarea cols="30" rows="5" placeholder="Ваше запитання*" class="content__input" title="Ваше запитання" name="question" id="question"></textarea>
                    </div>
                    <div class="content__btn">
                        <button type="submit" class="content__submit" id="sendQuestion">Надіслати запитання</button>
                        <div class="content__links">
                            <div class="content__link">
                                <a href="tg://resolve?domain=HIIROMAN" class="content__ref">
                                    <i class="fab fa-telegram-plane content__socialIcon"></i>
                                </a>
                            </div>
                            <div class="content__link">
                                <a href="https://www.instagram.com/lilyaroki/" class="content__ref">
                                    <i class="fab fa-instagram content__socialIcon"></i>
                                </a>
                            </div>
                            <div class="content__link">
                                <a href="viber://chat?number=+380661860418" class="content__ref">
                                    <i class="fab fa-viber content__socialIcon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>`;
};

function setContentBtnCloseListener() {
    $('.content__circle').on('click', function() {
        $('.full-screen-substrate').removeClass('full-screen-substrate_active').addClass('full-screen-substrate_notActive');
        
        switch (true) {
            case ($('.content').hasClass('aboutUs')):
                $('.content').removeClass('aboutUs');

                break;

            case ($('.content').hasClass('support')):
                $('.content').removeClass('support');
            
                if ($('.content__message').length) {
                    $('.content__message').remove();
                };

                break;

            case ($('.content').hasClass('account')):
                $('.content').removeClass('account');

                if ($('.content__message').length) {
                    $('.content__message').remove();
                };

                break;

            case ($('.content').hasClass('signed')):
                $('.content').removeClass('signed');

                if ($('.content__message').length) {
                    $('.content__message').remove();
                };

                break;

            case ($('.content').hasClass('cars')):
                $('.content').removeClass('cars');

                if ($('.content__message').length) {
                    $('.content__message').remove();
                };

                createButtonUp();

                break;
        };

        $('.content').css({
            'animation': 'hideContent 1s forwards',
            'overflow-y': 'hidden'
        });

        $('.main__item').removeClass('main__item_active');
    });
};

function renderAboutUsContent() {
    $('.content').html(createAboutUsContent).removeAttr('class').addClass('content aboutUs');

    $('.content__submain').hide().fadeIn(500);

    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [{
            breakpoint: 770,
            settings: {
                dots: false,
                autoplaySpeed: 6500,
                speed: 950
            },
        }],
    });

    $('.slider__button').each(function() {
        $(this).on('click', function() {
            $('.full-screen-substrate').removeClass('full-screen-substrate_active').addClass('full-screen-substrate_notActive');
            
            $('.content').css('animation', 'hideContent 1s forwards').removeClass('aboutUs');
          
            $('.main__item').removeClass('main__item_active');
           
            setTimeout(function() {
                $('#cars').addClass('main__item_active');
            }, 850);

            setTimeout(function() {
                $('.content').css('animation', 'showContent 1s forwards');

                renderCarsContent();

                let carsContent = document.querySelector('.cars');

                carsContent.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });

            }, 1150);
        });
    });

    setContentBtnCloseListener();
};

function renderSupportContent() {
    $('.content').html(createSupportContent).removeAttr('class').addClass('content support');

    $('.content__submain').hide().fadeIn(500);

    setContentBtnCloseListener();

    $('.content__list').hide();
    $('.content__question').on('click', function() {
        $(this).toggleClass('content__question_active').next().slideToggle(500);
    });

    sendQuestion();
};

function sendQuestion() {
    let $inputUsername = $('#username'),
        $inputEmail = $('#email'),
        $inputSubject = $('#subject'),
        $inputQuestion = $('#question');
        
    $('#sendQuestion').on('click', function(event) {
        event.preventDefault(); 
    
        validateUsername($inputUsername.val(), $inputUsername);

        validateEmail($inputEmail.val(), $inputEmail);

        validateSubject($inputSubject.val(), $inputSubject);

        validateQuestion($inputQuestion.val(), $inputQuestion);

        if ($inputUsername.attr('title') === 'Все вірно!' && $inputEmail.attr('title') === 'Все вірно!' && $inputSubject.attr('title') === 'Все вірно!' && $inputQuestion.attr('title') === 'Все вірно!') {
            $.ajax({
                type: 'POST',
                url: '../php/sendQuestion.php',
                data: $('.content__form').serialize(),
    
                success(answer) {
                    if (Boolean(parseInt(answer)) === true) {
                        $('.content__form')[0].reset();
                        
                        $('.content__input').css('background-color', '#303030');

                        $inputUsername.attr('title', "Ваше ім'я");
                        $inputEmail.attr('title', 'Ваш e-mail');
                        $inputSubject.attr('title', 'Тема запитання');
                        $inputQuestion.attr('title', 'Ваше запитання');

                        let $successMsg = $('<div class="content__message"><div class="content__triangle"></div> <span class="content__extraSpan">Ваше запитання відправлено.</span> <i class="fas fa-times content__arrow content__arrow_style"></i</div>');
    
                        if ($('.content__message').length) {
                            $('.content__message').remove();
                        };
    
                        $('body').prepend($successMsg);
                        
                        $('.content__arrow_style').on('click', function() {
                            $successMsg.fadeOut(500);
                        });
    
                        $successMsg.fadeIn(500);
                    }
    
                    else {
                        let $errorMsg = $(`<div class="content__message"><div class="content__triangle"></div> <span class="content__extraSpan">Помилка. Ваше запитання не було відправлено.</span> <i class="fas fa-times content__arrow content__arrow_style"></i</div>`);
    
                        if ($('.content__message').length) {
                            $('.content__message').remove();
                        };
    
                        $('body').prepend($errorMsg);
    
                        $('.content__arrow_style').on('click', function() {
                            $errorMsg.fadeOut(500);
                        });
    
                        $errorMsg.fadeIn(500);
                    };
                },
    
                error() {
                    alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
                    location.reload();
                },
            });
        }

        else {
            return;
        };
    });
};

function validateUsername(value, input) {
    value = value.replace(/\s+/g, '');

    switch (true) {
        case (!value.trim() === true):
            input.attr('title', "Ім'я не може бути порожнім!");
            input.css('background-color', 'red');

            break;

        case (value.length < 2):
            input.attr('title', "Ім'я занадто коротке!");
            input.css('background-color', 'red');

            break;

        case (/[~`!?@_"'#$№;:.,%^&*/()+=|{}[<>\]-]/g.test(value) === true):
            input.attr('title', "Ім'я не повинно мати спеціальних знаків!");
            input.css('background-color', 'red');

            break;

        case (/[0-9]/g.test(value) === true):
            input.attr('title', "Ім'я не повинно мати цифр!");
            input.css('background-color', 'red');
            
            break;

        case (value.charAt(0) === value.charAt(0).toLowerCase()):
            input.attr('title', "Ім'я повинно починатися з великої літери!");
            input.css('background-color', 'red');

            break;

        default:
            input.attr('title', "Все вірно!");
            input.css('background-color', 'limegreen');
          
            break;
        };
};

function validateEmail(value, input) {
    value = value.replace(/\s+/g, '');

    if (emailRegexp(value) === false) {
        input.attr('title', 'Невірний e-mail!');
        input.css('background-color', 'red');
    }

    else {
        input.attr('title', 'Все вірно!');
        input.css('background-color', 'limegreen');
    };
};

function emailRegexp(value) {
    let regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return regexp.test(value);
};

function checkEmailAvailability(value, data, input) {
    let availability = true;

    value = value.replace(/\s+/g, '');

    data.forEach(element => {
        if (value === element.poshta) {
            input.attr('title', 'На даний e-mail вже зареєстровано аккаунт!');
            input.css('background-color', 'red');
            
            availability = false;
        }

        else {
            return;
        };
    });

    if (emailRegexp(value) === false) {
        input.attr('title', 'Невірний e-mail!');
        input.css('background-color', 'red');
    }

    else {
        if (availability === true) {
            input.attr('title', 'Все вірно!');
            input.css('background-color', 'limegreen');
        }

        else {
            return;
        };
    };
};

function validateSubject(value, input) {
    value = value.replace(/\s+/g, '');

    switch (true) {
        case (!value.trim() === true):
            input.attr('title', "Тема не може бути порожня!");
            input.css('background-color', 'red');

            break;

        case (value.length < 2):
            input.attr('title', "Тема занадто коротка!");
            input.css('background-color', 'red');

            break;

        default:
            input.attr('title', "Все вірно!");
            input.css('background-color', 'limegreen');
              
            break;
    };
};

function validateQuestion(value, input) {
    value = value.replace(/\s+/g, '');

    switch (true) {
        case (!value.trim() === true):
            input.attr('title', "Запитання не може бути порожнім!");
            input.css('background-color', 'red');

            break;

        case (value.length < 2):
            input.attr('title', "Запитання занадто коротке!");
            input.css('background-color', 'red');

            break;

        default:
            input.attr('title', "Все вірно!");
            input.css('background-color', 'limegreen');
              
            break;
    };
};

function createCarsContent() {
    return `<div class="content__submain content__submain_increasedWidth">
                <div class="content__caption">
                    <div class="content__circle">
                        <i class="fas fa-chevron-down content__arrow"></i>
                    </div>
                    <h2 class="content__title">Автомобілі</h2>
                </div>
                <div class="content__catalog">
                    <img src="./img/Cars-brands-mini/mazda-mini.png" class="content__brand" alt="Логотип автомобілю">
                    <div class="content__cars" id="mazda"></div>
                    <img src="./img/Cars-brands-mini/cadillac-mini.png" class="content__brand" alt="Логотип автомобілю">
                    <div class="content__cars" id="cadillac"></div>
                    <img src="./img/Cars-brands-mini/audi-mini.png" class="content__brand" alt="Логотип автомобілю">
                    <div class="content__cars" id="audi"></div>
                    <img src="./img/Cars-brands-mini/renault-mini.png" class="content__brand" alt="Логотип автомобілю">
                    <div class="content__cars" id="renault"></div>
                    <img src="./img/Cars-brands-mini/nissan-mini.png" class="content__brand" alt="Логотип автомобілю">
                    <div class="content__cars" id="nissan"></div>
                    <img src="./img/Cars-brands-mini/mercedes-mini.png" class="content__brand" alt="Логотип автомобілю">
                    <div class="content__cars" id="mercedes"></div>
                    <img src="./img/Cars-brands-mini/bmw-mini.png" class="content__brand" alt="Логотип автомобілю">
                    <div class="content__cars" id="bmw"></div>
                    <img src="./img/Cars-brands-mini/aurus-mini.png" class="content__brand" alt="Логотип автомобілю">
                    <div class="content__cars" id="aurus"></div>
                    <img src="./img/Cars-brands-mini/volkswagen-mini.png" class="content__brand" alt="Логотип автомобілю">
                    <div class="content__cars" id="volkswagen"></div>
                    <img src="./img/Cars-brands-mini/ford-mini.png" class="content__brand" alt="Логотип автомобілю">
                    <div class="content__cars" id="ford"></div>
                </div>
            </div>
            <div class="content__modalCover" id="modalCover">
                <div class="content__modal">
                    <div class="content__modalTitle">
                        <h3 class="content__modalName"></h3>
                        <h3 class="content__modalModel"></h3>
                    </div>
                    <img src="" alt="Автомобиль" class="content__modalImg">
                    <p class="content__modalPrice"><span class="content__modalCost">Ціна від:</span> <span class="content__modalValue"></span> <select class="content__modalSelect"><option value="ГРН" selected>ГРН</option><option value="USD">USD</option><option value="EUR">EUR</option></select></p>
                    <div class="content__modalLine"></div>
                    <div class="content__modalAccordeon">
                        <h4 class="content__modalChars">Характеристики</h4>
                        <ul class="content__modalList">
                            <li class="content__modalItem">
                                <div class="content__modalExtra">
                                    <p class="content__modalChar">Макс. швидкість: <span class="content__modalSpan speed"></span> км / ч</p>
                                    <p class="content__modalChar">Розгін до 100 км / ч: <span class="content__modalSpan racing"></span> с.</p>
                                    <p class="content__modalChar">Витрати палива: <span class="content__modalSpan waste"></span> л.</p>
                                    <p class="content__modalChar">Об'єм баку: <span class="content__modalSpan tankVal"></span> л.</p>
                                    <p class="content__modalChar">Об'єм двигуну: <span class="content__modalSpan engineVal"></span> см<sup>3</sup></p>
                                </div>
                                <div class="content__modalExtra">
                                    <p class="content__modalChar">Кількість місць: <span class="content__modalSpan seats"></span></p>
                                    <p class="content__modalChar">Колір: <span class="content__modalSpan color"></span></p>
                                    <p class="content__modalChar">Країна: <span class="content__modalSpan country"></span></p>
                                    <p class="content__modalChar">Гарантія: <span class="content__modalSpan garantee"></span></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="content__modalButtons">
                        <button class="content__modalBtn" id="testDrive">Записатися на тест-драйв</button>
                        <button class="content__modalBtn content__modalBtn_style" id="makeOffer">Оформити замовлення</button>
                    </div>
                    <div class="content__modalCircle" id="modalExit"><i class="fas fa-times content__arrow"></i></div>
                </div>
            </div>`;
};

function renderCarsContent() {
    let carsData;

    $('.content').html(createCarsContent).removeAttr('class').addClass('content cars');

    $('.content__submain').hide().fadeIn(500);

    $.ajax({
        type: 'GET',
        url: './php/main.php',

        success(dbData) {
            carsData = JSON.parse(dbData);  

            createCatalogElements(carsData);
            
            let $elemsArray = $('.content__coverValue');

            $elemsArray.each(function() {
                let $elemPrice = $(this).text();
               
                $elemPrice = $elemPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

                $(this).text($elemPrice);
            });

            $('.content__modalList').hide();

            $('.content__modalChars').on('click', function() {
                $(this).toggleClass('content__modalChars_active').next().slideToggle(500);
            });

            carClick(carsData);

            setListenerToModalClose();
        },

        error() {
            alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
            location.reload();
        }
    });

    createButtonUp();
    
    setContentBtnCloseListener();
};

function createCatalogElements(data) {
    let $mazdaSection = $('#mazda'),
        $cadillacSection = $('#cadillac'),
        $audiSection = $('#audi'),
        $renaultSection = $('#renault'),
        $nissanSection = $('#nissan'),
        $mercedesSection = $('#mercedes'),
        $bmwSection = $('#bmw'),
        $aurusSection = $('#aurus'),
        $volkswagenSection = $('#volkswagen'),
        $fordSection = $('#ford');

    data.forEach(element => {
        if (element.nazva === 'Mazda') {
            let $carItem = $(`<div class="content__car" data-id="${element.id}"><img src="${element.vyglyad}" alt="Автомобиль" class="content__carImg"><h3 class="content__carModel">${element.model}</h3><div class="content__cover"><p class="content__coverModel">${element.model}</p><p class="content__coverPrice"><span class="content__coverSpan">Ціна від:</span> <span class="content__coverValue">${element.cina}</span> грн</p><div class="content__coverLine"></div><div class="content__coverInfo"><p class="content__coverSpeed"><span class="content__coverSpan">Макс. швидкість:</span><br> ${element.maks_shvydkist} км / ч</p><p class="content__coverWaste"><span class="content__coverSpan">Витрати від:</span><br> ${element.vytraty_palyva} л. / 100 км</p></div></div>`);

            $mazdaSection.append($carItem);
        }

        if (element.nazva === 'Cadillac') {
            let $carItem = $(`<div class="content__car" data-id="${element.id}"><img src="${element.vyglyad}" alt="Автомобиль" class="content__carImg"><h3 class="content__carModel">${element.model}</h3><div class="content__cover"><p class="content__coverModel">${element.model}</p><p class="content__coverPrice"><span class="content__coverSpan">Ціна від:</span> <span class="content__coverValue">${element.cina}</span> грн</p><div class="content__coverLine"></div><div class="content__coverInfo"><p class="content__coverSpeed"><span class="content__coverSpan">Макс. швидкість:</span><br> ${element.maks_shvydkist} км / ч</p><p class="content__coverWaste"><span class="content__coverSpan">Витрати від:</span><br> ${element.vytraty_palyva} л. / 100 км</p></div></div>`);

            $cadillacSection.append($carItem);
        }

        if (element.nazva === 'Audi') {
            let $carItem = $(`<div class="content__car" data-id="${element.id}"><img src="${element.vyglyad}" alt="Автомобиль" class="content__carImg"><h3 class="content__carModel">${element.model}</h3><div class="content__cover"><p class="content__coverModel">${element.model}</p><p class="content__coverPrice"><span class="content__coverSpan">Ціна від:</span> <span class="content__coverValue">${element.cina}</span> грн</p><div class="content__coverLine"></div><div class="content__coverInfo"><p class="content__coverSpeed"><span class="content__coverSpan">Макс. швидкість:</span><br> ${element.maks_shvydkist} км / ч</p><p class="content__coverWaste"><span class="content__coverSpan">Витрати від:</span><br> ${element.vytraty_palyva} л. / 100 км</p></div></div>`);

            $audiSection.append($carItem);
        }

        if (element.nazva === 'Renault') {
            let $carItem = $(`<div class="content__car" data-id="${element.id}"><img src="${element.vyglyad}" alt="Автомобиль" class="content__carImg"><h3 class="content__carModel">${element.model}</h3><div class="content__cover"><p class="content__coverModel">${element.model}</p><p class="content__coverPrice"><span class="content__coverSpan">Ціна від:</span> <span class="content__coverValue">${element.cina}</span> грн</p><div class="content__coverLine"></div><div class="content__coverInfo"><p class="content__coverSpeed"><span class="content__coverSpan">Макс. швидкість:</span><br> ${element.maks_shvydkist} км / ч</p><p class="content__coverWaste"><span class="content__coverSpan">Витрати від:</span><br> ${element.vytraty_palyva} л. / 100 км</p></div></div>`);

            $renaultSection.append($carItem);
        }

        if (element.nazva === 'Nissan') {
            let $carItem = $(`<div class="content__car" data-id="${element.id}"><img src="${element.vyglyad}" alt="Автомобиль" class="content__carImg"><h3 class="content__carModel">${element.model}</h3><div class="content__cover"><p class="content__coverModel">${element.model}</p><p class="content__coverPrice"><span class="content__coverSpan">Ціна від:</span> <span class="content__coverValue">${element.cina}</span> грн</p><div class="content__coverLine"></div><div class="content__coverInfo"><p class="content__coverSpeed"><span class="content__coverSpan">Макс. швидкість:</span><br> ${element.maks_shvydkist} км / ч</p><p class="content__coverWaste"><span class="content__coverSpan">Витрати від:</span><br> ${element.vytraty_palyva} л. / 100 км</p></div></div>`);

            $nissanSection.append($carItem);
        }

        if (element.nazva === 'Mercedes') {
            let $carItem = $(`<div class="content__car" data-id="${element.id}"><img src="${element.vyglyad}" alt="Автомобиль" class="content__carImg"><h3 class="content__carModel">${element.model}</h3><div class="content__cover"><p class="content__coverModel">${element.model}</p><p class="content__coverPrice"><span class="content__coverSpan">Ціна від:</span> <span class="content__coverValue">${element.cina}</span> грн</p><div class="content__coverLine"></div><div class="content__coverInfo"><p class="content__coverSpeed"><span class="content__coverSpan">Макс. швидкість:</span><br> ${element.maks_shvydkist} км / ч</p><p class="content__coverWaste"><span class="content__coverSpan">Витрати від:</span><br> ${element.vytraty_palyva} л. / 100 км</p></div></div>`);

            $mercedesSection.append($carItem);
        }

        if (element.nazva === 'BMW') {
            let $carItem = $(`<div class="content__car" data-id="${element.id}"><img src="${element.vyglyad}" alt="Автомобиль" class="content__carImg"><h3 class="content__carModel">${element.model}</h3><div class="content__cover"><p class="content__coverModel">${element.model}</p><p class="content__coverPrice"><span class="content__coverSpan">Ціна від:</span> <span class="content__coverValue">${element.cina}</span> грн</p><div class="content__coverLine"></div><div class="content__coverInfo"><p class="content__coverSpeed"><span class="content__coverSpan">Макс. швидкість:</span><br> ${element.maks_shvydkist} км / ч</p><p class="content__coverWaste"><span class="content__coverSpan">Витрати від:</span><br> ${element.vytraty_palyva} л. / 100 км</p></div></div>`);

            $bmwSection.append($carItem);
        }

        if (element.nazva === 'Aurus') {
            let $carItem = $(`<div class="content__car" data-id="${element.id}"><img src="${element.vyglyad}" alt="Автомобиль" class="content__carImg"><h3 class="content__carModel">${element.model}</h3><div class="content__cover"><p class="content__coverModel">${element.model}</p><p class="content__coverPrice"><span class="content__coverSpan">Ціна від:</span> <span class="content__coverValue">${element.cina}</span> грн</p><div class="content__coverLine"></div><div class="content__coverInfo"><p class="content__coverSpeed"><span class="content__coverSpan">Макс. швидкість:</span><br> ${element.maks_shvydkist} км / ч</p><p class="content__coverWaste"><span class="content__coverSpan">Витрати від:</span><br> ${element.vytraty_palyva} л. / 100 км</p></div></div>`);

            $aurusSection.append($carItem);
        }

        if (element.nazva === 'Volkswagen') {
            let $carItem = $(`<div class="content__car" data-id="${element.id}"><img src="${element.vyglyad}" alt="Автомобиль" class="content__carImg"><h3 class="content__carModel">${element.model}</h3><div class="content__cover"><p class="content__coverModel">${element.model}</p><p class="content__coverPrice"><span class="content__coverSpan">Ціна від:</span> <span class="content__coverValue">${element.cina}</span> грн</p><div class="content__coverLine"></div><div class="content__coverInfo"><p class="content__coverSpeed"><span class="content__coverSpan">Макс. швидкість:</span><br> ${element.maks_shvydkist} км / ч</p><p class="content__coverWaste"><span class="content__coverSpan">Витрати від:</span><br> ${element.vytraty_palyva} л. / 100 км</p></div></div>`);

            $volkswagenSection.append($carItem);
        }

        if (element.nazva === 'Ford') {
            let $carItem = $(`<div class="content__car" data-id="${element.id}"><img src="${element.vyglyad}" alt="Автомобиль" class="content__carImg"><h3 class="content__carModel">${element.model}</h3><div class="content__cover"><p class="content__coverModel">${element.model}</p><p class="content__coverPrice"><span class="content__coverSpan">Ціна від:</span> <span class="content__coverValue">${element.cina}</span> грн</p><div class="content__coverLine"></div><div class="content__coverInfo"><p class="content__coverSpeed"><span class="content__coverSpan">Макс. швидкість:</span><br> ${element.maks_shvydkist} км / ч</p><p class="content__coverWaste"><span class="content__coverSpan">Витрати від:</span><br> ${element.vytraty_palyva} л. / 100 км</p></div></div>`);

            $fordSection.append($carItem);
        };
    });
};

function createButtonUp() {
    if ($('.content').hasClass('cars')) {
        let $buttonUp = $('<div class="buttonUp"><i class="fas fa-chevron-up content__arrow"></i></div>'),
            carsContent = document.querySelector('.cars');
        
        $('body').prepend($buttonUp);

        $buttonUp.hide();

        $buttonUp.on('click', () => {
            carsContent.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        carsContent.addEventListener('scroll', renderButtonUp);
    }

    else {
        $('.buttonUp').remove();
    };
};

function renderButtonUp() {
    if ($('.cars').scrollTop() > $('.cars').height()) {
        $('.buttonUp').fadeIn(500);
    }

    else {
        $('.buttonUp').fadeOut(500);
    };
}; 

function carClick(data) {
    $('.content__car').each(function() {
        $(this).on('click', function() {
            renderClickedCar($(this).attr('data-id'), data);

            if ($('.content__message').length) {
                $('.content__message').remove();
            };

            $('.content').css({
                'overflow-y': 'hidden',
                'animation': 'none',
                'visibility': 'visible',
                'transform': 'none'
            });
        
            setTimeout(function() {
                $('.content__modal').removeClass('content__modal_notActive').addClass('content__modal_active');
            }, 550);

            $('.content__modalCover').removeClass('content__modalCover_notActive').addClass('content__modalCover_active');
            
            if ($('.cars').scrollTop() > $('.cars').height()) {
                $('.buttonUp').fadeOut(500);
            }

            else {
                return;
            };
        });
    });
};

function renderClickedCar(carId, data) {
    data.forEach(element => {
        if (carId === element.id) {
            $('.content__modalPrice').attr('data-price', element.cina);
            $('.content__modalName').text(element.nazva);
            $('.content__modalModel').text(element.model);
            $('.content__modalImg').attr('src', element.vyglyad);
            $('.content__modalValue').text(element.cina);
            $('.speed').text(element.maks_shvydkist);
            $('.racing').text(element.rozgin);
            $('.waste').text(element.vytraty_palyva);
            $('.tankVal').text(element.obyem_baku);
            $('.engineVal').text(element.obyem_dvygunu);
            $('.seats').text(element.kilkist_mist);
            $('.color').text(element.kolir);
            $('.country').text(element.krayina);
            $('.garantee').text(element.garantiya);
        }

        else {
            return;
        };
    });

    setListenerToTestDrive(carId, data);

    setListenerToMakeOffer(carId, data);

    $('.content__modalValue').text($('.content__modalValue').text().toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 '));

    $.ajax({
        type: 'GET',
        url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',

        success(exchangeRatesData) {
            convertCurrency(exchangeRatesData);
        },

        error() {
            alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
            location.reload();
        }
    });
};

function createTestDriveContent() {
    return `<div class="content__modalAccountSubmain content__modalAccountSubmain_style">
                <h3 class="content__modalAccountTitle">Запис на тест-драйв авто</h3>
                <p class="content__modalAccountCaption">Укажіть свій номер телефону для того, щоб наш асистент мог зв'язатися з вами.</p>
                <form class="content__modalAccountForm">
                    <div class="content__modalAccountInputs">
                        <input type="tel" class="content__modalAccountInput" title="Ваш номер телефону" name="tel" placeholder="Ваш номер телефону" id="tel" autofocus>
                    </div>
                    <button type="submit" class="content__modalAccountSubmit" id="acceptTel">Підтвердити</button>
                </form>
                <div class="content__modalCircle" id="modalBack"><i class="fas fa-arrow-left content__back"></i></div>
            </div>`;
};

function createMakeOfferContent() {
    return `<div class="content__modalAccountSubmain content__modalAccountSubmain_style">
                <h3 class="content__modalAccountTitle">Оформлення замовлення авто</h3>
                <p class="content__modalAccountCaption">Укажіть свій номер телефону для того, щоб наш асистент мог зв'язатися з вами.</p>
                <form class="content__modalAccountForm">
                    <div class="content__modalAccountInputs">
                        <input type="tel" class="content__modalAccountInput" title="Ваш номер телефону" name="tel" placeholder="Ваш номер телефону" id="tel" autofocus>
                    </div>
                    <button type="submit" class="content__modalAccountSubmit" id="acceptTel">Підтвердити</button>
                </form>
                <div class="content__modalCircle" id="modalBack"><i class="fas fa-arrow-left content__back"></i></div>
            </div>`;
};

function createClickedCarContentAgain() {
    return `<div class="content__modalAccountSubmain content__modalAccountSubmain_flex">
                <div class="content__modalTitle">
                    <h3 class="content__modalName"></h3>
                    <h3 class="content__modalModel"></h3>
                </div>
                <img src="" alt="Автомобиль" class="content__modalImg">
                <p class="content__modalPrice"><span class="content__modalCost">Ціна від:</span> <span class="content__modalValue"></span> <select class="content__modalSelect"><option value="ГРН" selected>ГРН</option><option value="USD">USD</option><option value="EUR">EUR</option></select></p>
                <div class="content__modalLine"></div>
                <div class="content__modalAccordeon">
                    <h4 class="content__modalChars">Характеристики</h4>
                    <ul class="content__modalList">
                        <li class="content__modalItem">
                            <div class="content__modalExtra">
                                <p class="content__modalChar">Макс. швидкість: <span class="content__modalSpan speed"></span> км / ч<p>
                                <p class="content__modalChar">Розгін до 100 км / ч: <span class="content__modalSpan racing"></span> с</p>
                                <p class="content__modalChar">Витрати палива: <span class="content__modalSpan waste"></span> л.</p>
                                <p class="content__modalChar">Об'єм баку: <span class="content__modalSpan tankVal"></span> л.</p>
                                <p class="content__modalChar">Об'єм двигуну: <span class="content__modalSpan engineVal"></span> см<sup>3</sup></p>
                            </div>
                            <div class="content__modalExtra">
                                <p class="content__modalChar">Кількість місць: <span class="content__modalSpan seats"></span></p>
                                <p class="content__modalChar">Колір: <span class="content__modalSpan color"></span></p>
                                <p class="content__modalChar">Країна: <span class="content__modalSpan country"></span></p>
                                <p class="content__modalChar">Гарантія: <span class="content__modalSpan garantee"></span></p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="content__modalButtons">
                    <button class="content__modalBtn" id="testDrive">Записатися на тест-драйв</button>
                    <button class="content__modalBtn content__modalBtn_style" id="makeOffer">Оформити замовлення</button>
                </div>
                <div class="content__modalCircle" id="modalExit"><i class="fas fa-times content__arrow"></i></div>
            </div>`;
};

function setListenerToTestDrive(carId, data) {
    $('#testDrive').on('click', function(event) {
        event.preventDefault();

        if (Boolean(parseInt(localStorage.getItem('access'))) === true) {
            $('.content__modal').html(createTestDriveContent).addClass('content__modal_style');

            $('.content__modalAccountSubmain').hide().fadeIn(500);

            testDrive(carId, data);
     
            setListenerToModalBack(carId, data);
        }

        else {
            alert('Для того, щоб записатися на тест-драйв, зареєструйтесь або увійдіть в аккаунт.');
        };
    });
};

function testDrive(carId, data) {
    $('#acceptTel').on('click', function(event) {
        event.preventDefault();

        validateTelephone($('#tel').val(), $('#tel'));

        if ($('#tel').attr('title') === 'Все вірно!') {
            let carInfo = `${data[carId - 1].nazva} ${data[carId - 1].model}`,
                carPrice = data[carId - 1].cina;
            
            $.ajax({
                type: 'POST',
                url: '../php/sendChoosedCarInfo.php',
                cache: false,
                data: {
                    testDrive: true,
                    telephone: $('#tel').val(),
                    car: carInfo,
                    price: carPrice
                },

                success(answer) {
                    if (Boolean(parseInt(answer)) === true) {
                        setTimeout(function() {
                            let $successMsg = $(`<div class="content__message"><div class="content__triangle"></div> <span class="content__extraSpan">Заява на тест-драйв авто прийнята. Чекайте на дзвінок нашого асистента.</span> <i class="fas fa-times content__arrow content__arrow_style"></i</div>`);

                            $('.content__modal').removeClass('content__modal_active').addClass('content__modal_notActive');

                            setTimeout(function() {
                                $('.content__modalCover').removeClass('content__modalCover_active').addClass('content__modalCover_notActive');
                            }, 550);

                            if ($('.cars').scrollTop() > $('.cars').height()) {
                                setTimeout(function() {
                                    $('.buttonUp').fadeIn(500);
                                }, 550);
                            };

                            setTimeout(function() {
                                $('.content__modal').html(createClickedCarContentAgain);

                                $('.content__modalList').hide();

                                $('.content__modalChars').on('click', function() {
                                    $(this).toggleClass('content__modalChars_active').next().slideToggle(500);
                                });

                                setListenerToModalClose();
                            }, 700);

                            $('.content').css('overflow-y', 'overlay');
                        
                            $('body').prepend($successMsg);

                            $('.content__arrow_style').on('click', function() {
                                $successMsg.fadeOut(500);
                            });

                            $successMsg.fadeIn(500);
                        }, 550);
                    }

                    else {
                        alert("Виникла помилка з'єднання. Будь-ласка, спробуйте ще раз.");
                        location.reload();
                    };
                },

                error() {
                    alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
                    location.reload();
                },
            });
        }

        else {
            return;
        };
    });
};

function setListenerToMakeOffer(carId, data) {
    $('#makeOffer').on('click', function(event) {
        event.preventDefault();

        if (Boolean(parseInt(localStorage.getItem('access'))) === true) {
            $('.content__modal').html(createMakeOfferContent).addClass('content__modal_style');

            $('.content__modalAccountSubmain').hide().fadeIn(500);

            makeOffer(carId, data);
     
            setListenerToModalBack(carId, data);
        }

        else {
            alert('Для того, щоб оформити замовлення, зареєструйтесь або увійдіть в аккаунт.');
        };
    });
};

function makeOffer(carId, data) {
    $('#acceptTel').on('click', function(event) {
        event.preventDefault();

        validateTelephone($('#tel').val(), $('#tel'));

        if ($('#tel').attr('title') === 'Все вірно!') {
            let carInfo = `${data[carId - 1].nazva} ${data[carId - 1].model}`,
                carPrice = data[carId - 1].cina;
            
            $.ajax({
                type: 'POST',
                url: '../php/sendChoosedCarInfo.php',
                cache: false,
                data: {
                    makeOffer: true,
                    telephone: $('#tel').val(),
                    car: carInfo,
                    price: carPrice
                },

                success(answer) {
                    if (Boolean(parseInt(answer)) === true) {
                        setTimeout(function() {
                            let $successMsg = $(`<div class="content__message"><div class="content__triangle"></div> <span class="content__extraSpan">Заява на оформлення авто прийнята. Чекайте на дзвінок нашого асистента.</span> <i class="fas fa-times content__arrow content__arrow_style"></i</div>`);

                            $('.content__modal').removeClass('content__modal_active').addClass('content__modal_notActive');

                            setTimeout(function() {
                                $('.content__modalCover').removeClass('content__modalCover_active').addClass('content__modalCover_notActive');
                            }, 550);

                            if ($('.cars').scrollTop() > $('.cars').height()) {
                                setTimeout(function() {
                                    $('.buttonUp').fadeIn(500);
                                }, 550);
                            };

                            setTimeout(function() {
                                $('.content__modal').html(createClickedCarContentAgain);

                                $('.content__modalList').hide();

                                $('.content__modalChars').on('click', function() {
                                    $(this).toggleClass('content__modalChars_active').next().slideToggle(500);
                                });

                                setListenerToModalClose();
                            }, 700);

                            $('.content').css('overflow-y', 'overlay');

                            $('body').prepend($successMsg);

                            $('.content__arrow_style').on('click', function() {
                                $successMsg.fadeOut(500);
                            });

                            $successMsg.fadeIn(500);
                        }, 550);
                    }

                    else {
                        alert("Виникла помилка з'єднання. Будь-ласка, спробуйте ще раз.");
                        location.reload();
                    };
                },

                error() {
                    alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
                    location.reload();
                },
            });
        }

        else {
            return;
        };
    });
};

function validateTelephone(value, input) {
    value = value.replace(/\s+/g, '');

    if (telRegexp(value) === false) {
        input.attr('title', 'Некоректний номер телефону!');
        input.css('background-color', 'red');
    }

    else {
        input.attr('title', 'Все вірно!');
        input.css('background-color', 'limegreen');
    };
};

function telRegexp(value) {
    let regexp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    
    return regexp.test(value);
};

function setListenerToModalBack(carId, data) {
    $('#modalBack').on('click', function() {
        $('.content__modal').html(createClickedCarContentAgain).removeClass('content__modal_style');

        $('.content__modalAccountSubmain').hide().fadeIn(500);

        $('.content__modalPrice').attr('data-price', data[carId - 1].cina);
        $('.content__modalName').text(data[carId - 1].nazva);
        $('.content__modalModel').text(data[carId - 1].model);
        $('.content__modalImg').attr('src', data[carId - 1].vyglyad);
        $('.content__modalValue').text(data[carId - 1].cina);
        $('.speed').text(data[carId - 1].maks_shvydkist);
        $('.racing').text(data[carId - 1].rozgin);
        $('.waste').text(data[carId - 1].vytraty_palyva);
        $('.tankVal').text(data[carId - 1].obyem_baku);
        $('.engineVal').text(data[carId - 1].obyem_dvygunu);
        $('.seats').text(data[carId - 1].kilkist_mist);
        $('.color').text(data[carId - 1].kolir);
        $('.country').text(data[carId - 1].krayina);
        $('.garantee').text(data[carId - 1].garantiya);

        $('.content__modalList').hide();

        $('.content__modalChars').on('click', function() {
            $(this).toggleClass('content__modalChars_active').next().slideToggle(500);
        });
      
        setListenerToTestDrive(carId, data);

        setListenerToMakeOffer(carId, data);
        
        setListenerToModalClose();

        $('.content__modalValue').text($('.content__modalValue').text().toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 '));

        $.ajax({
            type: 'GET',
            url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',

            success(exchangeRatesData) {
                convertCurrency(exchangeRatesData);
            },

            error() {
                alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
                location.reload();
            },
        });
    });
};

function convertCurrency(data) {
    let dollarRate,
        euroRate,
        $carPriceUAH = $('.content__modalPrice').attr('data-price'),
        convertedPrice;

    data.forEach(rate => {
        if (rate.ccy === 'USD' && rate.base_ccy === 'UAH') {
            dollarRate = parseFloat(rate.sale);
        }

        if (rate.ccy === 'EUR' && rate.base_ccy === 'UAH') {
            euroRate = parseFloat(rate.sale);
        };
    });

    $('.content__modalSelect').on('change', function() {
        let $currencyListValue = $('.content__modalSelect').val();
        
        switch ($currencyListValue) {
            case 'ГРН':
                $('.content__modalValue').text($carPriceUAH.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 '));    

                break;
        
            case 'USD':
                convertedPrice = Math.ceil($carPriceUAH / dollarRate);

                $('.content__modalValue').text(convertedPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 '));

                break;

            case 'EUR':
                convertedPrice = Math.ceil($carPriceUAH / euroRate);

                $('.content__modalValue').text(convertedPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 '));

                break;
        };
    });
};

function setListenerToModalClose() {
    $('#modalExit').on('click', function() {
        $('.content__modal').removeClass('content__modal_active').addClass('content__modal_notActive');

        $('.content__modalSelect').val('ГРН');
        
        setTimeout(function() {
            $('.content__modalCover').removeClass('content__modalCover_active').addClass('content__modalCover_notActive');
        }, 550);
        
        $('.content').css('overflow-y', 'overlay');

        if ($('.content__modalChars').hasClass('content__modalChars_active')) {
            setTimeout(function() {
                $('.content__modalChars').removeClass('content__modalChars_active');
                $('.content__modalList').hide();
            }, 700);
        }

        if ($('.cars').scrollTop() > $('.cars').height()) {
            setTimeout(function() {
                $('.buttonUp').fadeIn(500);
            }, 550);
        }

        else {
            return;
        };
    });
};

function createAccountContent() {
    return `<div class="content__submain">
                <div class="content__caption">
                    <div class="content__circle">
                        <i class="fas fa-chevron-down content__arrow"></i>
                    </div>
                    <h2 class="content__title">Аккаунт</h2>
                </div>
                <h2 class="content__h2">Вхід до аккаунту</h2>
                <form class="content__accountForm">
                    <div class="content__accountInputs">
                        <input type="text" class="content__accountInput" placeholder="Логін" title="Ваш логін" name="login" id="login">
                    </div>
                    <div class="content__accountInputs content__accountInputs_style">
                        <input type="password" class="content__accountInput passHidden" placeholder="Пароль" title="Ваш пароль" name="password" id="password">
                        <i class="fas fa-eye-slash content__accountEye"></i>
                    </div>
                    <div class="content__accountStay">
                        <div class="content__accountExtra">
                            <input type="checkbox" class="content__accountCheck" id="stay">
                            <label for="stay" class="content__accountLabel">Залишатися в аккаунті</label>
                        </div>
                        <span class="content__accountHelp" id="recovery">Забули логін чи пароль?</span>
                    </div>
                    <button type="submit" class="content__accountSubmit" name="signIn" id="signIn">Увійти в аккаунт <i class="fas fa-sign-in-alt class="content__accountIcon""></i></button>
                    <div class="content__accountBlock">
                        <button type="button" class="content__accountButton" id="signUp">Зареєструватися <i class="fas fa-user-plus content__accountUser"></i></button>
                    </div>
                </form>
            </div>
            <div class="content__modalCover" id="modalCover">
                <div class="content__modalAccount"></div>
            </div>`;
};

function renderAccountContent() {
    $('.content').html(createAccountContent).removeAttr('class').addClass('content account');

    $('.content__submain').hide().fadeIn(500);

    let $inputLogin = $('#login'),
        $inputPassword = $('#password');

    if (Boolean(parseInt(localStorage.getItem('stayStatus'))) === true) {
        $('#stay').prop('checked', true);
    }
    
    else {
        $('#stay').prop('checked', false);
    };

    setListenerToPassword();

    setListenerToBtnStay();

    setListenerToBtnRecovery();

    setListenerToBtnReg();

    setContentBtnCloseListener();

    $('#signIn').on('click', function(event) {
        event.preventDefault();

        checkLogin($inputLogin.val(), $inputLogin);

        checkPassword($inputPassword.val(), $inputPassword);

        $.ajax({
            type: 'POST',
            url: '../php/sign-in.php',
            cache: false,
            data: $('.content__accountForm').serialize(),

            success(answer) {
                if (Boolean(parseInt(answer)) === true) {
                    accountStatus = 1;
                    access = 1;

                    renderSignedContent();

                    localStorage.setItem('status', JSON.stringify(accountStatus));
                    localStorage.setItem('access', JSON.stringify(access));

                    let $photo = $('#userPhoto'),
                        $email = $('#userEmail'),
                        $login = $('#userLogin');

                    $.ajax({
                        type: 'POST',
                        url: '../php/getUserData.php',
                        cache: false,
                        data: {
                            login: $inputLogin.val()
                        },

                        success(data) {
                            let userObject = JSON.parse(data);
                            
                            if (userObject.avatar !== null) {
                                $photo.attr('src', userObject.avatar);
                            };
                            
                            $email.val(userObject.poshta);
                            $login.val(userObject.login);

                            localStorage.setItem('auth', JSON.stringify(userObject.poshta));

                            authSession = localStorage.getItem('auth');
                        },

                        error() {
                            alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
                            location.reload();
                        },
                    });

                    editAccount();

                    setListenerToEditPassword();

                    setListenerToDeleteAccount();
                }

                else {   
                    let $errorMsg = $(`<div class="content__message"><div class="content__triangle"></div> <span class="content__extraSpan">Невірний логін чи пароль.</span> <i class="fas fa-times content__arrow content__arrow_style"></i</div>`);
    
                    if ($('.content__message').length) {
                        $('.content__message').remove();
                    };
    
                    $('body').prepend($errorMsg);
    
                    $('.content__arrow_style').on('click', function() {
                        $errorMsg.fadeOut(500);
                    });
    
                    $errorMsg.fadeIn(500);
                };
            },

            error() {
                alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
                location.reload();
            },
        });
    });
};

function setListenerToPassword() {
    $('.content__accountEye').on('click', function() {
        if ($('#password').hasClass('passHidden')) {
            showPassword();
        }

        else if ($('#password').hasClass('passVisible')) {
            hidePassword();
        };
    });
};

function setListenerToBtnStay() {
    $('#stay').on('input', function() {
        if (!$('#stay').prop('checked')) {
            stayStatus = 0;
            localStorage.setItem('stayStatus', JSON.stringify(stayStatus));
        }

        else {
            stayStatus = 1;
            localStorage.setItem('stayStatus', JSON.stringify(stayStatus));
        };
    });
};

function showPassword() {
    $('#password').removeClass('passHidden').addClass('passVisible');

    $('.content__accountEye').remove();

    let $newEye = $('<i class="fas fa-eye content__accountEye"></i>');

    $('.content__accountInputs_style').append($newEye);

    $('#password').attr('type', 'text');

    setListenerToPassword();
};

function hidePassword() {
    $('#password').removeClass('passVisible').addClass('passHidden');

    $('.content__accountEye').remove();

    let $newEye = $('<i class="fas fa-eye-slash content__accountEye"></i>');

    $('.content__accountInputs_style').append($newEye);

    $('#password').attr('type', 'password');

    setListenerToPassword();
};

function checkLogin(value, input) {
    value = value.replace(/\s+/g, '');

    if (!value.trim() === true) {
        input.attr('title', "Логін не може бути порожнім!");
        input.css('background-color', 'red');
    }

    else {
        input.attr('title', "");
        input.css('background-color', '#303030');
    };
};

function checkPassword(value, input) {
    value = value.replace(/\s+/g, '');

    if (!value.trim() === true) {
        input.attr('title', "Пароль не може бути порожнім!");
        input.css('background-color', 'red');
    }

    else {
        input.attr('title', "");
        input.css('background-color', '#303030');
    };
};

function editAccount() {
    $('#editAccount').on('click', function(event) {
        event.preventDefault();

        let $photoPath = $('#userPhoto').attr('src'),
            $emailValue = $('#userEmail').val(),
            $loginValue = $('#userLogin').val(),
            $oldButton = $(this),
            $newButton = $('<button type="button" class="content__signedButton" id="acceptChanges">Зберегти</button>');

        $('#choosePhoto').removeAttr('disabled');
        $('#userEmail').removeAttr('disabled').removeClass('content__signedInput_disabled');
        $('#userLogin').removeAttr('disabled').removeClass('content__signedInput_disabled');

        $oldButton.remove();

        $('.content__signedInputs_style').prepend($newButton);

        acceptAccountChanges($photoPath, $emailValue, $loginValue);
    });
};

function acceptAccountChanges(currentPhoto, currentEmail, currentLogin) {
    let emailsData,
        loginsData;

    $.ajax({
        type: 'POST',
        url: '../php/getEmails.php',
    
        success(data) {
            emailsData = JSON.parse(data);
        },
    
        error() {
            alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
            location.reload();
        },
    });
    
    $.ajax({
        type: 'POST',
        url: '../php/getLogins.php',
    
        success(data) {
            loginsData = JSON.parse(data);
        },
    
        error() {
            alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
            location.reload();
        },
    });

    $('#acceptChanges').on('click', function(event) {
        event.preventDefault();
        
        let $oldButton = $(this),
            $newButton = $('<button type="button" class="content__signedButton" id="editAccount">Редагувати дані</button>');

        if (currentPhoto !== $('#userPhoto').attr('src') || currentEmail !== $('#userEmail').val() || currentLogin !== $('#userLogin').val()) {
            if (confirm('Зберегти внесені зміни?') === true) {
                validateExistingEmail($('#userEmail').val(), currentEmail, emailsData, $('#userEmail'));

                validateExistingLogin($('#userLogin').val(), currentLogin, loginsData, $('#userLogin'));

                if ($('#userEmail').attr('title') === 'Все вірно!' && $('#userLogin').attr('title') === 'Все вірно!') {
                    $.ajax({
                        type: 'POST',
                        url: '../php/updateUserData.php',
                        cache: false,
                        data: {
                            newAvatar: $('#userPhoto').attr('src'),
                            newEmail: $('#userEmail').val(),
                            newLogin: $('#userLogin').val(),
                            update: currentEmail
                        },

                        success(answer) {
                            if (Boolean(parseInt(answer)) === true) {
                                $('#choosePhoto').attr('disabled', true);
                
                                $('#userEmail').addClass('content__signedInput_disabled').css('background-color', '#303030').attr({
                                    title: '',
                                    disabled: true
                                });
                
                                $('#userLogin').addClass('content__signedInput_disabled').css('background-color', '#303030').attr({
                                    title: '',
                                    disabled: true
                                });
                
                                $oldButton.remove();
                
                                $('.content__signedInputs_style').prepend($newButton);

                                editAccount();

                                let $successMsg = $(`<div class="content__message"><div class="content__triangle"></div> <span class="content__extraSpan">Дані успішно змінені.</span> <i class="fas fa-times content__arrow content__arrow_style"></i</div>`);
    
                                if ($('.content__message').length) {
                                    $('.content__message').remove();
                                };
    
                                $('body').prepend($successMsg);
    
                                $('.content__arrow_style').on('click', function() {
                                    $successMsg.fadeOut(500);
                                });
    
                                $successMsg.fadeIn(500);
                            }

                            else {
                                alert("Виникла помилка з'єднання. Будь-ласка, спробуйте ще раз.");
                                location.reload();
                            };
                        },

                        error() {
                            alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
                            location.reload();
                        },
                    });
                }

                else {
                    return;
                };
            }

            else {
                $('#userPhoto').attr('src', currentPhoto);

                $('#choosePhoto').attr('disabled', true);

                $('#userEmail').addClass('content__signedInput_disabled').val(currentEmail).css('background-color', '#303030').attr({
                    title: '',
                    disabled: true
                });

                $('#userLogin').addClass('content__signedInput_disabled').val(currentLogin).css('background-color', '#303030').attr({
                    title: '',
                    disabled: true
                });

                $oldButton.remove();

                if ($('.content__message').length) {
                    $('.content__message').remove();
                };
                
                $('.content__signedInputs_style').prepend($newButton);

                editAccount();
            };
        }
        
        else {
            $('#choosePhoto').attr('disabled', true);

            $('#userEmail').addClass('content__signedInput_disabled').css('background-color', '#303030').attr({
                title: '',
                disabled: true
            });

            $('#userLogin').addClass('content__signedInput_disabled').css('background-color', '#303030').attr({
                title: '',
                disabled: true
            });

            $oldButton.remove();

            $('.content__signedInputs_style').prepend($newButton);

            editAccount();
        };
    });
};

function validateExistingEmail(value, oldValue, data, input) {
    let availability = true;
    
    value = value.replace(/\s+/g, '');

    data.forEach(element => {
        if (value === element.poshta) {
            input.attr('title', 'На даний e-mail вже зареєстровано аккаунт!');
            input.css('background-color', 'red');
            
            availability = false;
        }

        else {
            return;
        };
    });

    if (value === oldValue) {
        availability = true;
    };

    if (emailRegexp(value) === false) {
        input.attr('title', 'Невірний e-mail!');
        input.css('background-color', 'red');
    }

    else {
        if (availability === true) {
            input.attr('title', 'Все вірно!');
            input.css('background-color', 'limegreen');
        }

        else {
            return;
        };
    };
};

function validateExistingLogin(value, oldValue, data, input) {
    let availability = true;

    value = value.replace(/\s+/g, '');

    data.forEach(element => {
        if (value === element.login) {
            input.attr('title', 'Цей логін вже зайнятий!');
            input.css('background-color', 'red');

            availability = false;
        }

        else {
            return;
        };
    });

    if (value === oldValue) {
        availability = true;
    };

    if (availability === true) {
        switch (true) {
            case (!value.trim() === true):
                input.attr('title', "Логін не може бути порожнім!");
                input.css('background-color', 'red');
    
                break;
    
            case (value.length < 6 || value.length > 30):
                input.attr('title', "Логін повинен бути від 6 до 30 символів!");
                input.css('background-color', 'red');
    
                break;
    
            case (value === value.toLowerCase()) || (value === value.toUpperCase()):
                input.attr('title', 'Логін повинен мати великі та малі літери!');
                input.css('background-color', 'red');
               
                break;
    
            case (/[~`!?@"'#$№;:.,%^&*/()+=|{}[<>]\]/g.test(value) === true):
                input.attr('title', "Логін не повинен мати спеціальних знаків!");
                input.css('background-color', 'red');
    
                break;
    
            default:
                input.attr('title', "Все вірно!");
                input.css('background-color', 'limegreen');
    
                break;
        };
    }

    else {
        return;
    };
};

function setListenerToEditPassword() {
    $('#editPassword').on('click', function(event) {
        event.preventDefault();

        $('.content').css({
            'overflow-y': 'hidden',
            'animation': 'none',
            'visibility': 'visible',
            'transform': 'none'
        });

        $('.content__modalAccount').html(createEditPasswordContent);

        if ($('.content__message').length) {
            $('.content__message').remove();
        };

        setTimeout(function() {
            $('.content__modalAccount').removeClass('content__modalAccount_notActive').addClass('content__modalAccount_active');
        }, 550);

        $('.content__modalCover').removeClass('content__modalCover_notActive').addClass('content__modalCover_active');

        editPassword();

        setListenerToModalAccountClose();
    });
};

function createEditPasswordContent() {
    return `<h3 class="content__modalAccountTitle">Зміна паролю</h3>
            <p class="content__modalAccountCaption">Введіть поточний та новий паролі.</p>
            <form class="content__modalAccountForm">
                <div class="content__modalAccountInputs">
                    <input type="password" class="content__modalAccountInput" title="Ваш поточний пароль" placeholder="Поточний пароль" id="actualPassword">
                </div>
                <div class="content__modalAccountInputs">
                    <input type="password" class="content__modalAccountInput" title="Придумайте новий пароль" placeholder="Новий пароль" id="newPassword">
                </div>
                <div class="content__modalAccountInputs">
                    <input type="password" class="content__modalAccountInput" title="Підтвердіть новий пароль" placeholder="Підтвердіть новий пароль" id="confirmPassword">
                </div>
                <button type="submit" class="content__modalAccountSubmit" id="acceptEditPass">Підтвердити</button>
            </form>
            <div class="content__modalCircle" id="modalExit"><i class="fas fa-times content__arrow"></i></div>`; 
};

function editPassword() {
    $('#acceptEditPass').on('click', function(event) {
        event.preventDefault();

        let $inputActualPassword = $('#actualPassword'),
            $inputNewPassword = $('#newPassword'),
            $inputConfirm = $('#confirmPassword'),
            $email = $('#userEmail').val();
            
        validatePassword($inputNewPassword.val(), $inputNewPassword);

        validateConfirmPassword($inputConfirm.val(), $inputNewPassword.val(), $inputConfirm);

        updateUserPassword($inputActualPassword.val(), $inputActualPassword, $email);
    });
};

function updateUserPassword(value, input, email) {
    value = value.replace(/\s+/g, '');

    $.ajax({
        type: 'POST',
        url: '../php/comparePasswords.php',
        cache: false,
        data: {
            actualPassword: value,
            email: email
        },

        success(phpAnswer) {
            if (Boolean(parseInt(phpAnswer)) === true) {
                input.attr('title', "Все вірно!");
                input.css('background-color', 'limegreen');

                if ($('#actualPassword').attr('title') === 'Все вірно!' && $('#newPassword').attr('title') === 'Все вірно!' && $('#confirmPassword').attr('title') === 'Все вірно!') {
                    $.ajax({
                        type: 'POST',
                        url: '../php/updateUserPassword.php',
                        cache: false,
                        data: {
                            newPassword: $('#confirmPassword').val(),
                            update: email
                        },
        
                        success(answer) {
                            if (Boolean(parseInt(answer)) === true) {
                                setTimeout(function() {
                                    let $successMsg = $(`<div class="content__message"><div class="content__triangle"></div> <span class="content__extraSpan">Ви успішно змінили свій пароль.</span> <i class="fas fa-times content__arrow content__arrow_style"></i</div>`);
        
                                    $('.content__modalAccount').removeClass('content__modalAccount_active').addClass('content__modalAccount_notActive');
        
                                    setTimeout(function() {
                                        $('.content__modalCover').removeClass('content__modalCover_active').addClass('content__modalCover_notActive');
                                    }, 550);
        
                                    $('.content').css('overflow-y', 'overlay');
        
                                    if ($('.content__message').length) {
                                        $('.content__message').remove();
                                    };
                                
                                    $('body').prepend($successMsg);
        
                                    $('.content__arrow_style').on('click', function() {
                                        $successMsg.fadeOut(500);
                                    });
        
                                    $successMsg.fadeIn(500);
                                }, 550);
                            }
        
                            else {
                                alert("Виникла помилка з'єднання. Будь-ласка, спробуйте ще раз.");
                                location.reload();
                            };
                        },
        
                        error() {
                            alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
                            location.reload();
                        },
                    });
                }
        
                else {
                    return;
                };
            }

            else {
                input.attr('title', "Невірний поточний пароль!");
                input.css('background-color', 'red');
            };
        },

        error() {
            alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
            location.reload();
        },
    });
};

function setListenerToDeleteAccount() {
    $('#deleteAccount').on('click', function(event) {
        event.preventDefault();
      
        $('.content').css({
            'overflow-y': 'hidden',
            'animation': 'none',
            'visibility': 'visible',
            'transform': 'none'
        });

        $('.content__modalAccount').html(createDeleteAccountContent);

        if ($('.content__message').length) {
            $('.content__message').remove();
        };

        setTimeout(function() {
            $('.content__modalAccount').removeClass('content__modalAccount_notActive').addClass('content__modalAccount_active');
        }, 550);

        $('.content__modalCover').removeClass('content__modalCover_notActive').addClass('content__modalCover_active');

        deleteAccount();

        setListenerToModalAccountClose();
    });
};

function createDeleteAccountContent() {
    return `<h3 class="content__modalAccountTitle">Видалення аккаунту</h3>
            <p class="content__modalAccountCaption">Підтвердіть видалення аккаунту поточним паролем.</p>
            <form class="content__modalAccountForm">
                <div class="content__modalAccountInputs">
                    <input type="password" class="content__modalAccountInput" title="Ваш поточний пароль" placeholder="Поточний пароль" id="actualPassword">
                </div>
                <button type="submit" class="content__modalAccountSubmit" id="acceptDelete">Підтвердити</button>
            </form>
            <div class="content__modalCircle" id="modalExit"><i class="fas fa-times content__arrow"></i></div>`; 
};

function deleteAccount() {
    $('#acceptDelete').on('click', function(event) {
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: '../php/comparePasswords.php',
            cache: false,
            data: {
                actualPassword: $('#actualPassword').val(),
                email: $('#userEmail').val()
            },

            success(phpAnswer) {
                if (Boolean(parseInt(phpAnswer)) === true) {
                    $.ajax({
                        type: 'POST',
                        url: '../php/deleteAccount.php',
                        cache: false,
                        data: {
                            toDelete: $('#userEmail').val()
                        },

                        success(answer) {
                            if (Boolean(parseInt(answer)) === true) {
                                accountStatus = 0;
                                access = 0;

                                renderAccountContent();

                                $('#signed').attr('id', 'account').find('.main__span').text('Аккаунт');

                                localStorage.setItem('status', JSON.stringify(accountStatus));

                                localStorage.setItem('access', JSON.stringify(access));

                                localStorage.removeItem('auth');

                                authSession = undefined;
                            }

                            else {
                                alert("Виникла помилка з'єднання. Будь-ласка, спробуйте ще раз.");
                                location.reload();
                            };
                        },

                        error() {
                            alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
                            location.reload();
                        },
                    });
                }

                else {
                    $('#actualPassword').attr('title', 'Невірний поточний пароль!');
                    $('#actualPassword').css('background-color', 'red');
                };
            },

            error() {
                alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
                location.reload();
            },
        });
    });
};

function createRecoveryLoginContent() {
    return `<div class="content__modalAccountSubmain content__modalAccountSubmain_style">
                <h3 class="content__modalAccountTitle">Відновлення аккаунту</h3>
                <p class="content__modalAccountCaption">Не пам'ятаєте свій логін? Укажіть e-mail аккаунту, логін якого ви забули.</p>
                <form class="content__modalAccountForm">
                    <div class="content__modalAccountInputs">
                        <input type="email" class="content__modalAccountInput" title="Ваш e-mail" name="recEmail" id="recEmail" autofocus>
                    </div>
                    <button type="submit" class="content__modalAccountSubmit" id="recButton">Підтвердити</button>
                    <div class="content__modalAccountExtra">
                        <span class="content__modalAccountSpan" id="gotoPassRec">Забули пароль?</span>
                    </div>
                </form>
                <div class="content__modalCircle" id="modalExit"><i class="fas fa-times content__arrow"></i></div>
            </div>`;
};

function createRecoveryPasswordContent() {
    return `<div class="content__modalAccountSubmain content__modalAccountSubmain_style">
                <h3 class="content__modalAccountTitle">Відновлення аккаунту</h3>
                <p class="content__modalAccountCaption">Не пам'ятаєте свій пароль? Укажіть e-mail аккаунту, пароль якого ви забули.</p>
                <form class="content__modalAccountForm">
                    <div class="content__modalAccountInputs">
                        <input type="email" class="content__modalAccountInput" title="Ваш e-mail" name="recEmail" id="recEmail" autofocus>
                    </div>
                    <button type="submit" class="content__modalAccountSubmit" id="recButton">Підтвердити</button>
                    <div class="content__modalAccountExtra">
                        <span class="content__modalAccountSpan" id="gotoLoginRec">Забули логін?</span>
                    </div>
                </form>
                <div class="content__modalCircle" id="modalExit"><i class="fas fa-times content__arrow"></i></div>
            </div>`;
};

function setListenerToBtnRecovery() {
    $('#recovery').on('click', function(event) {
        event.preventDefault();

        $('.content__accountInput').css('background-color', '#303030');

        $.ajax({
            type: 'POST',
            url: '../php/getEmails.php',
            cache: false,

            success(data) {
                let emailsData = JSON.parse(data);

                sendResetCodeLogin(emailsData);

                gotoPasswordRecovery(emailsData);
            },

            error() {
                alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
                location.reload();
            },
        });
   
        $('.content').css({
            'overflow-y': 'hidden',
            'animation': 'none',
            'visibility': 'visible',
            'transform': 'none'
        });

        $('.content__modalAccount').html(createRecoveryLoginContent);

        if ($('.content__message').length) {
            $('.content__message').remove();
        };

        setTimeout(function() {
            $('.content__modalAccount').removeClass('content__modalAccount_notActive').addClass('content__modalAccount_active');
        }, 550);

        $('.content__modalCover').removeClass('content__modalCover_notActive').addClass('content__modalCover_active');
        
        setListenerToModalAccountClose();
    });
};

function sendResetCodeLogin(data) {
    $('#recButton').on('click', function(event) {
        event.preventDefault();
        
        let permission = false;
     
        data.forEach(element => {
            if (element.poshta === $('#recEmail').val()) {
                permission = true;
            }

            else {
                return;
            };
        });
  
        if (permission === true) {
            let resetCode = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000,
                $email = $('#recEmail').val();

            $.ajax({
                type: 'POST',
                url: '../php/sendResetCode.php',
                data: {
                    code: resetCode,
                    email: $email
                },
    
                success(answer) {
                    if (Boolean(parseInt(answer)) === true) {
                        $('#resetCode').on('input', function() {
                            if (parseInt($(this).val()) === resetCode) {
                                let $content = $(`<div class="content__modalAccountSubmain content__modalAccountSubmain_style"><h3 class="content__modalAccountTitle">Відновлення аккаунту</h3><form class="content__modalAccountForm"><div class="content__modalAccountInputs"><input type="text" class="content__modalAccountInput" title="Придумайте новий логін" placeholder="Новий логін" id="newLogin"></div><div class="content__modalAccountInputs"><input type="text" class="content__modalAccountInput" title="Підтвердіть новий логін" placeholder="Підтвердіть новий логін" id="confirmNewLogin"></input></div><button type="submit" class="content__modalAccountSubmit" id="resetButton">Підтвердити</button></form><div class="content__modalCircle" id="modalExit"><i class="fas fa-times content__arrow"></i></div></div>`),
                                    loginsData;

                                $.ajax({
                                    type: 'POST',
                                    url: '../php/getLogins.php',
                                
                                    success(data) {
                                        loginsData = JSON.parse(data);
                                    },
                                
                                    error() {
                                        alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
                                        location.reload();
                                    },
                                });

                                $('#resetCode').attr('title', 'Все вірно!');
                                $('#resetCode').css('background-color', 'limegreen');

                                setTimeout(function() {
                                    $('.content__modalAccount').html($content);

                                    $('.content__modalAccountSubmain').hide().fadeIn(500);

                                    setListenerToModalAccountClose();

                                    let $inputNewLogin = $('#newLogin'),
                                        $inputConfirm = $('#confirmNewLogin');
                               
                                    $('#resetButton').on('click', function(event) {
                                        event.preventDefault();

                                        validateLogin($inputNewLogin.val(), loginsData, $inputNewLogin);

                                        validateConfirmLogin($inputConfirm.val(), $inputNewLogin.val(), $inputConfirm);

                                        if ($inputNewLogin.attr('title') === 'Все вірно!' && $inputConfirm.attr('title') === 'Все вірно!') {
                                            $.ajax({
                                                type: 'POST',
                                                url: '../php/resetLogin.php',
                                                data: {
                                                    newLogin: $inputConfirm.val(),
                                                    email: $email
                                                },

                                                success(answer) {
                                                    if (Boolean(parseInt(answer)) === true) {
                                                        setTimeout(function() {
                                                            let $successMsg = $(`<div class="content__message"><div class="content__triangle"></div> <span class="content__extraSpan">Ви успішно скинули свій логін.</span> <i class="fas fa-times content__arrow content__arrow_style"></i</div>`);
        
                                                            $('.content__accountForm')[0].reset();
        
                                                            $('.content__modalAccount').removeClass('content__modalAccount_active').addClass('content__modalAccount_notActive');
                
                                                            setTimeout(function() {
                                                                $('.content__modalCover').removeClass('content__modalCover_active').addClass('content__modalCover_notActive');
                                                            }, 550);
                
                                                            $('.content').css('overflow-y', 'overlay');
        
                                                            if ($('.content__message').length) {
                                                                $('.content__message').remove();
                                                            };
                                                        
                                                            $('body').prepend($successMsg);
            
                                                            $('.content__arrow_style').on('click', function() {
                                                                $successMsg.fadeOut(500);
                                                            });
            
                                                            $successMsg.fadeIn(500);
                                                        }, 550);
                                                    }

                                                    else {
                                                        alert("Виникла помилка з'єднання. Будь-ласка, спробуйте ще раз.");
                                                        location.reload();
                                                    };
                                                },

                                                error() {
                                                    alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
                                                    location.reload();
                                                },
                                            });
                                        }

                                        else {
                                            return;
                                        };
                                    });
                                }, 550);
                            }
    
                            else {
                                $(this).attr('title', 'Невірний код скидання');
                                $(this).css('background-color', 'red');
                            };
                        });
                    }
    
                    else {
                        alert("Виникла помилка з'єднання. Будь-ласка, спробуйте ще раз.");
                        location.reload();
                    };
                },
    
                error() {
                    alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
                    location.reload();
                },
            });

            $('.content__modalAccount').html(createResetLoginContent);

            $('.content__modalAccountSubmain').hide().fadeIn(500);

            setListenerToModalAccountClose();
        }
    
        else {
            $('#recEmail').css('background-color', 'red');
            $('#recEmail').attr('title', "Цей email не прив'язаний до жодного аккаунту!");

            return;
        };
    });
};

function createResetLoginContent() {
    return `<div class="content__modalAccountSubmain">
                <h3 class="content__modalAccountTitle">Відновлення аккаунту</h3>
                <p class="content__modalAccountCaption">Підтвердіть скидання логіну кодом, який прийде на вашу пошту протягом десяти хвилин.</p>
                <form class="content__modalAccountForm">
                    <div class="content__modalAccountInputs">
                        <input type="text" class="content__modalAccountInput" title="Код скидання" id="resetCode" autofocus>
                    </div>
                </form>
                <div class="content__modalCircle" id="modalExit"><i class="fas fa-times content__arrow"></i></div>
            </div>`; 
};

function createResetPasswordContent() {
    return `<div class="content__modalAccountSubmain">
                <h3 class="content__modalAccountTitle">Відновлення аккаунту</h3>
                <p class="content__modalAccountCaption">Підтвердіть скидання паролю кодом, який прийде на вашу пошту протягом десяти хвилин.</p>
                <form class="content__modalAccountForm">
                    <div class="content__modalAccountInputs">
                        <input type="text" class="content__modalAccountInput" title="Код скидання" id="resetCode" autofocus>
                    </div>
                </form>
                <div class="content__modalCircle" id="modalExit"><i class="fas fa-times content__arrow"></i></div>
            </div>`; 
};

function gotoPasswordRecovery(data) {
    $('#gotoPassRec').on('click', function(event) {
        event.preventDefault();

        $('.content__modalAccount').html(createRecoveryPasswordContent);

        if ($('.content__message').length) {
            $('.content__message').remove();
        };

        $('.content__modalAccountSubmain').hide().fadeIn(500);

        setListenerToModalAccountClose();

        sendResetCodePassword(data);

        gotoLoginRecovery(data);
    });
};

function gotoLoginRecovery(data) {
    $('#gotoLoginRec').on('click', function(event) {
        event.preventDefault();

        $('.content__modalAccount').html(createRecoveryLoginContent);

        if ($('.content__message').length) {
            $('.content__message').remove();
        };

        $('.content__modalAccountSubmain').hide().fadeIn(500);

        setListenerToModalAccountClose();

        sendResetCodeLogin(data);

        gotoPasswordRecovery(data);
    });
};

function sendResetCodePassword(data) {
    $('#recButton').on('click', function(event) {
        event.preventDefault();

        let permission = false;

        data.forEach(element => {
            if (element.poshta === $('#recEmail').val()) {
                permission = true;
            }

            else {
                return;
            };
        });

        if (permission === true) {
            let resetCode = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000,
                $email = $('#recEmail').val();

            $.ajax({
                type: 'POST',
                url: '../php/sendResetCode.php',
                data: {
                    code: resetCode,
                    email: $email
                },
    
                success(answer) {
                    if (Boolean(parseInt(answer)) === true) {
                        $('#resetCode').on('input', function() {
                            if (parseInt($(this).val()) === resetCode) {
                                let $content = $(`<div class="content__modalAccountSubmain content__modalAccountSubmain_style"><h3 class="content__modalAccountTitle">Відновлення аккаунту</h3><form class="content__modalAccountForm"><div class="content__modalAccountInputs"><input type="password" class="content__modalAccountInput" title="Придумайте новий пароль" placeholder="Новий пароль" id="newPassword"></div><div class="content__modalAccountInputs"><input type="password" class="content__modalAccountInput" title="Підтвердіть новий пароль" placeholder="Підтвердіть новий пароль" id="confirmNewPassword"></input></div><button type="submit" class="content__modalAccountSubmit" id="resetButton">Підтвердити</button></form><div class="content__modalCircle" id="modalExit"><i class="fas fa-times content__arrow"></i></div></div>`);

                                $('#resetCode').attr('title', 'Все вірно!');
                                $('#resetCode').css('background-color', 'limegreen');

                                setTimeout(function() {
                                    $('.content__modalAccount').html($content);

                                    $('.content__modalAccountSubmain').hide().fadeIn(500);

                                    setListenerToModalAccountClose();

                                    let $inputNewPassword = $('#newPassword'),
                                        $inputConfirm = $('#confirmNewPassword');
                               
                                    $('#resetButton').on('click', function(event) {
                                        event.preventDefault();

                                        validatePassword($inputNewPassword.val(), $inputNewPassword);

                                        validateConfirmPassword($inputConfirm.val(), $inputNewPassword.val(), $inputConfirm);

                                        if ($inputNewPassword.attr('title') === 'Все вірно!' && $inputConfirm.attr('title') === 'Все вірно!') {
                                            $.ajax({
                                                type: 'POST',
                                                url: '../php/resetPassword.php',
                                                data: {
                                                    newPassword: $inputConfirm.val(),
                                                    email: $email
                                                },

                                                success(answer) {
                                                    if (Boolean(parseInt(answer)) === true) {
                                                        setTimeout(function() {
                                                            let $successMsg = $(`<div class="content__message"><div class="content__triangle"></div> <span class="content__extraSpan">Ви успішно скинули свій пароль.</span> <i class="fas fa-times content__arrow content__arrow_style"></i</div>`);
        
                                                            $('.content__accountForm')[0].reset();
        
                                                            $('.content__modalAccount').removeClass('content__modalAccount_active').addClass('content__modalAccount_notActive');
                
                                                            setTimeout(function() {
                                                                $('.content__modalCover').removeClass('content__modalCover_active').addClass('content__modalCover_notActive');
                                                            }, 550);
                
                                                            $('.content').css('overflow-y', 'overlay');
        
                                                            if ($('.content__message').length) {
                                                                $('.content__message').remove();
                                                            };
                                                        
                                                            $('body').prepend($successMsg);
            
                                                            $('.content__arrow_style').on('click', function() {
                                                                $successMsg.fadeOut(500);
                                                            });
            
                                                            $successMsg.fadeIn(500);
                                                        }, 550);
                                                    }

                                                    else {
                                                        alert("Виникла помилка з'єднання. Будь-ласка, спробуйте ще раз.");
                                                        location.reload();
                                                    };
                                                },

                                                error() {
                                                    alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
                                                    location.reload();
                                                },
                                            });
                                        }

                                        else {
                                            return;
                                        };
                                    });
                                }, 550);
                            }
    
                            else {
                                $(this).attr('title', 'Невірний код скидання');
                                $(this).css('background-color', 'red');
                            };
                        });
                    }
    
                    else {
                        alert("Виникла помилка з'єднання. Будь-ласка, спробуйте ще раз.");
                        location.reload();
                    };
                },
    
                error() {
                    alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
                    location.reload();
                },
            });

            $('.content__modalAccount').html(createResetPasswordContent);

            $('.content__modalAccountSubmain').hide().fadeIn(500);

            setListenerToModalAccountClose();
        }
    
        else {
            $('#recEmail').css('background-color', 'red');
            $('#recEmail').attr('title', "Цей email не прив'язаний до жодного аккаунту!");

            return;
        };
    });
};

function createRegistrationContent() {
    return `<h3 class="content__modalAccountTitle">Регістрація аккаунту</h3>
            <form class="content__modalAccountForm">
                <div class="content__modalAccountInputs">
                    <input type="email" class="content__modalAccountInput" placeholder="E-mail" title="Ваш e-mail" name="regEmail" id="regEmail">
                </div>
                <div class="content__modalAccountInputs">
                    <input type="text" class="content__modalAccountInput" placeholder="Логін" title="Придумайте логін" name="regLogin" id="regLogin">
                </div>
                <div class="content__modalAccountInputs">
                    <input type="password" class="content__modalAccountInput" placeholder="Пароль" title="Придумайте пароль" id="regPassword">
                </div>
                <div class="content__modalAccountInputs">
                    <input type="password" class="content__modalAccountInput" placeholder="Підтвердіть пароль" title="Підтвердіть пароль" name="regPassword" id="confirmPassword">
                </div>
                <button type="submit" class="content__modalAccountSubmit" id="regAccount">Створити аккаунт</button>
            </form>
            <div class="content__modalCircle" id="modalExit"><i class="fas fa-times content__arrow"></i></div>`;
};

function setListenerToBtnReg() {
    $('#signUp').on('click', function() {
        $('.content').css({
            'overflow-y': 'hidden',
            'animation': 'none',
            'visibility': 'visible',
            'transform': 'none'
        });
        
        $('.content__modalAccount').html(createRegistrationContent);

        $('.content__accountInput').css('background-color', '#303030');

        if ($('.content__message').length) {
            $('.content__message').remove();
        };

        setTimeout(function() {
            $('.content__modalAccount').removeClass('content__modalAccount_notActive').addClass('content__modalAccount_active');
        }, 550);

        $('.content__modalCover').removeClass('content__modalCover_notActive').addClass('content__modalCover_active');
        
        setListenerToModalAccountClose();

        registrateAccount();
    });
};

function setListenerToModalAccountClose() {
    $('#modalExit').on('click', function() {
        $('.content__modalAccount').removeClass('content__modaAccount_active').addClass('content__modalAccount_notActive');
        
        setTimeout(function() {
            $('.content__modalCover').removeClass('content__modalCover_active').addClass('content__modalCover_notActive');
        }, 550);
        
        $('.content').css('overflow-y', 'overlay');
    });
};

function registrateAccount() {
    let emailsData,
        loginsData,
        $inputEmail = $('#regEmail'),
        $inputLogin = $('#regLogin'),
        $inputPassword = $('#regPassword'),
        $inputConfirm = $('#confirmPassword');

    $.ajax({
        type: 'POST',
        url: '../php/getEmails.php',

        success(data) {
            emailsData = JSON.parse(data);
        },

        error() {
            alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
            location.reload();
        },
    });

    $.ajax({
        type: 'POST',
        url: '../php/getLogins.php',

        success(data) {
            loginsData = JSON.parse(data);
        },

        error() {
            alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
            location.reload();
        },
    });

    $('#regAccount').on('click', function(event) {
        event.preventDefault();
        
        checkEmailAvailability($inputEmail.val(), emailsData, $inputEmail);

        validateLogin($inputLogin.val(), loginsData, $inputLogin);

        validatePassword($inputPassword.val(), $inputPassword);

        validateConfirmPassword($inputConfirm.val(), $inputPassword.val(), $inputConfirm);

        if ($inputEmail.attr('title') === 'Все вірно!' && $inputLogin.attr('title') === 'Все вірно!' && $inputPassword.attr('title') === 'Все вірно!' && $inputConfirm.attr('title') === 'Все вірно!') {
            let confirmCode = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

            $.ajax({
                type: 'POST',
                url: '../php/sendConfirmCode.php',
                data: {
                    code: confirmCode,
                    email: $inputEmail.val(),
                    login: $inputLogin.val()
                },

                success(answer) {
                    if (Boolean(parseInt(answer)) === true) {
                        $('#confirmCode').on('input', function() {
                            if (parseInt($(this).val()) === confirmCode) {
                                $.ajax({
                                    type: 'POST',
                                    url: '../php/createNewAccount.php',
                                    data: {
                                        email: $inputEmail.val(),
                                        login: $inputLogin.val(),
                                        password: $inputConfirm.val()
                                    },

                                    success(answer) {
                                        if (Boolean(parseInt(answer)) === true) {
                                            $('#confirmCode').attr('title', 'Все вірно!');
                                            $('#confirmCode').css('background-color', 'limegreen');

                                            setTimeout(function() {
                                                let $successMsg = $(`<div class="content__message"><div class="content__triangle"></div> <span class="content__extraSpan">Ваш аккаунт успішно створений.</span> <i class="fas fa-times content__arrow content__arrow_style"></i</div>`);

                                                $('.content__accountForm')[0].reset();

                                                $('.content__modalAccount').removeClass('content__modalAccount_active').addClass('content__modalAccount_notActive');
        
                                                setTimeout(function() {
                                                    $('.content__modalCover').removeClass('content__modalCover_active').addClass('content__modalCover_notActive');
                                                }, 550);
        
                                                $('.content').css('overflow-y', 'overlay');

                                                if ($('.content__message').length) {
                                                    $('.content__message').remove();
                                                };
                                                
                                                $('body').prepend($successMsg);
    
                                                $('.content__arrow_style').on('click', function() {
                                                    $successMsg.fadeOut(500);
                                                });
    
                                                $successMsg.fadeIn(500);
                                            }, 550);
                                        }

                                        else {
                                            alert("Виникла помилка з'єднання. Будь-ласка, спробуйте ще раз.");
                                            location.reload();
                                        };
                                    },

                                    error() {
                                        alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
                                        location.reload();
                                    },
                                });
                            }

                            else {
                                $(this).attr('title', 'Невірний код підтвердження');
                                $(this).css('background-color', 'red');
                            };
                        });
                    }

                    else {
                        alert("Виникла помилка з'єднання. Будь-ласка, спробуйте ще раз.");
                        location.reload();
                    };
                },

                error() {
                    alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
                    location.reload();
                },
            });

            $('.content__modalAccount').html(createConfirmContent);

            $('.content__modalAccountSubmain').hide().fadeIn(500);

            setListenerToModalAccountClose();
        }

        else {
            return;
        };
    });
};

function validateLogin(value, data, input) {
    let availability = true;

    value = value.replace(/\s+/g, '');

    data.forEach(element => {
        if (value === element.login) {
            input.attr('title', 'Цей логін вже зайнятий!');
            input.css('background-color', 'red');

            availability = false;
        }

        else {
            return;
        };
    });

    if (availability === true) {
        switch (true) {
            case (!value.trim() === true):
                input.attr('title', "Логін не може бути порожнім!");
                input.css('background-color', 'red');
    
                break;
    
            case (value.length < 6 || value.length > 30):
                input.attr('title', "Логін повинен бути від 6 до 30 символів!");
                input.css('background-color', 'red');
    
                break;
    
            case (value === value.toLowerCase()) || (value === value.toUpperCase()):
                input.attr('title', 'Логін повинен мати великі та малі літери!');
                input.css('background-color', 'red');
               
                break;
    
            case (/[~`!?@"'#$№;:.,%^&*/()+=|{}[<>]\]/g.test(value) === true):
                input.attr('title', "Логін не повинен мати спеціальних знаків!");
                input.css('background-color', 'red');
    
                break;
    
            default:
                input.attr('title', "Все вірно!");
                input.css('background-color', 'limegreen');
    
                break;
        };
    }

    else {
        return;
    };
};

function validateConfirmLogin(confirmValue, value, input) {
    switch (true) {
        case (!value.trim() === true):
            input.attr('title', 'Поле не повинно бути порожнім!');
            input.css('background-color', 'red');
    
            break;
    
        case (confirmValue !== value):
            input.attr('title', 'Логіни не збігаються!');
            input.css('background-color', 'red');
    
            break;
    
        default:
            input.attr('title', 'Все вірно!');
            input.css('background-color', 'limegreen');
                  
            break;
    };
};

function validatePassword(value, input) {
    switch (true) {
        case (!value.trim() === true):
            input.attr('title', 'Пароль не повинен бути порожнім!');
            input.css('background-color', 'red');

            break;
    
        case (value.length < 6 || value.length > 13):
            input.attr('title', 'Пароль повинен бути від 6 до 13 символів!');
            input.css('background-color', 'red');
        
        break;

        case (!(/[0-9]/g.test(value))):
            input.attr('title', 'Пароль повинен мати хоча б одну цифру!');
            input.css('background-color', 'red');
      
            break;

        case (value === value.toLowerCase()) || (value === value.toUpperCase()):
            input.attr('title', 'Пароль повинен мати великі та малі літери!');
            input.css('background-color', 'red');
       
            break;
    
        case (/[~`!?@_"'#$№;:.,%^&*/()+=|{}[<>\]-]/g.test(value) === true):
            input.attr('title', 'Пароль не повинен мати спеціальних знаків!');
            input.css('background-color', 'red');
        
            break;
    
        case (/\s/.test(value)):
            input.attr('title', 'Пароль не повинен мати пробіл!');
            input.css('background-color', 'red');
       
            break;
    
        default:
            input.attr('title', 'Все вірно!');
            input.css('background-color', 'limegreen');
          
            break;
    };
};

function validateConfirmPassword(confirmValue, value, input) {
    switch (true) {
        case (!value.trim() === true):
            input.attr('title', 'Поле не повинно бути порожнім!');
            input.css('background-color', 'red');

            break;

        case (confirmValue !== value):
            input.attr('title', 'Паролі не збігаються!');
            input.css('background-color', 'red');

            break;

        default:
            input.attr('title', 'Все вірно!');
            input.css('background-color', 'limegreen');
              
            break;
    };
};

function createConfirmContent() {
    return `<div class="content__modalAccountSubmain">
                <h3 class="content__modalAccountTitle">Підтвердження аккаунту</h3>
                <p class="content__modalAccountCaption">Ваш аккаунт майже створено. Залишився останній крок - підтвердіть свій аккаунт кодом, який прийде вам на пошту протягом десяти хвилин.</p>
                <form class="content__modalAccountForm">
                    <div class="content__modalAccountInputs">
                        <input type="text" class="content__modalAccountInput" title="Код підтвердження" id="confirmCode" autofocus>
                    </div>
                </form>
                <div class="content__modalCircle" id="modalExit"><i class="fas fa-times content__arrow"></i></div>
            </div>`; 
};

function createSignedContent() {
    return `<div class="content__submain">
                <div class="content__caption">
                    <div class="content__circle">
                        <i class="fas fa-chevron-down content__arrow"></i>
                    </div>
                    <h2 class="content__title">Ваш аккаунт</h2>
                </div>
                <div class="content__signed">
                    <div class="content__signedControls">
                        <div class="content__signedPic">
                            <img src="../img/defaultPhoto.jpg" alt="Ваше фото" class="content__signedPhoto" id="userPhoto">
                            <div class="content__signedExtra">
                                <input type="file" accept="image/*" title="Оберіть своє фото" class="content__signedSetPhoto" id="choosePhoto" disabled>
                            </div>
                        </div>
                        <div class="content__signedInfo">
                            <div class="content__signedInputs">
                                <span class="content__signedFootnote">Електронна пошта</span>
                                <input type="email" class="content__signedInput content__signedInput_disabled" placeholder="Пошта" id="userEmail" disabled>
                            </div>
                            <div class="content__signedInputs">
                                <span class="content__signedFootnote">Логін</span>
                                <input type="text" class="content__signedInput content__signedInput_disabled" placeholder="Логін" id="userLogin" disabled>
                            </div>
                            <div class="content__signedInputs content__signedInputs_style">
                                <button type="button" class="content__signedButton" id="editAccount">Редагувати дані</button>
                                <button type="button" class="content__signedButton" id="editPassword">Змінити пароль</button>
                            </div>
                            <div class="content__signedInputs content__signedInputs_align">
                                <span class="content__signedDelete" id="deleteAccount">Видалити аккаунт</span>
                            </div>
                        </div>
                    </div>
                    <div class="content__signedBtn">
                        <button type="button" class="content__signedExit" id="exit">Вийти з аккаунту</button>
                    </div>
                </div>
            </div>
            <div class="content__modalCover" id="modalCover">
                <div class="content__modalAccount"></div>
            </div>`;
};

function renderSignedContent() {
    $('.content').html(createSignedContent).removeClass('account').addClass('signed');

    $('.content__submain').hide().fadeIn(500);

    if ($('.content__message').length) {
        $('.content__message').remove();
    };

    $('#account').attr('id', 'signed').find('.main__span').text('Авторизовано');

    $('#choosePhoto').on('change', choosePhoto);

    setListenerToAccountExit();

    setContentBtnCloseListener();
};

function renderAuthContent() {
    $('.content').html(createSignedContent).removeAttr('class').addClass('content signed');

    $('.content__submain').hide().fadeIn(500);

    let $photo = $('#userPhoto'),
        $email = $('#userEmail'),
        $login = $('#userLogin');

    $.ajax({
        type: 'POST',
        url: '../php/getUserData.php',
        cache: false,
        data: {
            email: JSON.parse(localStorage.getItem('auth'))
        },

        success(data) {
            let userObject = JSON.parse(data);
            
            if (userObject.avatar !== null) {
                $photo.attr('src', userObject.avatar);
            };

            $email.val(userObject.poshta);
            $login.val(userObject.login);
        },

        error() {
            alert("Виникла помилка з'єднання. Сторінка буде перезавантажена.");
            location.reload();
        },
    });
    
    $('#choosePhoto').on('change', choosePhoto);

    editAccount();

    setListenerToEditPassword();

    setListenerToDeleteAccount();

    setListenerToAccountExit();

    setContentBtnCloseListener();
};

function choosePhoto(event) {
    let choosedFile = event.target,
        reader = new FileReader();
   
    reader.onload = function() {
        let dataUrl = reader.result,
            $output = $('.content__signedPhoto');
        
        $output.attr('src', dataUrl);
    };  
  
    reader.readAsDataURL(choosedFile.files[0]);
};

function setListenerToAccountExit() {
    $('#exit').on('click', function() {
        if (confirm('Ви впевнені, що хочете вийти з аккаунту?') === true) {
            accountStatus = 0;
            access = 0;

            if ($('.content__message').length) {
                $('.content__message').remove();
            };

            renderAccountContent();

            $('#signed').attr('id', 'account').find('.main__span').text('Аккаунт');

            localStorage.setItem('status', JSON.stringify(accountStatus));

            localStorage.setItem('access', JSON.stringify(access));

            localStorage.removeItem('auth');

            authSession = undefined;
        }

        else {
            return;
        };
    }); 
};