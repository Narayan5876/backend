const user = require('../models/user');
const mongoose = require('mongoose');
// use the new name of the database
const url = 'mongodb://localhost:27017/hoteltesting'; 
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});

afterAll(async () => {

    await mongoose.connection.close();
});

describe('user Schema test anything', () => {
// the code below is for insert testing
    it('Add user testing anything', () => {
        const users = {
            'fullname': 'narayan',
            'email':'naran@gmail.com'
            
            
        };
        
        return user.create(users)
            .then((pro_ret) => {
                expect(pro_ret.fullname).toEqual('narayan');
                expect(pro_ret.email).toEqual('naran@gmail.com');
            });
    });

    
//the code below is for delete testing
//     it('to test the delete product is working or not', async () => {
//         const status = await user.deleteMany();
//         expect(status.ok).toBe(1);
// });






//  it('to test the update', async () => {

//     return user.findOneAndUpdate({_id :Object('5e391005689b62e719a1e394')}, {$set : {fullname:'ram',email:'naran@1gmail.com'}})
//     .then((pp)=>{
//         expect(pp.fullname).toEqual('ram')
//         expect(pp.email).toEqual('naran@1gmail.com')
//     })
  
// });

    
 })
