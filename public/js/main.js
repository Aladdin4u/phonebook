const deleteBtn = document.querySelectorAll('.del')
const editItem = document.querySelectorAll('span.not')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deletePhonebook)
})

Array.from(editItem).forEach((el)=>{
    el.addEventListener('click', editPhonebook)
})

async function deletePhonebook(){
    const pbId = this.parentNode.dataset.id
    try{
        const response = await fetch('Phonebooks/deletePhonebook', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'PhonebookIdFromJSFile': pbId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function editPhonebook(){
    const pbId = this.parentNode.dataset.id
    try{
        const response = await fetch('Phonebooks/editPhonebook', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'PhonebookIdFromJSFile': pbId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}