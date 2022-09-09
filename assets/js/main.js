


function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


// var ===========

let burger = document.querySelector('.burger');
let aside = document.querySelector('.aside');
let aside_inner = document.querySelector('.aside_inner');
let body = document.querySelector('body');





// window.onscroll = function () {
//     scrollPosition = Math.round(window.scrollY);

//     if (scrollPosition > 150) {
//         document.querySelector('.header').classList.add('stick');
//     } else {
//         document.querySelector('.header').classList.remove('stick');
//     }
// };



window.onclick = function (e) {

    if (aside != undefined) {
        if (aside.classList.contains('active') && !e.target.closest('.mobile_search')) {
            aside.classList.remove('active')
            aside_inner.classList.remove('active')
            body.classList.remove('active')
        }
    }

    // if (nav_inner != undefined) {
    //     if (nav_inner.classList.contains('active') && !e.target.closest('.nav_inner')) {
    //         nav_inner.classList.remove('active')
    //     }
    // }

    // if (lang != undefined) {
    //     if (lang.classList.contains('active') && !e.target.closest('.current_lang')) {
    //         lang.classList.remove('active')
    //     }
    // }

    // nav_group_drop.forEach(nav_group_drop => {
    //     if (nav_group_drop != undefined) {
    //         nav_group_drop.classList.contains('active') && !e.target.closest('.nav_group-inner') && !e.target.closest('.nav_group-link');
    //         nav_group_drop.classList.remove('active')
    //     }
    // }
    // );

}


// if (card_icon != undefined) {
//     card_icon.addEventListener('click', function () {
//         sleep(2).then(() => {
//             food_box.classList.add('card');
//             card_icon.classList.add('active');
//             row_icon.classList.remove('active');
//         });
//     });
// }


// let panel = this.nextElementSibling;

// if (nav_group_label != undefined) {
//     nav_group_label.forEach(r => {
//         r.addEventListener('click', function () {
//             sleep(2).then(() => {
//                 // nav_group_drop.forEach(p => {
//                 //     p.classList.remove('active');
//                 // })
//                 this.nextElementSibling.classList.toggle("active");
//             })
//         });
//     });
// }


if (burger != undefined) {
    burger.addEventListener('click', function () {
        sleep(2).then(() => {
            aside.classList.add('active');
            aside_inner.classList.add('active');
            body.classList.add('active');
        });
    });
}

// if (current_lang != undefined) {
//     current_lang.addEventListener('click', function () {
//         sleep(2).then(() => {
//             lang.classList.toggle('active');
//         });
//     });
// }