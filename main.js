const container = document.querySelector(".customers")

// just get the first thing, just for starters to make it easier to reason about
let customer = customers[0]

console.log("customer title is ", customer.name.title)
console.log("customer imgsrc is ", customer.picture.thumbnail)


for (let customer of customers){
    const newDiv = document.createElement("div")
    newDiv.classname = 'profile'

    const customerImg = document.createElement("img")
    customerImg.src= customer.picture.thumbnail
    newDiv.appendChild (customerImg)

    const customerName= document.createElement("h3")
    customerName.innerText= `name: ${customer.name.first} ${customer.name.last}`
    // issue not displaying the linked text ^
    newDiv.appendChild (customerName)

    const customerEmail= document.createElement("h4")
    customerEmail.innerText = customer.email
    newDiv.appendChild (customerEmail)

    const customerPhone= document.createElement("h4")
    customerPhone.innerText = customer.phone
    newDiv.appendChild(customerPhone)


    const customerAddress= document.createElement("h4")
    customerAddress.innerText = `address: ${customer.location.street.number} ${customer.location.street.name} ${customer.location.city},  ${customer.location.postcode} ${nameToAbbr(customer.location.state)} ${customer.location.country}`
    newDiv.appendChild (customerAddress)

    const customerBirthday= document.createElement("h4")
    customerBirthday.innerText = moment (customer.dob.date)
    // format ('ll')
    // displays [object Object] ^
    newDiv.appendChild (customerBirthday)

    const customerSince = document.createElement("h4")
    customerSince.innerText= `Customer since: `
    newDiv.appendChild (customerSince)

    // newDiv.appendChild (customerImg)
    // newDiv.appendChild (customerName)
    // newDiv.appendChild (customerEmail)
    // newDiv.appendChild (customerPhone)
    // newDiv.appendChild (customerAddress)
    // newDiv.appendChild (customerBirthday)
    // newDiv.appendChild (customerSince)




    container.appendChild (newDiv)
    // ^ newDiv method
}



