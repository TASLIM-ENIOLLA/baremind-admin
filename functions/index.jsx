export const parseFormData = (formDataObject) => {
    const formData = new FormData()

    for(let prop in formDataObject){
        formData.append(prop, formDataObject[prop])
    }

    return formData
}