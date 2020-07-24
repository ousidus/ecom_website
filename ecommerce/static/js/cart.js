var updateBtns = document.getElementsByClassName('update-cart')

for (i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function() {
        var productID = this.dataset.product
        var action = this.dataset.action
        console.log('product id: ', productID, 'Action: ', action)

        console.log('User: ', user)
        if (user === 'AnonymousUser') {
            console.log('User is not authenticated')
        } else {
            updateUserOrder(productID, action)
        }
    })
}

function updateUserOrder(productID, action) {
    console.log('User is authenticated, sending')

    var url = '/update_item/'

    fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'productID': productID, 'action': action })
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log('Data: ', data)
        });
}