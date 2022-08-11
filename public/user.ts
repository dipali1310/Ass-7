
enum Role {
    SUPERADMIN = 'SUPERADMIN',
    ADMIN = 'ADMIN',
    SUBSCRIBER = 'SUBSCRIBER'
}

class User {
    

    constructor(public id: number,public first_name:string, public middle_name :string, public last_name:string,public email:string,
        public phone_number: string,public role: string, public address: string)
    {
 
    }
 }

export { User, Role };