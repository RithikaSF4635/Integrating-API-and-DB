"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let CurrentUserId;
let CurrentUserName;
let CurrentUserEmail;
let CurrentUserPassword;
let CurrentUserCardNumber;
let CurrentUser;
let CurrentUserBalance;
let CurrentBorrowID;
let NewUserNameStatus = false;
let NewUserEmailStatus = false;
let NewUserPasswordStatus = false;
let NewUserPhoneNumberStatus = false;
//fetchUserInfo
function fetchUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = "http://localhost:5177/api/UserInfo";
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return yield response.json();
    });
}
// addUser
function addUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:5177/api/UserInfo", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to add user');
        }
    });
}
//updateUser
function updateUser(id, userInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5177/api/UserInfo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        });
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
    });
}
//fetchBorrow
function fetchBorrow() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = "http://localhost:5177/api/Borrow";
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch borrow');
        }
        return yield response.json();
    });
}
// addBorrow
function addBorrow(borrow) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:5177/api/Borrow", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(borrow)
        });
        if (!response.ok) {
            throw new Error('Failed to add borrow');
        }
    });
}
//updateBorrow
function updateBorrow(id, borrow) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5177/api/Borrow/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(borrow)
        });
        if (!response.ok) {
            throw new Error('Failed to update borrow');
        }
    });
}
//fetchBook
function fetchBook() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = "http://localhost:5177/api/Book";
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch book');
        }
        return yield response.json();
    });
}
// addBook
function addBook(book) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:5177/api/Book", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
        if (!response.ok) {
            throw new Error('Failed to add book');
        }
    });
}
//updateBook
function updateBook(id, book) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5177/api/Book/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
        if (!response.ok) {
            throw new Error('Failed to update book');
        }
    });
}
//delete Borrow
function deleteBorrow(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5177/api/Borrow/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete borrow');
        }
    });
}
//delete Book
function deleteBook(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5177/api/Book/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete Book');
        }
    });
}
function home() {
    CurrentUserEmail = "";
    let home = document.getElementById('home');
    home.style.display = "block";
    let newUser = document.getElementById('newUser');
    let existingUser = document.getElementById('existingUser');
    newUser.style.display = "none";
    existingUser.style.display = "none";
}
function newUser() {
    let newUser = document.getElementById('newUser');
    let existingUser = document.getElementById('existingUser');
    newUser.style.display = "block";
    existingUser.style.display = "none";
}
function signUp() {
    if (NewUserNameStatus == true &&
        NewUserEmailStatus == true &&
        NewUserPasswordStatus == true &&
        NewUserPhoneNumberStatus == true) {
        let newUserName = document.getElementById('newUserName').value;
        let newUserGender = document.getElementById('gender').value;
        let newUserDepartment = document.getElementById('department').value;
        let newUserPhoneNumber = document.getElementById('newUserPhonenumber').value;
        let newUserEmail = document.getElementById('email').value;
        let newUserPassword = document.getElementById('password').value;
        let newUserConfirmPassword = document.getElementById('cpassword').value;
        let newUserBalance = 0;
        let user = {
            userID: undefined,
            userName: newUserName,
            gender: newUserGender,
            department: newUserDepartment,
            phoneNumber: newUserPhoneNumber,
            email: newUserEmail,
            password: newUserPassword,
            //confirmPassword: newUserConfirmPassword,
            userBalance: newUserBalance
        };
        addUser(user);
        home();
    }
    else {
        alert("Please fill out the form fully.");
    }
}
function checkNewUserName(paramNewUserName) {
    let newUserName = document.getElementById(paramNewUserName).value;
    let newUserNameMessage = document.getElementById(paramNewUserName + "Message");
    let newUserNameRegex = /^[a-zA-Z]{3,20}$/;
    if (newUserNameRegex.test(newUserName)) {
        NewUserNameStatus = true;
        newUserNameMessage.style.visibility = "hidden";
    }
    else {
        NewUserNameStatus = false;
        newUserNameMessage.innerHTML = "Please enter valid name";
        newUserNameMessage.style.visibility = "visible";
        newUserNameMessage.style.color = "tomato";
        newUserNameMessage.style.marginLeft = "10px";
    }
}
//password validate
function checkPassword(paramPassword) {
    let newUserPassword = document.getElementById('password').value;
    let newUserPassMessage = document.getElementById(paramPassword + "Message");
    let newUserPasserRegex = /^\w{5,7}$/;
    if (newUserPasserRegex.test(newUserPassword)) {
        NewUserPasswordStatus = true;
        newUserPassMessage.style.visibility = "hidden";
    }
    else {
        NewUserPasswordStatus = false;
        newUserPassMessage.innerHTML = "Please enter valid password. Password should have atleast 5 letter atmost 7 letter";
        newUserPassMessage.style.visibility = "visible";
        newUserPassMessage.style.color = "tomato";
        newUserPassMessage.style.marginLeft = "10px";
    }
}
function checkPhoneNumber(paramPhone) {
    let newUserPhoneNumber = document.getElementById('newUserPhonenumber').value;
    let newUserPhoneNumberMessage = document.getElementById(paramPhone + "Message");
    let newUserPhoneNumberRegex = /^\d{10}$/;
    if (newUserPhoneNumberRegex.test(newUserPhoneNumber)) {
        NewUserPhoneNumberStatus = true;
        newUserPhoneNumberMessage.style.visibility = "hidden";
    }
    else {
        NewUserPhoneNumberStatus = false;
        newUserPhoneNumberMessage.innerHTML = "Please enter valid phone number";
        newUserPhoneNumberMessage.style.visibility = "visible";
        newUserPhoneNumberMessage.style.color = "tomato";
        newUserPhoneNumberMessage.style.marginLeft = "10px";
    }
}
function existingUser() {
    return __awaiter(this, void 0, void 0, function* () {
        let existingUser = document.getElementById('existingUser');
        existingUser.style.display = "block";
        //let home=document.getElementById('home') as HTMLDivElement;
        let newUser = document.getElementById('newUser');
        newUser.style.display = "none";
        const userList = yield fetchUser();
        let availableUser = document.getElementById('availableUser');
        availableUser.innerHTML = "<h2>Available User</h2>";
        for (let i = 0; i < userList.length; i++) {
            availableUser.innerHTML += `|User Name : ${userList[i].userName} | User Email : ${userList[i].email}<br>`;
        }
    });
}
function SignIn() {
    return __awaiter(this, void 0, void 0, function* () {
        let noExistingUserIdChecker = false;
        let existingUserEmail = document.getElementById("existingUserEmail");
        let userList = yield fetchUser();
        let existingUserEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (existingUserEmailRegex.test(existingUserEmail.value)) {
            for (let i = 0; i < userList.length; i++) {
                if (userList[i].email == existingUserEmail.value) {
                    CurrentUserId = userList[i].userID;
                    CurrentUserName = userList[i].userName;
                    CurrentUserEmail = userList[i].email;
                    CurrentUserPassword = userList[i].password;
                    CurrentUserBalance = userList[i].userBalance;
                    CurrentUser = userList[i];
                    menuPage();
                    return;
                }
                else {
                    noExistingUserIdChecker = true;
                }
            }
            if (noExistingUserIdChecker) {
                alert("Enter Valid Email Id");
            }
        }
        else {
            alert("Enter Valid Email Id.");
        }
    });
}
function menuPage() {
    let menubar = document.getElementById('menubar');
    menubar.style.display = "block";
    let existingUser = document.getElementById('existingUser');
    existingUser.style.display = "none";
    let home = document.getElementById('home');
    home.style.display = "none";
    let showBalance = document.getElementById('showBalance');
    showBalance.style.display = "none";
    let topup = document.getElementById('topup');
    topup.style.display = "none";
    let historyDisplay1 = document.getElementById('historyDisplay');
    historyDisplay1.style.display = "none";
    let borrow = document.getElementById('borrow');
    borrow.style.display = "none";
    let historyDisplay = document.getElementById('borrowHistoryExport');
    historyDisplay.style.display = "none";
    let returnHistoryDisplay = document.getElementById('returnHistoryDisplay');
    returnHistoryDisplay.style.display = "none";
}
function Exit() {
    let home = document.getElementById('home');
    home.style.display = "block";
    let menubar = document.getElementById('menubar');
    menubar.style.display = "none";
    let existingUser = document.getElementById('existingUser');
    existingUser.style.display = "none";
    let showBalance = document.getElementById('showBalance');
    showBalance.style.display = "none";
    let topup = document.getElementById('topup');
    topup.style.display = "none";
    let borrow = document.getElementById('borrow');
    borrow.style.display = "none";
    let historyDisplay = document.getElementById('borrowHistoryExport');
    historyDisplay.style.display = "none";
    let returnHistoryDisplay = document.getElementById('returnHistoryDisplay');
    returnHistoryDisplay.style.display = "none";
}
function ShowBalance() {
    return __awaiter(this, void 0, void 0, function* () {
        let showBalance = document.getElementById('showBalance');
        showBalance.style.display = "block";
        const userList = yield fetchUser();
        for (let i = 0; i < userList.length; i++) {
            if (userList[i].userID == CurrentUserId) {
                let currentBalance = document.getElementById('balance');
                currentBalance.innerHTML = `Your Available Balance is ${userList[i].userBalance.toString()}`;
            }
        }
    });
}
function Topup() {
    return __awaiter(this, void 0, void 0, function* () {
        let topup = document.getElementById('topup');
        let currentBalance = document.getElementById('currentBalance');
        topup.style.display = "block";
        let userList = yield fetchUser();
        for (let i = 0; i < userList.length; i++) {
            if (userList[i].userID == CurrentUserId) {
                currentBalance.innerHTML = userList[i].userBalance.toString();
            }
        }
    });
}
function recharge() {
    return __awaiter(this, void 0, void 0, function* () {
        let topup = (document.getElementById('topup'));
        topup.style.display = "none";
        let amount = (document.getElementById('amount'));
        let amount1 = Number(amount.value);
        // let recharge = document.getElementById('recharge') as HTMLElement;
        // recharge.style.display = "block";
        let afterTopup = document.getElementById('afterTopup');
        let rechargebalance = (document.getElementById('rechargebalance'));
        rechargebalance.style.display = "block";
        let userList = yield fetchUser();
        for (let i = 0; i < userList.length; i++) {
            if (userList[i].userID == CurrentUserId) {
                userList[i].userBalance += amount1;
                afterTopup.innerHTML = userList[i].userBalance.toString();
                const item = {
                    userID: CurrentUserId,
                    userName: CurrentUserName,
                    gender: userList[i].gender,
                    department: userList[i].department,
                    phoneNumber: userList[i].phoneNumber,
                    email: userList[i].email,
                    password: userList[i].password,
                    userBalance: userList[i].userBalance
                };
                updateUser(CurrentUserId, item);
            }
        }
    });
}
function showHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        let borrowHistoryExport = document.getElementById('borrowHistoryExport');
        borrowHistoryExport.style.display = "block";
        let historyDisplay = document.getElementById('historyDisplay');
        historyDisplay.style.display = "block";
        const borrowList = yield fetchBorrow();
        let historyDisplaytable = document.querySelector("#historyDisplay tbody");
        historyDisplaytable.innerHTML = "";
        borrowList.forEach((item) => {
            if (item.userID == CurrentUserId) {
                CurrentBorrowID = item.borrowID;
                const row = document.createElement("tr");
                row.innerHTML = `
                <td>${item.bookID}</td>
                <td>${item.userID}</td>
                <td>${item.borrowedDate.toString().split('T')[0].split('-').reverse().join('/')}</td>
                <td>${item.borrowBookCount}</td>
                <td>${item.status}</td>
                <td>${item.paidFineAmount}</td>
                
            `;
                historyDisplaytable.appendChild(row);
            }
        });
        let borrow = document.getElementById('borrow');
        borrow.style.display = "none";
        let topup = document.getElementById('topup');
        topup.style.display = "none";
        let showBalance = document.getElementById('showBalance');
        showBalance.style.display = "none";
    });
}
function ExportData() {
    return __awaiter(this, void 0, void 0, function* () {
        const a = document.querySelector('a');
        let data = "BookID,UserID,Borrowed Date,Borrow Book Count,Status,Paid Fine Amount";
        const borrowList = yield fetchBorrow();
        borrowList.forEach((item) => {
            if (CurrentUserId == item.userID) {
                data = data + `\n` + `${item.bookID},${item.userID},${item.borrowedDate.toString().substring(0, 10)},${item.borrowBookCount},${item.status},${item.paidFineAmount}\n`;
            }
        });
        const blob = new Blob([data], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        a.href = url;
        a.download = 'borrowDetails.csv';
    });
}
function BorrowBook() {
    return __awaiter(this, void 0, void 0, function* () {
        const tableBody = document.querySelector("#dataTable tbody");
        tableBody.innerHTML = "";
        const bookList = yield fetchBook();
        bookList.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${item.bookID}</td>
        <td>${item.bookName}</td>
        <td>${item.authorName}</td>
        <td>${item.bookCount}</td>
        <td>
          <button onclick="add('${item.bookID}')">Borrow</button>
          
        </td>
      `;
            tableBody.appendChild(row);
        });
        let borrow = document.getElementById("borrow");
        borrow.style.display = "block";
        let borrowdetails = document.getElementById('borrowdetails');
        borrowdetails.style.display = "none";
    });
}
let selectID;
function add(item) {
    return __awaiter(this, void 0, void 0, function* () {
        let borrowdetails = document.getElementById('borrowdetails');
        borrowdetails.style.display = "block";
        selectID = item;
    });
}
function borrow() {
    return __awaiter(this, void 0, void 0, function* () {
        let flag = true;
        //let proceed: boolean = true;
        let finalBookRequiredCount = 0;
        //let medicineList = document.getElementById('medicineList') as HTMLSelectElement;
        let bookRequiredCount = document.getElementById('bookRequiredCount').value;
        //let medicineName = medicineList[medicineList.selectedIndex].innerHTML;
        let RequiredCountRegex = /^\d{1,3}$/;
        const bookList = yield fetchBook();
        const borrowList = yield fetchBorrow();
        if (RequiredCountRegex.test(bookRequiredCount) && +bookRequiredCount > 0) {
            for (let i = 0; i < bookList.length; i++) {
                if (bookList[i].bookID == selectID) {
                    flag = false;
                    if (+bookRequiredCount <= bookList[i].bookCount) {
                        let count = 0;
                        borrowList.forEach((item) => {
                            if (CurrentUserId == item.userID && item.status == "Borrowed") {
                                count++;
                            }
                        });
                        if (count === 3) {
                            alert("You have borrowed 3 books already");
                        }
                        else if (count > 3) {
                            alert(`You can have maximum of 3 borrowed books. Your already borrowed books count is ${count} and requested count is ${bookRequiredCount}, which exceeds 3`);
                        }
                        else {
                            let fine = 0;
                            bookList[i].bookCount = bookList[i].bookCount - +bookRequiredCount;
                            updateBook(selectID, bookList[i]);
                            let borrow = {
                                borrowID: undefined,
                                bookID: bookList[i].bookID,
                                userID: CurrentUserId,
                                borrowedDate: new Date(),
                                borrowBookCount: +bookRequiredCount,
                                status: "Borrowed",
                                paidFineAmount: fine
                            };
                            addBorrow(borrow);
                            alert("Book Borrowed Successfully.");
                        }
                    }
                    else {
                        alert("Books are not available for the selected count");
                        borrowList.forEach((items) => {
                            if (selectID == items.bookID && items.status == "Borrowed") {
                                alert(`The book will be available on ${items.borrowedDate}`);
                            }
                        });
                    }
                }
            }
            if (flag) {
                alert("Invalid Book ID, Please enter valid ID");
            }
        }
        else {
            alert("Please enter valid Required Count");
        }
    });
}
function ReturnBook() {
    return __awaiter(this, void 0, void 0, function* () {
        let returnHistoryDisplay = document.getElementById('returnHistoryDisplay');
        returnHistoryDisplay.style.display = "block";
        let borrow = document.getElementById('borrow');
        borrow.style.display = "none";
        let topup = document.getElementById('topup');
        topup.style.display = "none";
        let showBalance = document.getElementById('showBalance');
        showBalance.style.display = "none";
        const returnHistoryDisplaytable = document.querySelector("#returnHistoryDisplay tbody");
        returnHistoryDisplaytable.innerHTML = "";
        const borrowList = yield fetchBorrow();
        borrowList.forEach((item) => {
            if (item.userID == CurrentUserId && item.status == "Borrowed") {
                CurrentBorrowID = item.borrowID;
                const row = document.createElement("tr");
                row.innerHTML = `
                <td>${item.bookID}</td>
                <td>${item.userID}</td>
                <td>${item.borrowedDate.toString().split('T')[0].split('-').reverse().join('/')}</td>
                <td>${item.borrowBookCount}</td>
                <td>${item.status}</td>
                <td>${item.paidFineAmount}</td>
                <td>
                <button onclick="Return('${item.borrowID}')">Return</button>
                </td>
            `;
                returnHistoryDisplaytable.appendChild(row);
            }
        });
    });
}
function Return(selectedBorrowID) {
    return __awaiter(this, void 0, void 0, function* () {
        const borrowList = yield fetchBorrow();
        borrowList.forEach((item) => {
            if (selectedBorrowID == item.borrowID && item.status == "Borrowed") {
                let num = 15;
                //date.setDate(date.getDate() + days)
                let date1 = new Date(item.borrowedDate);
                let date2 = date1.getDate();
                date1.setDate(date2 + num);
                let returnDate = new Date();
                let days = returnDate.getTime() - date1.getTime();
                let days1 = Math.round(days / (1000 * 3600 * 24));
                if (returnDate > date1) {
                    let fine = days1 * 1;
                    if (CurrentUserBalance > fine) {
                        CurrentUserBalance -= fine;
                        updateUser(CurrentUserId, CurrentUser);
                        item.paidFineAmount = fine;
                        item.status = "Returned";
                        updateBorrow(selectedBorrowID, item);
                        alert("Book returned successfully");
                    }
                    else {
                        alert("Insufficient balance. Please rechange and proceed");
                    }
                }
                else {
                    item.status = "Returned";
                    updateBorrow(selectedBorrowID, item);
                    alert("Book returned successfully");
                }
            }
        });
        ReturnBook();
    });
}
