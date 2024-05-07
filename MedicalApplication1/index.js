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
let UserIdAutoIncrement = 1000;
let MedicineIdAutoIncrement = 10;
let OrderIdAutoIncrement = 100;
let CurrentUserId;
let CurrentUserEmail;
let CurrentUserPassword;
let CurrentUserMedicineName;
let CurrentUserMedicineId;
let CurrentOrderId;
let CurrentUser;
let NewUserEmailStatus = false;
let NewUserPasswordStatus = false;
let NewUserConfirmPasswordStatus = false;
let NewUserPhoneNumberStatus = false;
function fetchUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = "http://localhost:5157/api/User";
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
        const response = yield fetch("http://localhost:5157/api/User", {
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
//fetch Medicine
function fetchMedicine() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5157/api/Medicine';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch medicine');
        }
        return yield response.json();
    });
}
//addMedicine
function addMedicine(medicine) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5157/api/Medicine', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicine)
        });
        if (!response.ok) {
            throw new Error('Failed to add medicine');
        }
        medicinedata();
    });
}
//fetch Order
function fetchOrder() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5157/api/Order';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch Order');
        }
        return yield response.json();
    });
}
//addOrder
function addOrder(order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5157/api/Order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Failed to add contact');
        }
        //renderContacts();
    });
}
//Update Medicine
function updateMedicine(id, medicine) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5157/api/Medicine/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicine)
        });
        if (!response.ok) {
            throw new Error('Failed to update medicine');
        }
        //renderContacts();
    });
}
//updateUser
function updateUser(id, userInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5157/api/User/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        });
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
        //renderContacts();
    });
}
//Update Order
function updateOrder(id, order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5157/api/Order/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Failed to update order');
        }
        //renderContacts();
    });
}
//delete Medicine
function deleteMedicine(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5157/api/Medicine/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete Medicine');
        }
        //renderContacts();
    });
}
//delete Order
function deleteOrder(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5157/api/Order/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete Order');
        }
        //renderContacts();
    });
}
//let OrderList: Array<Order> = new Array<Order>();
function newUser() {
    let newUser = document.getElementById('newUser');
    let existingUser = document.getElementById('existingUser');
    newUser.style.display = "block";
    existingUser.style.display = "none";
}
function signUp() {
    if (NewUserEmailStatus == true &&
        NewUserPasswordStatus == true &&
        //NewUserConfirmPasswordStatus == true &&
        NewUserPhoneNumberStatus == true) {
        let newUserEmail = document.getElementById('email').value;
        let newUserPassword = document.getElementById('password').value;
        let newUserConfirmPassword = document.getElementById('cpassword').value;
        let newUserPhoneNumber = document.getElementById('newUserPhonenumber').value;
        let newUserBalance = 0;
        let user = {
            userID: undefined,
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
function home() {
    CurrentUserEmail = "";
    let home = document.getElementById('home');
    home.style.display = "block";
    let newUser = document.getElementById('newUser');
    let existingUser = document.getElementById('existingUser');
    newUser.style.display = "none";
    existingUser.style.display = "none";
}
function checkEmail(paramEmail) {
    let newUserEmail = document.getElementById('email').value;
    let newUserEmailMessage = document.getElementById(paramEmail + "Message");
    let newUserEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (newUserEmailRegex.test(newUserEmail)) {
        NewUserEmailStatus = true;
        newUserEmailMessage.style.visibility = "hidden";
    }
    else {
        NewUserEmailStatus = false;
        newUserEmailMessage.innerHTML = "Please enter valid email";
        newUserEmailMessage.style.visibility = "visible";
        newUserEmailMessage.style.color = "tomato";
        newUserEmailMessage.style.marginLeft = "10px";
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
            availableUser.innerHTML += `User Email : ${userList[i].email} <br>`;
        }
    });
}
function SignIn() {
    return __awaiter(this, void 0, void 0, function* () {
        let noExistingUserIdChecker = false;
        let existingUserEmail = document.getElementById("existingUserEmail");
        let existingUserEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const userList = yield fetchUser();
        if (existingUserEmailRegex.test(existingUserEmail.value)) {
            for (let i = 0; i < userList.length; i++) {
                if (userList[i].email == existingUserEmail.value) {
                    CurrentUserId = userList[i].userID;
                    CurrentUserEmail = userList[i].email;
                    CurrentUserPassword = userList[i].password;
                    menuPage();
                    return;
                }
                else {
                    noExistingUserIdChecker = true;
                }
            }
            if (noExistingUserIdChecker) {
                alert("Enter Valid User Id");
            }
        }
        else {
            alert("Enter Valid User Id.");
        }
    });
}
function menuPage() {
    let menubar = document.getElementById('menubar');
    menubar.style.display = "block";
    let medicineinfo = document.getElementById('medicineinfo');
    medicineinfo.style.display = "none";
    let purchase = document.getElementById('purchase');
    purchase.style.display = "none";
    let cancel = document.getElementById('cancel');
    cancel.style.display = "none";
    let topup = document.getElementById('topup');
    topup.style.display = "none";
    let existingUser = document.getElementById('existingUser');
    existingUser.style.display = "none";
    let home = document.getElementById('home');
    home.style.display = "none";
    let historyDisplay = document.getElementById('historyDisplay');
    historyDisplay.style.display = "none";
    let showBalance = document.getElementById('showBalance');
    showBalance.style.display = "none";
    let cancelDisplay = document.getElementById('cancelDisplay');
    cancelDisplay.style.display = "none";
}
function medicinedata() {
    return __awaiter(this, void 0, void 0, function* () {
        let medicineinfo = document.getElementById('medicineinfo');
        medicineinfo.style.display = "block";
        const medicine = yield fetchMedicine();
        //let purchase = document.getElementById('purchase') as HTMLDivElement;
        //purchase.style.display = "none";
        const tableBody = document.querySelector("#dataTable1 tbody");
        tableBody.innerHTML = "";
        medicine.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${item.medicineID}</td>
        <td>${item.medicineName}</td>
        <td>${item.medicinePrice}</td>
        <td>${item.medicineCount}</td>
        <td>${item.expiryDate.toString().split('T')[0].split('-').reverse().join('/')}</td>
        <td>
          
          <button onclick="edit('${item.medicineID}')">Edit</button>
          <button onclick="demo('${item.medicineID}')">DELETE</button>
        </td>
      `;
            tableBody.appendChild(row);
        });
    });
}
let medicinename;
let medicinecount;
let medicineprice;
let medicinedate;
function Add() {
    let AddDiv = document.getElementById("AddDiv");
    AddDiv.style.display = 'block';
}
function addPush() {
    return __awaiter(this, void 0, void 0, function* () {
        medicinename = document.getElementById("medicinename").value;
        medicinecount = parseInt(document.getElementById("medicinecount").value);
        medicineprice = parseInt(document.getElementById("medicineprice").value);
        medicinedate = new Date(document.getElementById("medicinedate").value);
        const medicineList = yield fetchMedicine();
        if (currentMedicineId == null) {
            let medicine = {
                medicineID: undefined,
                medicineName: medicinename,
                medicinePrice: medicineprice,
                medicineCount: medicinecount,
                expiryDate: medicinedate
            };
            addMedicine(medicine);
            medicinedata();
        }
        else {
            for (let i = 0; i < medicineList.length; i++) {
                if (medicineList[i].medicineID == currentMedicineId) {
                    medicineList[i].medicineName = medicinename;
                    medicineList[i].medicinePrice = medicineprice;
                    medicineList[i].medicineCount = medicinecount;
                    medicineList[i].expiryDate = medicineList[i].expiryDate;
                    medicinedata();
                    updateMedicine(currentMedicineId, medicineList[i]);
                }
            }
        }
        let AddDiv = document.getElementById("AddDiv");
        AddDiv.style.display = 'none';
    });
}
function demo(item) {
    return __awaiter(this, void 0, void 0, function* () {
        let medicine = yield fetchMedicine();
        medicine = medicine.filter((items) => items.medicineID !== item);
        deleteMedicine(item);
        medicinedata();
    });
}
//edit Medicine
let currentMedicineId;
function edit(items) {
    return __awaiter(this, void 0, void 0, function* () {
        let emedname = document.getElementById("medicinename");
        let emedcount = document.getElementById("medicinecount");
        let emedprice = document.getElementById("medicineprice");
        let emeddate = document.getElementById("medicinedate");
        let AddDiv = document.getElementById("AddDiv");
        AddDiv.style.display = "block";
        const medicineList = yield fetchMedicine();
        const item = medicineList.find((item) => item.medicineID == items);
        if (item) {
            currentMedicineId = Number(item.medicineID);
            emedname.value = item.medicineName;
            emedcount.value = String(item.medicineCount);
            emedprice.value = String(item.medicinePrice);
            emeddate.value = String(item.expiryDate);
            //let medicine: Medicine={
            //    medicineID: currentMedicineId,
            //    medicineName: emedname.value,
            //    //medicinePrice: emedprice,
            //    //medicineCount:emedcount,
            //    //expiryDate: emeddate
            //
            //};
            updateMedicine(currentMedicineId, item);
        }
        //medicineID: number;
        //medicineName: string;
        //medicineCount: number;
        //medicinePrice: number;
        //expiryDate: Date;
    });
}
function purchase() {
    return __awaiter(this, void 0, void 0, function* () {
        let medicineinfo = document.getElementById('medicineinfo');
        medicineinfo.style.display = "none";
        const tableBody = document.querySelector("#dataTable tbody");
        tableBody.innerHTML = "";
        const medicineList = yield fetchMedicine();
        medicineList.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${item.medicineID}</td>
        <td>${item.medicineName}</td>
        <td>${item.medicinePrice}</td>
        <td>${item.medicineCount}</td>
        <td>${item.expiryDate.toString().split('T')[0].split('-').reverse().join('/')}</td>
        <td>
          <button onclick="add1('${item.medicineID}')">Buy</button>
          
        </td>
      `;
            tableBody.appendChild(row);
        });
        let purchase = document.getElementById("purchase");
        purchase.style.display = "block";
    });
}
let selectID;
function add1(item) {
    let purchasedetails = document.getElementById('purchasedetails');
    purchasedetails.style.display = "block";
    selectID = item;
}
function medicineListCheck() {
    return __awaiter(this, void 0, void 0, function* () {
        let medicineInfo = document.getElementById('medicineInfo');
        let medicineList = document.getElementById('medicineList');
        const medicinelist = yield fetchMedicine();
        let medicineName = medicineList[medicineList.selectedIndex].innerHTML;
        for (let i = 0; i < medicinelist.length; i++) {
            if (medicinelist[i].medicineName == medicineName) {
                medicineInfo.innerHTML = `Medicine Id : ${medicinelist[i].medicineID} --- Medicine Name : ${medicinelist[i].medicineName} --- Medicine Count : ${medicinelist[i].medicineCount} --- Medicine Price : ${medicinelist[i].medicinePrice} `;
                displayRequiredCount();
            }
        }
    });
}
function displayRequiredCount() {
    //let medicineInfo = document.getElementById('medicineInfo') as HTMLLabelElement;
    let requiredCount = document.getElementById('requiredCount');
    //medicineInfo.style.display = "none";
    requiredCount.style.display = "block";
}
function buyMedicine() {
    return __awaiter(this, void 0, void 0, function* () {
        let proceed = true;
        let finalMedicineRequiredCount = 0;
        //let medicineList = document.getElementById('medicineList') as HTMLSelectElement;
        let medicineRequiredCount = document.getElementById('medicineRequiredCount').value;
        //let medicineName = medicineList[medicineList.selectedIndex].innerHTML;
        let medicineRequiredCountRegex = /^\d{1,3}$/;
        const medicinelist = yield fetchMedicine();
        const orderList = yield fetchOrder();
        if (medicineRequiredCountRegex.test(medicineRequiredCount) && +medicineRequiredCount > 0) {
            for (let i = 0; i < medicinelist.length; i++) {
                if (medicinelist[i].medicineID == selectID) {
                    if (medicinelist[i].medicineCount > 0) {
                        if ((medicinelist[i].medicineCount - +medicineRequiredCount) < 0) {
                            proceed = confirm(`We only have ${medicinelist[i].medicineCount} ${medicinelist[i].medicineName}. Do you want to buy ${medicinelist[i].medicineCount} ${medicinelist[i].medicineName}?`);
                            if (proceed) {
                                finalMedicineRequiredCount = medicinelist[i].medicineCount;
                            }
                        }
                        else {
                            finalMedicineRequiredCount = +medicineRequiredCount;
                        }
                        if (proceed) {
                            medicinelist[i].medicineCount = medicinelist[i].medicineCount - finalMedicineRequiredCount;
                            updateMedicine(selectID, medicinelist[i]);
                            let order = {
                                orderID: undefined,
                                medicineID: medicinelist[i].medicineID,
                                userID: CurrentUserId,
                                medicineName: medicinelist[i].medicineName,
                                medicineCount: finalMedicineRequiredCount,
                                orderStatus: "Ordered"
                            };
                            addOrder(order);
                            alert("Purchase Success.");
                        }
                    }
                    else if (medicinelist[i].medicineCount <= 0) {
                        alert("Out of Stock, you can buy alternative medicine.");
                    }
                }
            }
        }
        else {
            alert("Please enter valid Required Count");
        }
    });
}
function Topup() {
    return __awaiter(this, void 0, void 0, function* () {
        let topup = document.getElementById('topup');
        let currentBalance = document.getElementById('currentBalance');
        topup.style.display = "block";
        let userList = yield fetchUser();
        //currentBalance.style.display="block";
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
        topup.style.display = "block";
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
function showHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        let historyDisplay = document.getElementById('historyDisplay');
        historyDisplay.style.display = "block";
        const orderList = yield fetchOrder();
        let historyDisplaytable = document.querySelector("#historyDisplay tbody");
        historyDisplaytable.innerHTML = "";
        orderList.forEach((item) => {
            if (item.userID == CurrentUserId) {
                CurrentOrderId = item.orderID;
                const row = document.createElement("tr");
                row.innerHTML = `
                <td>${item.medicineID}</td>
                <td>${item.userID}</td>
                <td>${item.medicineName}</td>
                <td>${item.medicineCount}</td>
                <td>${item.orderStatus}</td>
                
            `;
                historyDisplaytable.appendChild(row);
            }
        });
        let medicinedata = document.getElementById('medicinedata');
        medicinedata.style.display = "none";
        let purchase = document.getElementById('purchase');
        purchase.style.display = "none";
        let showBalance = document.getElementById('showBalance');
        showBalance.style.display = "none";
    });
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
function cancel() {
    return __awaiter(this, void 0, void 0, function* () {
        let purchase = document.getElementById("purchase");
        purchase.style.display = "none";
        let topup = (document.getElementById('topup'));
        topup.style.display = "none";
        let historyDisplay = document.getElementById('historyDisplay');
        historyDisplay.style.display = "none";
        let showBalance = document.getElementById('showBalance');
        showBalance.style.display = "none";
        let cancelDisplay = document.getElementById('cancelDisplay');
        cancelDisplay.style.display = "block";
        const tableBody = document.querySelector("#cancelDisplay tbody");
        tableBody.innerHTML = "";
        const orderList = yield fetchOrder();
        orderList.forEach((item) => {
            if (item.userID == CurrentUserId && item.orderStatus == "Ordered") {
                CurrentOrderId = item.orderID;
                const row = document.createElement("tr");
                row.innerHTML = `
                <td>${item.userID}</td>
                <td>${item.medicineID}</td>
                <td>${item.medicineCount}</td>
                <td>${item.medicineName}</td>
                <td>${item.orderStatus}</td>
                <td>
                <button onclick="Remove(${item.orderID})">Cancel</button>
                </td>
            `;
                tableBody.appendChild(row);
            }
        });
    });
}
function Remove(count) {
    return __awaiter(this, void 0, void 0, function* () {
        const orderList = yield fetchOrder();
        const medicineList = yield fetchMedicine();
        orderList.forEach((item) => {
            if (item.orderID == CurrentOrderId) {
                item.orderStatus = "Cancelled";
                updateOrder(item.orderID, item);
                medicineList.forEach((items) => {
                    if (items.medicineID == item.medicineID) {
                        items.medicineCount += item.medicineCount;
                        updateMedicine(items.medicineID, items);
                    }
                });
            }
        });
        cancel();
    });
}
