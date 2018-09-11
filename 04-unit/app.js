const employeeList = [{
        name: 'Jan',
        officeNum: 1,
        phoneNum: '222-222-2222'
    },
    {
        name: 'Juan',
        officeNum: 304,
        phoneNum: '489-789-8789'
    },
    {
        name: 'Margie',
        officeNum: 789,
        phoneNum: '789-789-7897'
    },
    {
        name: 'Sara',
        officeNum: 32,
        phoneNum: '222-789-4654'
    },
    {
        name: 'Tyrell',
        officeNum: 3,
        phoneNum: '566-621-0452'
    },
    {
        name: 'Tasha',
        officeNum: 213,
        phoneNum: '789-766-5675'
    },
    {
        name: 'Ty',
        officeNum: 211,
        phoneNum: '789-766-7865'
    },
    {
        name: 'Sarah',
        officeNum: 345,
        phoneNum: '222-789-5231'
    }
];
let command = '';


const runCommand = function (e) {
    e.preventDefault();
    switch (command) {
        case 'print':
            let htmlStr = '';
            for (let i = 0; i < employeeList.length; i++) {
                htmlStr += `<p> ${employeeList[i].name}</p>`;
                htmlStr += `<p> ${employeeList[i].officeNum}</p>`;
                htmlStr += `<p> ${employeeList[i].phoneNum}</p>`;
            }
            render(htmlStr);
            break;


        case 'verify':
            let employeeName = $('input').val();
            let ifoundit = 'no';
            for (let j = 0; j < employeeList.length; j++) {
                if (employeeName === employeeList[j].name) {
                    ifoundit = 'yes';
                }
            }
            if (ifoundit === 'yes') {
                render('true');
            } else {
                render('false');
            }
        case 'lookup':
            let employeeName2 = $('input').val();
            let ifoundit = 'no';
            for (let j = 0; j < employeeList.length; j++) {
                if (employeeName2 === employeeList[j].name) {
                    ifoundit = 'yes';
                    if (ifoundit === 'yes') {
                        render(employeeList[j].name);
                        render(employeeList[j].officeNum);
                        render(employeeList[j].phoneNum);
                    } else {
                        render('no employee found');
                    }


                }
            }

        case 'contains':
            let newString = $('input').val();
            subString = 'ty'
            if (newString.includes(subString)) {;
                render(employeeList[4].name);
                render(employeeList[4].phoneNum);
                render(employeeList[4].officeNum);
                render(employeeList[6].name);
                render(employeeList[6].phoneNum);
                render(employeeList[6].officeNum);
            }
            subString2 = 'sar'
            if (newString.includes(subString2)) {;
                render(employeeList[3].name);
                render(employeeList[3].phoneNum);
                render(employeeList[3].officeNum);
                render(employeeList[7].name);
                render(employeeList[7].phoneNum);
                render(employeeList[7].officeNum);
            }


        case 'delete':
            let employeeName3 = $('input').val();
            for (let j = 0; j < employeeList.length; j++) {
                if (employeeName3 === employeeList[j].name) {
                    ifoundit = 'yes';
                    if (ifoundit === 'yes'); {
                        slice(employeeList[j].name);
                        slice(employeeList[j].phoneNum);
                        slice(employeeList[j].officeNum);
                    }
                }
            }
            for (let j = 0; j < employeeList.length; j++) {
                render(employeeList[j].name);
                render(employeeList[j].phoneNum);
                render(employeeList[j].officeNum);
            }

        case 'update':
            const newName = prompt('enter an employee name');
            const newOfficenum = prompt('enter an employee office number');
            const newPhonenum = prompt('enter an employee phone number');



        case 'add':
            let newName = $('input').val();
            let newOfficenum = $('input').val();
            let newPhonenum = $('input').val();
            employeeList.push({
                "name": newName,
                "officeNum": newOfficenum,
                "phoneNum": newPhonenum
            });
            for (let i = 0; i < employeeList.length; i++) {
                render(employeeList[i].name);
                render(employeeList[i].officeNum);
                render(employeeList[i].phoneNum);
            }

            const showInput = function (e) {
                e.preventDefault();
                $('input').addClass('show');
            }
            const hideInput = function (e) {
                e.preventDefault();
                $('input').removeClass('show');
            }

            $('#verify').on('click', showInput);

            $('#print').on('click', hideInput);

            $('#button').on('click', runCommand);
    }
}