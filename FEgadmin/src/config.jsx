
var axios = require('axios');

// Accessing API of glgBackend
var axiosInstance = axios.create({
    baseURL: (process.env.NODE_ENV !== 'production') ? 'http://localhost:3000/api/v1' : '',
    timeout: 72000,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NTcyMDU5Mzl9.rtuJopOdiRM5QF3N7QeOJ4LMf296CxmealRON-CKC3U' 
    }
});

module.exports = axiosInstance;