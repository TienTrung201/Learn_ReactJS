import logger  from './logger2.js' // Dùng khi có export default
// /import {TYPE_LOG, TYPE_WARN, TYPE_ERROR} from './cach2/logger3.js'//Dùng khi k có có export default 

import * as logger3 from './cach2/logger3.js' // impot tất cả TYPE_LOG, TYPE_WARN, TYPE_ERROR từ  logger3.js
logger('test mesage', logger3.TYPE_ERROR)
console.log(logger3) 
