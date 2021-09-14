const getErrors = (erros: Array<any>) => {
    return erros.map(e=> {
        if(Array.isArray(e) ){
            return getErrors(e);
        }
        return `<i>${e}</i>`
    })
}

const getErrorsUl = (errors: Array<any> | string) => {
    console.log('este es mi error')
    console.log(errors);
    return `<ul>${Array.isArray(errors) ? getErrors(errors): `<li> ${errors}</li>`}</ul>`;
}

export {
    getErrorsUl
}