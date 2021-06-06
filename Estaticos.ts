class Requestor{

    //Se crea una unica copia de la variable y no mas osea no se modifica
    static url: string = 'https://api.com';

    getCourses(){
        console.log(`${Requestor.url}/cursos`);
    }

    getArticles(){
        console.log(`${Requestor.url}/articles`);
    }
}