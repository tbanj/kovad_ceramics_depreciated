import http from './httpService.js';
import env from "../../env.js";
const qs = require('querystring')

class EnquiryService {
    create(body) {


        return http.post(`${env.api_mail}/mail/excellent`, qs.stringify(body), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }

}
export default EnquiryService