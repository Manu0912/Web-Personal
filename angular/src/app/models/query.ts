
export class QueryForm {

    constructor(_id ='' ,name='', lastname='', email='',title = '', message='', show = false){
        this._id = _id
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.title = title;
        this.message = message;
        this.show = show
    }

    _id: string;
    name: string;
    lastname: string;
    email: string;
    title: string;
    message: string;
    show: boolean
}
