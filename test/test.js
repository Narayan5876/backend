const room = require('../models/room');
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

describe('room Schema test anything', () => {
//the code below is for insert testing
    it('Add room testing anything', () => {
        const rooms = {
            'roomaddress':'ktm',
            'roomtype':'5star',
            'roomavialable':'yes',
            'price':'20$',
            'description':'abc',
            'Image':'a.jpg'
            

            
            
        };
        
        return room.create(rooms)
            .then((pro_ret) => {
                expect(pro_ret.roomaddress).toEqual('ktm');
                expect(pro_ret.roomtype).toEqual('5star');
                expect(pro_ret.roomavialable).toEqual('yes');
                expect(pro_ret.price).toEqual('20$');
                expect(pro_ret.description).toEqual('abc');
                expect(pro_ret.Image).toEqual('a.jpg');
              
            });
    });

    
//the code below is for delete testing
    it('to test the delete product is working or not', async () => {
        const status = await reservation.deleteMany();
        expect(status.ok).toBe(1);
});





 // for update
 it('to test the update', async () => {

    return room.findOneAndUpdate({_id :Object('5e49065a1f29210ba4715c1e')}, {$set : {roomaddress:'a',roomtype:'a',roomavialable:'No',
    price:'10$',description:'a',Image:'single.jpg'}})
    .then((pp)=>{
        expect(pp.roomaddress).toEqual('a'),
        expect(pp.roomtype).toEqual('a'),
        expect(pp.roomavialable).toEqual('No'),
        expect(pp.pricepernight).toEqual('10$'),
       
        expect(pp.description).toEqual('a'),
        expect(pp.Image).toEqual('single.jpg')

    })
  
});

    
 })
