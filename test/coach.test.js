let chai = require('chai');
let chai_http = require('chai-http');
var should = chai.should()
chai.use(chai_http)
let server = require('../index')

describe('Coach', () => {
    describe('GET /api/coach', () => {
        it('it should GET all the coaches', (done) => {
            chai.request(server)
                .get('/api/coach')
                .end((err, res) => {
                    (res).should.have.status(200);
                    (done);
                });
        })
    })
});
