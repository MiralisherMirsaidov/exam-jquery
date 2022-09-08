let data

drove()
function drove() {

    $.ajax("https://myjson.dit.upm.es/api/bins/j8nl", {
        success: (res) => {
            console.log(res);
            data = res
            cardadd(data)
        },
        error: (err) => {
            console.log(err);
        }
    })
}

function cardadd(param) {
    $('.chiz').html('')
    let count = 0
    param.map((arr) => {
        count++
        let col = `<div class="col-4 mb-4">
                <div class="card border border-primary text-center w-75 p-4">
                    <img class="img-fluid" src="${arr.img_src}" alt="${arr.name}">
                    <h4 class="text-primary fw-bold">${arr.name}</h4>
                    <h4 class="text-primary fw-bold">${arr.cost}</h4>
                    <button onclick="buy(${count})"  class="btn btn-primary">Sotib olish</button>
                </div>
            </div>`
        $(".chiz").append(col);
    })
}


// Search start

function searchFuncsion(text) {
    let result = data.filter((arr) => {
        return arr.name.toLowerCase().includes(text.value.toLowerCase())
    })
    cardadd(result)
    console.log(result);
}

// Search end




// Dan gacha start

let dan = $(".dan")
let gacha = $(".gacha")


function searchPrice() {
    let resultPrice = data.filter((arr) => {
        return arr.cost >= dan.val() && arr.cost <= gacha.val()
    })
    cardadd(resultPrice)
}

// Dan gacha end




// Sotib olish start

let savatcha = []
function buy(val) {
        let count = 0
        let buy = data.filter((arr) => {
            count++
            return val == count
        })
    savatcha.push(buy)
        console.log(buy);
    $(".badge").text(savatcha.length)
    }

// Sotib olish end
