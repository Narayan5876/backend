const hotel = require('../models/hotel');
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

describe('hotel Schema test anything', () => {
//the code below is for insert testing
    // it('Add hotel testing anything', () => {
    //     const hotels = {
    //         'hotelname':'sangrila',
    //         'hoteltype':'5star',
    //         'roomavialable':'yes',
    //         'phone':'9849',
    //         'address': 'ktm',
    //         'email':'s@gmail.com',
    //         'pricepernight':'20$',
    //         'description':'abc',
    //         'Image':'a.jpg'
            

            
            
    //     };
        
    //     return hotel.create(hotels)
    //         .then((pro_ret) => {
    //             expect(pro_ret.hotelname).toEqual('sangrila');
    //             expect(pro_ret.hoteltype).toEqual('5star');
    //             expect(pro_ret.roomavialable).toEqual('yes');
    //             expect(pro_ret.phone).toEqual('9849');
    //             expect(pro_ret.address).toEqual('ktm');
    //             expect(pro_ret.email).toEqual('s@gmail.com');
    //             expect(pro_ret.pricepernight).toEqual('20$');
    //             expect(pro_ret.description).toEqual('abc');
    //             expect(pro_ret.Image).toEqual('a.jpg');
              
    //         });
    // });

    
//the code below is for delete testing
//     it('to test the delete product is working or not', async () => {
//         const status = await reservation.deleteMany();
//         expect(status.ok).toBe(1);
// });






 it('to test the update', async () => {

    return hotel.findOneAndUpdate({_id :Object('5e4902bb4ff49622f06d9015')}, {$set : {hotelname:'sangrila',hoteltype:'3star',roomavialable:'No',
    pricepernight:'10$',phone:'2',email:'sangrila@gmail.com',address:'prk',description:'as',Image:'single.jpg'}})
    .then((pp)=>{
        expect(pp.hotelname).toEqual('sangrila@gmail.com'),
        expect(pp.hoteltype).toEqual('3star'),
        expect(pp.roomavialable).toEqual('No'),
        expect(pp.pricepernight).toEqual('10$'),
        expect(pp.phone).toEqual('2'),
        expect(pp.email).toEqual('sangrila@gmail.com'),
        expect(pp.address).toEqual('prk'),
        expect(pp.description).toEqual('as'),
        expect(pp.Image).toEqual('single.jpg')

    })
  
});

    
 })
