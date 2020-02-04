const Product = require('../models/user');
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
    // it('Add user testing anything', () => {
    //     const users = {
    //         'fullname': 'naran',
            
    //     };
        
    //     return Product.create(users)
    //         .then((pro_ret) => {
    //             expect(pro_ret.fullname).toEqual('naran');
    //         });
    // });

    
// the code below is for delete testing
    it('to test the delete product is working or not', async () => {
        const status = await Product.deleteMany();
        expect(status.ok).toBe(1);
});






// it('to test the update', async () => {

//     return Product.findOneAndUpdate({_id :Object('5e391005689b62e719a1e394')}, {$set : {fullname:'ram'}})
//     .then((pp)=>{
//         expect(pp.fullname).toEqual('ram')
//     })
  
// });

    
 })
