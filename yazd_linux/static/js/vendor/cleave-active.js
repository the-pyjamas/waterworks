// cleave js activation start
function cardMonthYear(containerId) {
    if (jQuery(`#${containerId}`).length > 0) {
        var dateCleave = new Cleave(`#${containerId}`, {
            date: true,
            datePattern: ['m', 'y']
        });
    }
}
cardMonthYear("cardmmyy");
cardMonthYear("cardmmyy2");

function cardCvvCode(containerId) {
    if (jQuery(`#${containerId}`).length > 0) {
        var cvvCleave = new Cleave(`#${containerId}`, {
            delimiter: '',
            blocks: [3],
        });
    }
}
cardCvvCode("cvvcode");
cardCvvCode("cvvcode2");

// if (jQuery("#creditCard").length > 0) {
//     var cleave = new Cleave('#creditCard', {
//         creditCard: true,
//         onCreditCardTypeChanged: function (type) {
//             var creditCardLogo = document.getElementById('creditCardLogo',);
//             switch (type) {
//                 case 'visa':
//                     creditCardLogo.className = 'ri-visa-line'; // FontAwesome class for Visa
//                     break;
//                 case 'mastercard':
//                     creditCardLogo.className = 'ri-mastercard-line'; // FontAwesome class for MasterCard
//                     break;
//                 case 'amex':
//                     creditCardLogo.className = 'icon-amex'; // FontAwesome class for American Express
//                     break;
//                 case 'discover':
//                     creditCardLogo.className = 'icon-discover'; // FontAwesome class for Discover
//                     break;
//                 case 'jcb':
//                     creditCardLogo.className = 'icon-jcb'; // FontAwesome class for Discover
//                     break;
//                 case 'diners':
//                     creditCardLogo.className = 'icon-diners'; // FontAwesome class for Discover
//                     break;
//                 default:
//                     creditCardLogo.className = ''; // Clear the class if no matching type is found
//                     break;
//             }
//         }
//     });
// }

// if (jQuery("#creditCard2").length > 0) {
//     var cleave = new Cleave('#creditCard2', {
//         creditCard: true,
//         onCreditCardTypeChanged: function (type) {
//             var creditCardLogo2 = document.getElementById('creditCardLogo2');
//             switch (type) {
//                 case 'visa':
//                     creditCardLogo2.className = 'ri-visa-line'; // FontAwesome class for Visa
//                     break;
//                 case 'mastercard':
//                     creditCardLogo2.className = 'ri-mastercard-line'; // FontAwesome class for MasterCard
//                     break;
//                 case 'amex':
//                     creditCardLogo2.className = 'icon-americanexpress'; // FontAwesome class for American Express
//                     break;
//                 case 'discover':
//                     creditCardLogo2.className = 'icon-discover'; // FontAwesome class for Discover
//                     break;
//                 default:
//                     creditCardLogo2.className = ''; // Clear the class if no matching type is found
//                     break;
//             }
//         }
//     });
// }
// cleave js activation end


if (jQuery("#creditCard").length > 0) {
    var cleave = new Cleave('#creditCard', {
        creditCard: true,
        onCreditCardTypeChanged: function (type) {
            var creditCardLogo = document.getElementById('creditCardLogo');
            var logoMap = {
                'visa': 'assets/images/payment/visa.png',
                'mastercard': 'assets/images/payment/mastercard.png',
                'amex': 'assets/images/payment/amex.png',
                'discover': 'assets/images/payment/discover.png',
                'jcb': 'assets/images/payment/jcb.png',
                'diners': 'assets/images/payment/dinersclub.png'
            };

            if (type in logoMap) {
                creditCardLogo.src = logoMap[type];
                creditCardLogo.style.display = 'inline-block';
            } else {
                creditCardLogo.src = '';
                creditCardLogo.style.display = 'none';
            }
        }
    });
}
