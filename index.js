function handleFormSubmit(event) {
    event.preventDefault()

    const amount = event.target.amount.value
    const description = event.target.description.value
    const category = event.target.category.value


    const mainList = document.querySelector('#addList')

    //Creating lists
    const list = document.createElement('li')
    list.innerHTML = `<br> ${amount}-${description}-${category} `
    mainList.appendChild(list) 

    //Creating delete button
    const deleteButton = document.createElement('button')
    const deleteButtonText = document.createTextNode('delete Expense')
    deleteButton.appendChild(deleteButtonText)
    list.appendChild(deleteButton)

    deleteButton.addEventListener('click', function() {
        list.remove()
        localStorage.removeItem(description)
    })

    //creating edit button
    const editButton = document.createElement('button')
    const editButtonText = document.createTextNode('Edit expense')
    editButton.appendChild(editButtonText)
    list.appendChild(editButton)

    editButton.addEventListener('click', function() {

        list.remove()
        localStorage.removeItem(description)

        event.target.amount.value = amount
        event.target.description.value = description
        event.target.category.value = category
    })

    const obj = {
        Expenseamount: amount,
        description: description,
        category: category
    }

    const myObj = JSON.stringify(obj)
    localStorage.setItem(description, myObj)

    event.target.reset()
}