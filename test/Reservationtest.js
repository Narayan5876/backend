const reservation = require('../models/reservation');
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

describe('reservation Schema test anything', () => {
//the code below is for insert testing
    it('Add reservation testing anything', () => {
        const reservations = {
            'fullname': 'narayan',
            'email':'naran@gmail.com',
            'phone':'9849635014',
            'checkin':'20/2/2020',
            'checkout':'21/2/2020',
            'noofrooms':'1',
            'noofadult':'1',
            'children':'1',
            'roomtype':'single'

            
            
        };
        
        return reservation.create(reservations)
            .then((pro_ret) => {
                expect(pro_ret.fullname).toEqual('narayan');
                expect(pro_ret.email).toEqual('naran@gmail.com');
                expect(pro_ret.phone).toEqual('9849635014');
                expect(pro_ret.checkin).toEqual('20/2/2020');
                expect(pro_ret.checkout).toEqual('21/2/2020');
                expect(pro_ret.noofrooms).toEqual('1');
                expect(pro_ret.noofadult).toEqual('1');
                expect(pro_ret.children).toEqual('1');
                expect(pro_ret.roomtype).toEqual('single');
            });
    });

    
//the code below is for delete testing
    it('to test the delete product is working or not', async () => {
        const status = await reservation.deleteMany();
        expect(status.ok).toBe(1);
});






 it('to test the update', async () => {

    return reservation.findOneAndUpdate({_id :Object('5e48fdd92e6cac671892d063')}, {$set : {fullname:'ram',email:'naran@1gmail.com',phone:'9849',
    checkin:'20/2/2020',checkout:'20/2/2020',noofrooms:'2',noofadult:'2',children:'0',roomtype:'single'}})
    .then((pp)=>{
        expect(pp.fullname).toEqual('ram'),
        expect(pp.email).toEqual('naran@1gmail.com'),
        expect(pp.phone).toEqual('9849'),
        expect(pp.checkin).toEqual('20/2/2020'),
        expect(pp.checkout).toEqual('20/2/2020'),
        expect(pp.noofrooms).toEqual('2'),
        expect(pp.noofadult).toEqual('2'),
        expect(pp.children).toEqual('0'),
        expect(pp.roomtype).toEqual('single')

    })
  
});

    
 })
