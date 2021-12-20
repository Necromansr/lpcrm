// (function () {


// $('.inc').on('mouseenter', function(e) {
//     document.addEventListener('keydown', inputKeyUp, false)
//     document.self = this;
//     $(this).find('.arrowsInc').css('opacity', '1');
//     $(this).parents('.rangeslider').find('.min').addClass('inputThumbColor');
// });
// $('.inc').on('mouseleave', function(e) {
//     document.removeEventListener('keydown', inputKeyUp, false)
//     document.self = this;
//     $(this).find('.arrowsInc').css('opacity', '0');
//     $(this).parents('.rangeslider').find('.min').removeClass('inputThumbColor');

// });
// $('.dec').on('mouseenter', function(e) {
//     document.addEventListener('keydown', inputKeyDown, false)
//     document.self = this;
//     $(this).find('.arrowsDec').css('opacity', '1');
//     $(this).parents('.rangeslider').find('.max').addClass('inputThumbColor');
// });
// $('.dec').on('mouseleave', function(e) {
//     document.removeEventListener('keydown', inputKeyDown, false)
//     document.self = this;
//     $(this).find('.arrowsDec').css('opacity', '0');
//     $(this).parents('.rangeslider').find('.max').removeClass('inputThumbColor');
// });


// $('.rangesList').on('click', function() {
//     $(".sort-menu").off('mouseleave', sortMenuOff);
//     $(".sort-menu").off('mouseenter', sortMenu);
//     $('.btn-wrap').css('visibility', 'hidden');
//     $('.btn-wrap-large').css('visibility', 'hidden');
//     $('.btn-wrap-medium').css('visibility', 'hidden').css('z-index', '999');
//     $('.sort-btn').css('visibility', 'hidden');
//     $('.block-calendary').css('visibility', 'hidden');
//     $('.border-sort').css('opacity', '0');
//     $('.input-style').css('visibility', 'hidden');
//     $('.podlozhka').css('z-index', '998').css('display', 'block');

//     $(this).parents('.btn-wrap-medium').css('visibility', 'visible');
//     $(this).parents('.btn-wrap-medium').find('.sort-btn').css('visibility', 'visible');
//     $(this).parents('.btn-wrap-medium').find('.border-sort').css('opacity', '1');
//     $(this).toggleClass('select-btn');
//     $('.inputDataMin,.inputDataMax').removeClass('select-btn');
//     if ($(this).hasClass('p-p')) {
//         $(this).parents('.btn-wrap-medium').find('.btn-medium').text('П/п');
//         if ($(this).parents('.rangeslider').find('.min').val() !== '0' || $(this).parents('.rangeslider').find('.max').val() !== '52') {
//             $(this).parents('.btn-wrap-medium').find('.btn-medium').text('Фильтр');
//         }
//     }
//     console.log($('.rangesList.select-btn').length)
//     $(this).parent().find('.rangesList.all').removeClass('select-btn');
//     if ($(this).parents('.rangeslider').find('.select-btn').length == 0) {
//         $(this).parents('.rangeslider').find('.all').addClass('select-btn');
//         $(this).parents('.btn-wrap-medium').find('.btn-medium').text('');
//         if ($(this).parents('.rangeslider').find('.min').val() !== '0' || $(this).parents('.rangeslider').find('.max').val() !== '52') {
//             $(this).parents('.btn-wrap-medium').find('.btn-medium').text('Фильтр');
//             $(this).parents('.rangeslider').find('.all').removeClass('select-btn');
//         } else {
//             $(this).parents('.btn-wrap-medium').find('.btn-medium').text('');
//             if ($(this).parents('.rangeslider').find('.p-p').hasClass('select-btn')) {
//                 $(this).parents('.btn-wrap-medium').find('.btn-medium').text('П/п');
//             }
//         }
//     }
// });
// $('.rangesList.all').on('click', function() {
//     $(this).parents('.rangesBtnBlock').find('.select-btn').removeClass('select-btn');
//     $(this).addClass('select-btn');
//     $(this).parents('.block1').removeClass('toggle');
//     $(this).parents('.btn-wrap-medium').find('.btn-medium').text('');
//     $(this).parents('.rangeslider').find('.min').val('0');
//     $(this).parents('.rangeslider').find('.max').val('52');
//     $(this).parents('.rangeslider').find('.minBG,.maxBG').css('width', '0%');
//     $(this).parents('.rangeslider').find('.inputDataMin').text(arr[0]);
//     $(this).parents('.rangeslider').find('.inputDataMax').text(arr[52]);
//     $('.btn-wrap').css('visibility', 'visible');
//     $('.btn-wrap-large').css('visibility', 'visible');
//     $('.btn-wrap-medium').css('visibility', 'visible').css('z-index', '2');
//     $('.sort-btn').css('visibility', 'visible');
//     $('.block-calendary').css('visibility', 'visible');
//     $('.border-sort').css('opacity', '1');

//     $('.podlozhka').css('z-index', '0').css('display', 'none');
//     $('.input-style').css('visibility', 'visible');
//     $(".sort-menu").on('mouseleave', sortMenuOff);
//     $(".sort-menu").on('mouseenter', sortMenu);
//     changesInput();
// });

// function inputKeyUp(e) {
//     e.preventDefault();
//     $(".sort-menu").off('mouseleave', sortMenuOff);
//     $(".sort-menu").off('mouseenter', sortMenu);
//     $('.btn-wrap').css('visibility', 'hidden');
//     $('.btn-wrap-large').css('visibility', 'hidden');
//     $('.btn-wrap-medium').css('visibility', 'hidden').css('z-index', '999');
//     $('.sort-btn').css('visibility', 'hidden');
//     $('.block-calendary').css('visibility', 'hidden');
//     $('.border-sort').css('opacity', '0');
//     $('.input-style').css('visibility', 'hidden');
//     $('.podlozhka').css('z-index', '998').css('display', 'block');

//     let self = e.currentTarget.self;

//     $(self).parents('.btn-wrap-medium').css('visibility', 'visible');
//     $(self).parents('.btn-wrap-medium').find('.sort-btn').css('visibility', 'visible');
//     $(self).parents('.btn-wrap-medium').find('.border-sort').css('opacity', '1');

//     let rangeGroup = $(self).attr('name');
//     let minBtn = $(self).parents('.rangeslider').find('.min');
//     let maxBtn = $(self).parents('.rangeslider').find('.max');
//     let range_min = $(self).parents('.rangeslider').find('.range_min');
//     let range_max = $(self).parents('.rangeslider').find('.range_max');
//     let minVal = $(minBtn).val();
//     let maxVal = $(maxBtn).val();
//     if (38 === e.keyCode) {
//         minVal = $(minBtn).val();
//         if ($(self).parents('.rangeslider').find('input').hasClass('min')) {
//             $(minBtn).val(parseInt(minVal) - 1);
//             console.log('t')
//             $(self).find('.arrowsInc .arrowUp').css('top', '2px').css('opacity', '0.8');
//             $(self).find('.arrowsInc .arrowDown').css('opacity', '0.8').css('top', '7px');
//             if ($(self).parents('.rangeslider').find('.min').val() === '0') {
//                 $(self).find('.arrowsInc .arrowUp').css('opacity', '0');
//                 $(self).find('.arrowsInc .arrowDown').css('top', '5px');
//             }
//         } else {
//             $(self).find('.arrowsInc .arrowUp').css('top', '5px').css('opacity', '0.8');
//             $(self).find('.arrowsInc .arrowDown').css('opacity', '0');
//         }
//         $(range_min).val(parseInt(minVal) - 1);
//         $(self).find('.inputDataMin').text(arr[parseInt(minVal) - 1])
//         console.log('ttt')
//     }
//     if (40 === e.keyCode) {
//         if ($(self).parents('.rangeslider').find('input').hasClass('min') && parseInt(minVal) + 1 < maxVal) {
//             $(minBtn).val(parseInt(minVal) + 1);
//             $(self).find('.arrowsInc .arrowUp').css('top', '2px').css('opacity', '0.8');
//             $(self).find('.arrowsInc .arrowDown').css('opacity', '0.8').css('top', '7px');
//             console.log('z')
//         } else {
//             $(self).find('.arrowsInc .arrowUp').css('top', '5px').css('opacity', '0.8');
//             $(self).find('.arrowsInc .arrowDown').css('opacity', '0');
//         }
//         minVal = $(minBtn).val();
//         $(range_min).val(parseInt(minVal));
//         $(self).find('.inputDataMin').text(arr[minVal])
//         console.log('zzz')
//     }
//     $(self).parents('.btn-wrap-medium').find('.rangesList.all').removeClass('select-btn');
//     if ($(self).parents('.rangeslider').find('.min').val() !== '0' || $(self).parents('.rangeslider').find('.max').val() !== '52') {
//         $(self).parents('.btn-wrap-medium').find('.btn-medium').text('Фильтр');
//     } else {
//         $(self).parents('.btn-wrap-medium').find('.btn-medium').text('');
//         if ($(self).parents('.rangeslider').find('.p-p').hasClass('select-btn')) {
//             $(self).parents('.btn-wrap-medium').find('.btn-medium').text('П/п');
//         }
//         if ($(self).parents('.rangeslider').find('.select-btn').length == 1) {
//             $(self).parents('.btn-wrap-medium').find('.rangesList.all').removeClass('select-btn');
//         }
//         if ($(self).parents('.rangeslider').find('.select-btn').length == 0) {
//             $(self).parents('.rangeslider').find('.all').addClass('select-btn');
//         }
//     }
//     $(self).parents('.rangeslider').find('.minBG').css('width', Math.round(minBtn.val() / 0.52, 2) + '%');
// }

// function inputKeyDown(e) {
//     e.preventDefault();
//     $(".sort-menu").off('mouseleave', sortMenuOff);
//     $(".sort-menu").off('mouseenter', sortMenu);
//     $('.btn-wrap').css('visibility', 'hidden');
//     $('.btn-wrap-large').css('visibility', 'hidden');
//     $('.btn-wrap-medium').css('visibility', 'hidden').css('z-index', '999');
//     $('.sort-btn').css('visibility', 'hidden');
//     $('.block-calendary').css('visibility', 'hidden');
//     $('.border-sort').css('opacity', '0');
//     $('.input-style').css('visibility', 'hidden');
//     $('.podlozhka').css('z-index', '998').css('display', 'block');

//     let self = e.currentTarget.self;

//     $(self).parents('.btn-wrap-medium').css('visibility', 'visible');
//     $(self).parents('.btn-wrap-medium').find('.sort-btn').css('visibility', 'visible');
//     $(self).parents('.btn-wrap-medium').find('.border-sort').css('opacity', '1');

//     let rangeGroup = $(self).attr('name');
//     let minBtn = $(self).parents('.rangeslider').find('.min');
//     let maxBtn = $(self).parents('.rangeslider').find('.max');
//     let range_min = $(self).parents('.rangeslider').find('.range_min');
//     let range_max = $(self).parents('.rangeslider').find('.range_max');
//     let minVal = $(minBtn).val();
//     let maxVal = $(maxBtn).val();
//     if (38 === e.keyCode) {
//         maxVal = $(maxBtn).val();
//         if ($(self).parents('.rangeslider').find('input').hasClass('max') && parseInt(maxVal) - 1 > minVal) {
//             $(maxBtn).val(parseInt(maxVal) - 1);
//             $(self).find('.arrowsDec .arrowUp').css('top', '2px').css('opacity', '0.8');
//             $(self).find('.arrowsDec .arrowDown').css('opacity', '0.8').css('top', '7px');

//         } else {
//             $(self).find('.arrowsDec .arrowDown').css('top', '5px').css('opacity', '0.8');
//             $(self).find('.arrowsDec .arrowUp').css('opacity', '0');
//         }

//         $(range_max).val($(maxBtn).val());
//         $(self).find('.inputDataMax').text(arr[$(maxBtn).val()])
//     }
//     if (40 === e.keyCode) {
//         maxVal = $(maxBtn).val();
//         if ($(self).parents('.rangeslider').find('input').hasClass('max')) {
//             $(maxBtn).val(parseInt(maxVal) + 1);
//             $(self).find('.arrowsDec .arrowUp').css('top', '2px').css('opacity', '0.8');
//             $(self).find('.arrowsDec .arrowDown').css('opacity', '0.8').css('top', '7px');
//             if ($(self).parents('.rangeslider').find('.max').val() === '52') {
//                 $(self).find('.arrowsDec .arrowUp').css('top', '5px');
//                 $(self).find('.arrowsDec .arrowDown').css('opacity', '0');
//             }
//         } else {
//             $(self).find('.arrowsDec .arrowDown').css('top', '5px').css('opacity', '0.8');
//             $(self).find('.arrowsDec .arrowUp').css('opacity', '0');
//         }
//         $(range_max).val(parseInt(maxVal) + 1);
//         $(self).find('.inputDataMax').text(arr[parseInt(maxVal) + 1])
//     }
//     $(self).parents('.btn-wrap-medium').find('.rangesList.all').removeClass('select-btn');
//     if ($(self).parents('.rangeslider').find('.min').val() !== '0' || $(self).parents('.rangeslider').find('.max').val() !== '52') {
//         $(self).parents('.btn-wrap-medium').find('.btn-medium').text('Фильтр');
//     } else {
//         $(self).parents('.btn-wrap-medium').find('.btn-medium').text('');
//         if ($(self).parents('.rangeslider').find('.p-p').hasClass('select-btn')) {
//             $(self).parents('.btn-wrap-medium').find('.btn-medium').text('П/п');
//         }
//         if ($(self).parents('.rangeslider').find('.select-btn').length == 1) {
//             $(self).parents('.btn-wrap-medium').find('.rangesList.all').removeClass('select-btn');
//         }
//         if ($(self).parents('.rangeslider').find('.select-btn').length == 0) {
//             $(self).parents('.rangeslider').find('.all').addClass('select-btn');
//         }
//     }

//     console.log('olen')
//     $(self).parents('.rangeslider').find('.maxBG').css('width', 100 - Math.round(maxBtn.val() / 0.52, 2) + '%');
// }

// $('.inc, .dec').on('mousewheel', function(e) {
//     $(".sort-menu").off('mouseleave', sortMenuOff);
//     $(".sort-menu").off('mouseenter', sortMenu);
//     $('.btn-wrap').css('visibility', 'hidden');
//     $('.btn-wrap-large').css('visibility', 'hidden');
//     $('.btn-wrap-medium').css('visibility', 'hidden').css('z-index', '999');
//     $('.sort-btn').css('visibility', 'hidden');
//     $('.block-calendary').css('visibility', 'hidden');
//     $('.border-sort').css('opacity', '0');
//     $('.input-style').css('visibility', 'hidden');
//     $('.podlozhka').css('z-index', '998').css('display', 'block');

//     $(this).parents('.btn-wrap-medium').css('visibility', 'visible');
//     $(this).parents('.btn-wrap-medium').find('.sort-btn').css('visibility', 'visible');
//     $(this).parents('.btn-wrap-medium').find('.border-sort').css('opacity', '1');

//     wDelta = e.originalEvent.wheelDelta < 0 ? 'down' : 'up';
//     let minBtn = $(this).parents('.rangeslider').find('.min');
//     let maxBtn = $(this).parents('.rangeslider').find('.max');
//     if ($(this).hasClass('range_min') && wDelta === 'down' && parseInt(minBtn.val()) + 1 < maxBtn.val()) {
//         minBtn.val(parseInt(minBtn.val()) + 1)
//         $(this).find('.arrowsInc .arrowUp').css('top', '2px').css('opacity', '0.8');
//         $(this).find('.arrowsInc .arrowDown').css('opacity', '0.8').css('top', '7px');
//     } else {
//         if ($(this).parents('.rangeslider').find('.min').val() === '0') {
//             $(this).find('.arrowsInc .arrowUp').css('opacity', '0');
//             $(this).find('.arrowsInc .arrowDown').css('top', '5px');
//         } else {
//             $(this).find('.arrowsInc .arrowUp').css('top', '5px');
//             $(this).find('.arrowsInc .arrowDown').css('opacity', '0');
//         }
//     }
//     if ($(this).hasClass('range_min') && wDelta === 'up' && parseInt(minBtn.val()) - 1 >= 0) {
//         minBtn.val(parseInt(minBtn.val()) - 1)
//         $(this).find('.arrowsInc .arrowUp').css('top', '2px').css('opacity', '0.8');
//         $(this).find('.arrowsInc .arrowDown').css('opacity', '0.8').css('top', '7px');
//         if ($(this).parents('.rangeslider').find('.min').val() === '0') {
//             $(this).find('.arrowsInc .arrowUp').css('opacity', '0');
//             $(this).find('.arrowsInc .arrowDown').css('top', '5px');
//         }
//     }
//     if ($(this).hasClass('range_max') && wDelta === 'down' && parseInt(maxBtn.val()) + 1 <= 52) {
//         maxBtn.val(parseInt(maxBtn.val()) + 1)
//         $(this).find('.arrowsDec .arrowUp').css('top', '2px').css('opacity', '0.8');
//         $(this).find('.arrowsDec .arrowDown').css('opacity', '0.8').css('top', '7px');
//         if ($(this).parents('.rangeslider').find('.max').val() === '52') {
//             $(this).find('.arrowsDec .arrowDown').css('opacity', '0');
//             $(this).find('.arrowsDec .arrowUp').css('top', '5px');
//         }
//     } else {
//         if ($(this).parents('.rangeslider').find('.max').val() === '52') {
//             $(this).find('.arrowsDec .arrowDown').css('opacity', '0');
//             $(this).find('.arrowsDec .arrowUp').css('top', '5px')
//         }
//         if ($(this).parents('.rangeslider').find('.max').val() !== '52') {
//             $(this).find('.arrowsDec .arrowUp').css('opacity', '0');
//             $(this).find('.arrowsDec .arrowDown').css('opacity', '0.8').css('top', '5px');
//         }
//     }
//     if ($(this).hasClass('range_max') && wDelta === 'up' && minBtn.val() < maxBtn.val() - 1) {
//         maxBtn.val(parseInt(maxBtn.val()) - 1)
//         $(this).find('.arrowsDec .arrowUp').css('top', '2px').css('opacity', '0.8');
//         $(this).find('.arrowsDec .arrowDown').css('opacity', '0.8').css('top', '7px');
//         if ($(this).parents('.rangeslider').find('.max').val() === '52') {
//             $(this).find('.arrowsDec .arrowDown').css('opacity', '0');
//             $(this).find('.arrowsDec .arrowUp').css('top', '5px');
//         }
//     } else {
//         if ($(this).parents('.rangeslider').find('.max').val() === '52') {
//             $(this).find('.arrowsDec .arrowDown').css('opacity', '0');
//             $(this).find('.arrowsDec .arrowUp').css('top', '5px');
//         }
//     }
//     $(this).find('.inputDataMin').text(arr[minBtn.val()])
//     $(this).find('.inputDataMax').text(arr[maxBtn.val()])
//     $(this).parents('.rangeslider').find('.minBG').css('width', Math.round(+minBtn.val() / 0.52, 2) + '%');
//     $(this).parents('.rangeslider').find('.maxBG').css('width', +100 - Math.round(maxBtn.val() / 0.52, 2) + '%');

//     $(this).parents('.btn-wrap-medium').find('.rangesList.all').removeClass('select-btn');
//     if ($(this).parents('.rangeslider').find('.min').val() !== '0' || $(this).parents('.rangeslider').find('.max').val() !== '52') {
//         $(this).parents('.btn-wrap-medium').find('.btn-medium').text('Фильтр');
//     } else {
//         $(this).parents('.btn-wrap-medium').find('.btn-medium').text('');
//         if ($(this).parents('.rangeslider').find('.p-p').hasClass('select-btn')) {
//             $(this).parents('.btn-wrap-medium').find('.btn-medium').text('П/п');
//         }
//         if ($(this).parents('.rangeslider').find('.select-btn').length == 1) {
//             $(this).parents('.btn-wrap-medium').find('.rangesList.all').removeClass('select-btn');
//         }
//         if ($(this).parents('.rangeslider').find('.select-btn').length == 0) {
//             $(this).parents('.rangeslider').find('.all').addClass('select-btn');
//         }
//     }
//     e.preventDefault();
// });

// $('.inc, .dec').on('DOMMouseScroll', function(e) {

//     wDelta = e.originalEvent.detail > 0 ? 'down' : 'up';
//     let minBtn = $(this).parents('.rangeslider').find('.min');
//     let maxBtn = $(this).parents('.rangeslider').find('.max');
//     if ($(this).hasClass('range_min') && wDelta === 'down' && parseInt(minBtn.val()) + 1 < maxBtn.val()) {
//         minBtn.val(parseInt(minBtn.val()) + 1)
//         $(this).find('.arrowsInc .arrowUp').css('top', '2px').css('opacity', '0.8');
//         $(this).find('.arrowsInc .arrowDown').css('opacity', '0.8').css('top', '7px');
//     } else {
//         if ($(this).parents('.rangeslider').find('.min').val() === '0') {
//             $(this).find('.arrowsInc .arrowUp').css('opacity', '0');
//             $(this).find('.arrowsInc .arrowDown').css('top', '5px');
//         } else {
//             $(this).find('.arrowsInc .arrowUp').css('top', '5px');
//             $(this).find('.arrowsInc .arrowDown').css('opacity', '0');
//         }
//     }
//     if ($(this).hasClass('range_min') && wDelta === 'up' && parseInt(minBtn.val()) - 1 >= 0) {
//         minBtn.val(parseInt(minBtn.val()) - 1)
//         $(this).find('.arrowsInc .arrowUp').css('top', '2px').css('opacity', '0.8');
//         $(this).find('.arrowsInc .arrowDown').css('opacity', '0.8').css('top', '7px');
//         if ($(this).parents('.rangeslider').find('.min').val() === '0') {
//             $(this).find('.arrowsInc .arrowUp').css('opacity', '0');
//             $(this).find('.arrowsInc .arrowDown').css('top', '5px');
//         }
//     }
//     if ($(this).hasClass('range_max') && wDelta === 'down' && parseInt(maxBtn.val()) + 1 <= 52) {
//         maxBtn.val(parseInt(maxBtn.val()) + 1)
//         console.log('r')
//         $(this).find('.arrowsDec .arrowUp').css('top', '2px').css('opacity', '0.8');
//         $(this).find('.arrowsDec .arrowDown').css('opacity', '0.8').css('top', '7px');
//         if ($(this).parents('.rangeslider').find('.max').val() === '52') {
//             $(this).find('.arrowsDec .arrowDown').css('opacity', '0');
//             $(this).find('.arrowsDec .arrowUp').css('top', '5px');
//         }
//     } else {
//         if ($(this).parents('.rangeslider').find('.max').val() === '52') {
//             $(this).find('.arrowsDec .arrowDown').css('opacity', '0');
//             $(this).find('.arrowsDec .arrowUp').css('top', '5px')
//         }
//         if ($(this).parents('.rangeslider').find('.max').val() !== '52') {
//             $(this).find('.arrowsDec .arrowUp').css('opacity', '0');
//             $(this).find('.arrowsDec .arrowDown').css('opacity', '0.8').css('top', '5px');
//         }
//     }
//     if ($(this).hasClass('range_max') && wDelta === 'up' && minBtn.val() < maxBtn.val() - 1) {
//         maxBtn.val(parseInt(maxBtn.val()) - 1)
//         $(this).find('.arrowsDec .arrowUp').css('top', '2px').css('opacity', '0.8');
//         $(this).find('.arrowsDec .arrowDown').css('opacity', '0.8').css('top', '7px');
//         if ($(this).parents('.rangeslider').find('.max').val() === '52') {
//             $(this).find('.arrowsDec .arrowDown').css('opacity', '0');
//             $(this).find('.arrowsDec .arrowUp').css('top', '5px');
//         }
//     } else {
//         console.log('zzzz')
//         if ($(this).parents('.rangeslider').find('.max').val() === '52') {
//             $(this).find('.arrowsDec .arrowDown').css('opacity', '0');
//             $(this).find('.arrowsDec .arrowUp').css('top', '5px');
//         }
//     }
//     $(this).find('.inputDataMin').text(arr[minBtn.val()])
//     $(this).find('.inputDataMax').text(arr[maxBtn.val()])
//     $(this).parents('.rangeslider').find('.minBG').css('width', Math.round(+minBtn.val() / 0.52, 2) + '%');
//     $(this).parents('.rangeslider').find('.maxBG').css('width', +100 - Math.round(maxBtn.val() / 0.52, 2) + '%');

//     $(this).parents('.btn-wrap-medium').find('.rangesList.all').removeClass('select-btn');
//     if ($(this).parents('.rangeslider').find('.min').val() !== '0' || $(this).parents('.rangeslider').find('.max').val() !== '52') {
//         $(this).parents('.btn-wrap-medium').find('.btn-medium').text('Фильтр');
//     } else {
//         $(this).parents('.btn-wrap-medium').find('.btn-medium').text('');
//         if ($(this).parents('.rangeslider').find('.p-p').hasClass('select-btn')) {
//             $(this).parents('.btn-wrap-medium').find('.btn-medium').text('П/п');
//         }
//         if ($(this).parents('.rangeslider').find('.select-btn').length == 1) {
//             $(this).parents('.btn-wrap-medium').find('.rangesList.all').removeClass('select-btn');
//         }
//         if ($(this).parents('.rangeslider').find('.select-btn').length == 0) {
//             $(this).parents('.rangeslider').find('.all').addClass('select-btn');
//         }
//     }
//     e.preventDefault();
// });
// })()