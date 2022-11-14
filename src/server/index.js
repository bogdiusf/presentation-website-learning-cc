const express = require("express");
const serverless = require("serverless-http");

const sentData = [
    {
        id: 1,
        employee_name: 'Tiger Nixon',
        employee_salary: 320800,
        employee_age: 61,
        profile_image:
            'https://i.picsum.photos/id/179/200/200.jpg?hmac=I0g6Uht7h-y3NHqWA4e2Nzrnex7m-RceP1y732tc4Lw'
    },
    {
        id: 2,
        employee_name: 'Garrett Winters',
        employee_salary: 170750,
        employee_age: 63,
        profile_image:
            'https://i.picsum.photos/id/574/200/200.jpg?hmac=FEtVtwDe1Lw5Wf-TLq6Lx-TgX_grSLX4lB7WvjRzroA'
    },
    {
        id: 3,
        employee_name: 'Ashton Cox',
        employee_salary: 86000,
        employee_age: 66,
        profile_image:
            'https://i.picsum.photos/id/112/200/200.jpg?hmac=a8Ve-HhSWAKC-SNBLKVosZ5gHmqMhgtNkPMYVMjEAbI'
    },
    {
        id: 4,
        employee_name: 'Cedric Kelly',
        employee_salary: 433060,
        employee_age: 22,
        profile_image:
            'https://i.picsum.photos/id/784/200/200.jpg?hmac=5EDfQlW8ug7LDGI9M8P-ywBxc0DWi9OzpGMATZiYPdQ'
    },
    {
        id: 5,
        employee_name: 'Airi Satou',
        employee_salary: 162700,
        employee_age: 33,
        profile_image:
            'https://i.picsum.photos/id/46/200/200.jpg?hmac=lUGWM3WNJB0TQ-OXq3KI1x-TPgKIuViXG4lKHiCGbao'
    },
    {
        id: 6,
        employee_name: 'Brielle Williamson',
        employee_salary: 372000,
        employee_age: 61,
        profile_image:
            'https://i.picsum.photos/id/680/200/200.jpg?hmac=jlYrp1rK5RIQZTIaHkTW2llzrRXtuYJLeprOC8i40os'
    },
    {
        id: 7,
        employee_name: 'Herrod Chandler',
        employee_salary: 137500,
        employee_age: 59,
        profile_image:
            'https://i.picsum.photos/id/824/200/200.jpg?hmac=Uozb__ejlYDEziPN80UpSs6tvyqjiIyjnWYj9gaPP-Y'
    },
    {
        id: 8,
        employee_name: 'Rhona Davidson',
        employee_salary: 327900,
        employee_age: 55,
        profile_image:
            'https://i.picsum.photos/id/22/200/200.jpg?hmac=A_6iPTnt4dXFc2T3FQKaATIql7N3Hu_8qGQcdTeBweY'
    },
    {
        id: 9,
        employee_name: 'Colleen Hurst',
        employee_salary: 205500,
        employee_age: 39,
        profile_image:
            'https://i.picsum.photos/id/214/200/200.jpg?hmac=hcznBngs7e7PmNwXcM4UioAhb1oOUpfGDzBM-qSgpp4'
    },
    {
        id: 10,
        employee_name: 'Sonya Frost',
        employee_salary: 103600,
        employee_age: 23,
        profile_image:
            'https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU'
    },
    {
        id: 11,
        employee_name: 'Jena Gaines',
        employee_salary: 90560,
        employee_age: 30,
        profile_image:
            'https://i.picsum.photos/id/161/200/200.jpg?hmac=67RAUzlqjfTvEM9tZ3K0ZMB1mAOXZZULGVHKjt1pmPs'
    },
    {
        id: 12,
        employee_name: 'Quinn Flynn',
        employee_salary: 342000,
        employee_age: 22,
        profile_image:
            'https://i.picsum.photos/id/445/200/200.jpg?hmac=IJGybzd6hRYuiwyBiBXZ_3cOjM0MrrTpARBSFzypGNI'
    },
    {
        id: 13,
        employee_name: 'Charde Marshall',
        employee_salary: 470600,
        employee_age: 36,
        profile_image:
            'https://i.picsum.photos/id/379/200/200.jpg?hmac=bhNTvgVJE_n3o0554kDDTfQtblCx2XUUn5oiwwz5ni8'
    },
    {
        id: 14,
        employee_name: 'Haley Kennedy',
        employee_salary: 313500,
        employee_age: 43,
        profile_image:
            'https://i.picsum.photos/id/191/200/200.jpg?hmac=0yPY5OQGEF0XPPEkx05efIdXkcK3lfiDZgl-babckVM'
    },
    {
        id: 15,
        employee_name: 'Tatyana Fitzpatrick',
        employee_salary: 385750,
        employee_age: 19,
        profile_image:
            'https://i.picsum.photos/id/111/200/200.jpg?hmac=2DNMKguV-lXKA_jHBWdu9jslPAWBBtS6wWSUdu-WSiI'
    },
    {
        id: 16,
        employee_name: 'Michael Silva',
        employee_salary: 198500,
        employee_age: 66,
        profile_image:
            'https://i.picsum.photos/id/776/200/200.jpg?hmac=Rq9krBqm0Qss3AbgE4BjL1Iu891xLPTkf1xNf0ezp38'
    },
    {
        id: 17,
        employee_name: 'Paul Byrd',
        employee_salary: 725000,
        employee_age: 64,
        profile_image:
            'https://i.picsum.photos/id/564/200/200.jpg?hmac=uExb18W9rplmCwAJ9SS5NVsLaurpaCTCBuHZdhsW25I'
    },
    {
        id: 18,
        employee_name: 'Gloria Little',
        employee_salary: 237500,
        employee_age: 59,
        profile_image:
            'https://i.picsum.photos/id/649/200/200.jpg?hmac=tj148mYv7Me5ctSyCePc_TNjma4W3n3RwnqJcIogLoI'
    },
    {
        id: 19,
        employee_name: 'Bradley Greer',
        employee_salary: 132000,
        employee_age: 41,
        profile_image:
            'https://i.picsum.photos/id/243/200/200.jpg?hmac=fW5ZwzzyTBy2t2MROp988oq12mZnKwN0coFLhZEE87s'
    },
    {
        id: 20,
        employee_name: 'Dai Rios',
        employee_salary: 217500,
        employee_age: 35,
        profile_image:
            'https://i.picsum.photos/id/676/200/200.jpg?hmac=hgeMQEIK4Mn27Q2oLRWjXo1rgxwTbk1CnJE954h_HyM'
    },
    {
        id: 21,
        employee_name: 'Jenette Caldwell',
        employee_salary: 345000,
        employee_age: 30,
        profile_image:
            'https://i.picsum.photos/id/696/200/200.jpg?hmac=JE4lFckorKxM41-eM1nTxXjpOeCf3aZkAxrLl3ZAYI0'
    },
    {
        id: 22,
        employee_name: 'Yuri Berry',
        employee_salary: 675000,
        employee_age: 40,
        profile_image:
            'https://i.picsum.photos/id/193/200/200.jpg?hmac=JHo5tWHSRWvVbL3HX6rwDNdkvYPFojLtXkEGEUCgz6A'
    },
    {
        id: 23,
        employee_name: 'Caesar Vance',
        employee_salary: 106450,
        employee_age: 21,
        profile_image:
            'https://i.picsum.photos/id/544/200/200.jpg?hmac=iIsE7MkJ1i0DzyQjD7hXFjiVpz8uukzJTk9XCNuWS8c'
    },
    {
        id: 24,
        employee_name: 'Doris Wilder',
        employee_salary: 85600,
        employee_age: 23,
        profile_image:
            'https://i.picsum.photos/id/579/200/200.jpg?hmac=23fWj_34nrlHUFFsNp_a49abuuXPMHAqJt_DAj3ARPQ'
    }
];



const app = express();
const router = express.Router();

router.get("/getemployees", (req, res) => {
    res.json(sentData);
});

app.use(`/.netlify/functions/index`, router);

module.exports = app;
module.exports.handler = serverless(app);