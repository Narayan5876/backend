const query= require('../models/query');
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

describe('query Schema test anything', () => {
//the code below is for insert testing
    it('Add query testing anything', () => {
        const querys = {
            'fullname':'a',
            'email':'2',
            'phone':'2',
            'query':'q',
            
            

            
            
        };
        
        return query.create(querys)
            .then((pro_ret) => {
                expect(pro_ret.fullname).toEqual('a');
                expect(pro_ret.email).toEqual('2');
                expect(pro_ret.phone).toEqual('2');
                expect(pro_ret.query).toEqual('q');
               
              
            });
    });

    
//the code below is for delete testing
    it('to test the delete product is working or not', async () => {
        const status = await reservation.deleteMany();
        expect(status.ok).toBe(1);
});





 // for update room
 it('to test the update', async () => {

    return room.findOneAndUpdate({_id :Object('5e490857c7f27c6b9c308409')}, {$set : {fullname:'a',email:'a',phone:'No',
    query:'10$'}})
    .then((pp)=>{
        expect(pp.fullname).toEqual('a'),
        expect(pp.email).toEqual('a'),
        expect(pp.phone).toEqual('No'),
        expect(pp.query).toEqual('10$'),
       
        expect(pp.description).toEqual('a'),
        expect(pp.Image).toEqual('single.jpg')

    })
  
});

    
 })
