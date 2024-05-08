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
let CurrentTravelID;
let NewUserNameStatus = false;
let NewUserEmailStatus = false;
let NewUserPasswordStatus = false;
let NewUserConfirmPasswordStatus = false;
let NewUserPhoneNumberStatus = false;
//fetchUserInfo
function fetchUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = "http://localhost:5201/api/UserInfo";
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
        const response = yield fetch("http://localhost:5201/api/UserInfo", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to add order');
        }
        //renderContacts();
    });
}
//fetchTravel
function fetchTravel() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = "http://localhost:5201/api/Travel";
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch travel');
        }
        return yield response.json();
    });
}
// addTravel
function addTravel(travel) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:5201/api/Travel", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(travel)
        });
        if (!response.ok) {
            throw new Error('Failed to add travel');
        }
    });
}
//fetchTicket
function fetchTicket() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = "http://localhost:5201/api/Ticket";
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch ticket');
        }
        return yield response.json();
    });
}
// addTicket
function addTicket(ticket) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:5201/api/Ticket", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ticket)
        });
        if (!response.ok) {
            throw new Error('Failed to add ticket');
        }
    });
}
//updateUser
function updateUser(id, userInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5201/api/UserInfo/${id}`, {
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
//updateTravel
function updateTravel(id, travel) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5201/api/Travel/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(travel)
        });
        if (!response.ok) {
            throw new Error('Failed to update travel');
        }
    });
}
//updateTicket
function updateTicket(id, ticket) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5201/api/Ticket/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ticket)
        });
        if (!response.ok) {
            throw new Error('Failed to update ticket');
        }
    });
}
//delete Ticket
function deleteTicket(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5201/api/Ticket/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete Ticket');
        }
    });
}
//delete Travel
function deleteTravel(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5201/api/Travel/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete Travel');
        }
        //renderContacts();
    });
}
// let UserArrayList: Array<User> = new Array<User>();
// UserArrayList.push(new User("rithi",  9789011226, 150));
// UserArrayList.push(new User("prathi",  9789012345, 100));
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
        let cardNumber = document.getElementById('cardNumber').value;
        let newUserEmail = document.getElementById('email').value;
        let newUserPassword = document.getElementById('password').value;
        let newUserConfirmPassword = document.getElementById('cpassword').value;
        let newUserPhoneNumber = document.getElementById('newUserPhonenumber').value;
        let newUserBalance = 0;
        let user = {
            userID: undefined,
            cardNumber: cardNumber,
            userName: newUserName,
            email: newUserEmail,
            password: newUserPassword,
            confirmPassword: newUserConfirmPassword,
            phoneNumber: newUserPhoneNumber,
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
                    CurrentUserCardNumber = userList[i].cardNumber;
                    CurrentUserName = userList[i].userName;
                    CurrentUserEmail = userList[i].email;
                    CurrentUserPassword = userList[i].password;
                    CurrentUserBalance = userList[i].userBalance;
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
    let travel = document.getElementById('travel');
    travel.style.display = "none";
    let historyDisplay = document.getElementById('historyDisplay');
    historyDisplay.style.display = "none";
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
    let travel = document.getElementById('travel');
    travel.style.display = "none";
    let historyDisplay = document.getElementById('historyDisplay');
    historyDisplay.style.display = "none";
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
                    cardNumber: CurrentUserCardNumber,
                    userName: CurrentUserName,
                    email: userList[i].email,
                    password: userList[i].password,
                    confirmPassword: userList[i].confirmPassword,
                    phoneNumber: userList[i].phoneNumber,
                    userBalance: userList[i].userBalance
                };
                updateUser(CurrentUserId, item);
            }
        }
    });
}
function Travel() {
    return __awaiter(this, void 0, void 0, function* () {
        const ticketList = yield fetchTicket();
        let travel = document.getElementById('travel');
        travel.style.display = "block";
        const tableBody = document.querySelector('#travelDisplay tbody');
        tableBody.innerHTML = "";
        ticketList.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${item.ticketID}</td>
        <td>${item.fromLocation}</td>
        <td>${item.toLocation}</td>
        <td>${item.ticketPrice}</td>
        <td>
            <button onclick="BookTravel('${item.ticketID}')">Book</button>
        </td>
        `;
            tableBody.appendChild(row);
        });
    });
}
function BookTravel(bookTicketID) {
    return __awaiter(this, void 0, void 0, function* () {
        let ticketList = yield fetchTicket();
        let userList = yield fetchUser();
        let proceed = true;
        for (let i = 0; i < ticketList.length; i++) {
            if (ticketList[i].ticketID == bookTicketID) {
                if (CurrentUserBalance < ticketList[i].ticketPrice) {
                    alert("You have insufficient Balance.");
                }
                else {
                    userList.forEach((item) => {
                        if (CurrentUserId == item.userID) {
                            const newTravelHistory = {
                                travelID: undefined,
                                travelCost: ticketList[i].ticketPrice,
                                fromLocation: ticketList[i].fromLocation,
                                toLocation: ticketList[i].toLocation,
                                dateTravel: new Date(),
                                cardNumber: item.cardNumber
                            };
                            addTravel(newTravelHistory);
                            CurrentUserBalance = item.userBalance - ticketList[i].ticketPrice;
                            const updateUserBalance = {
                                userID: CurrentUserId,
                                userName: item.userName,
                                cardNumber: item.cardNumber,
                                email: item.email,
                                password: item.password,
                                confirmPassword: item.confirmPassword,
                                phoneNumber: item.phoneNumber,
                                userBalance: CurrentUserBalance
                            };
                            updateUser(CurrentUserId, updateUserBalance);
                        }
                    });
                    alert("Booking Successfull....");
                }
            }
        }
        Travel();
    });
}
function showHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        const travelList = yield fetchTravel();
        let historyDisplay = document.getElementById('historyDisplay');
        historyDisplay.style.display = "block";
        let historyDisplaytable = document.querySelector("#historyDisplay tbody");
        historyDisplaytable.innerHTML = "";
        travelList.forEach((item) => {
            if (item.cardNumber == CurrentUserCardNumber) {
                CurrentTravelID = item.travelID;
                const row = document.createElement("tr");
                row.innerHTML = `
                <td>${item.travelID}</td>
                <td>${item.cardNumber}</td>
                <td>${item.fromLocation}</td>
                <td>${item.toLocation}</td>
                <td>${item.dateTravel.toString().split('T')[0].split('-').reverse().join('/')}</td>
                <td>${item.travelCost}</td>
            `;
                historyDisplaytable.appendChild(row);
            }
        });
    });
}
