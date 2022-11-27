const area = document.getElementsByClassName('product-info')[0]
let priceNode = document.getElementsByClassName('product-price-value')[0]
const priceNodeSale = document.getElementsByClassName('uniform-banner-box-price')[0]
if (priceNodeSale && !priceNodeSale.textContent.includes(' - ')) priceNode = priceNodeSale
const shippingNode = document.getElementsByClassName('dynamic-shipping-titleLayout')[0]
const el = document.createElement('div')

function getFloat(val) {
    if (isNaN(val) && (val = val.match(/([0-9\.,]+\d)/g))) {
        val = val[0].replace(/[^\d\.]+/g, '')
    }
    return parseFloat(val)
}

function getTotal() {
    const price = getFloat(priceNode.textContent)
    const shipping = getFloat(shippingNode.textContent) || 0
    const total = price + shipping
    return (Math.round((total + Number.EPSILON) * 100) / 100)
}

function update() {
    setTimeout(function() {
        el.innerHTML = `<div style="font-size: 20px; font-weight: bold; padding: 12px 0;">
                Total: $${getTotal()}
            </div>`
    }, 250)
}

shippingNode.parentNode.insertBefore(el, shippingNode.nextSibling)
area.addEventListener('click', update)
update()