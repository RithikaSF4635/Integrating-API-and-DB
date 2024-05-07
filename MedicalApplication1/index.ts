let UserIdAutoIncrement = 1000;
let MedicineIdAutoIncrement = 10;
let OrderIdAutoIncrement = 100;

let CurrentUserId: number;
let CurrentUserEmail: string;
let CurrentUserPassword: string;
let CurrentUserMedicineName: string;
let CurrentUserMedicineId: number;
let CurrentOrderId: number;
let CurrentUser: UserInfo;

let NewUserEmailStatus = false;
let NewUserPasswordStatus = false;
let NewUserConfirmPasswordStatus = false;
let NewUserPhoneNumberStatus = false;


interface UserInfo {

    userID: any;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    userBalance: number;

}

//let UserArrayList: Array<User> = new Array<User>();



interface Medicine {

    medicineID: any;
    medicineName: string;
    medicineCount: number;
    medicinePrice: number;
    expiryDate: Date;

}

//let MedicineList: Array<MedicineInfo> = new Array<MedicineInfo>();
//
//let MedicineList: Array<MedicineInfo> = new Array<MedicineInfo>();
//
//MedicineList.push(new MedicineInfo("Paracetomol", 5, 50, new Date(2024, 6, 12)));
//MedicineList.push(new MedicineInfo("Colpal", 5, 60, new Date(2024, 10, 25)));
//MedicineList.push(new MedicineInfo("Stepsil", 5, 70, new Date(2024, 11, 12)));
//MedicineList.push(new MedicineInfo("Iodex", 5, 80, new Date(2024, 12, 12)));
//MedicineList.push(new MedicineInfo("Acetherol", 5, 100, new Date(2025, 6, 12)));

//enum OrderStatus {
//    Cancelled = "Cancelled",
//    Ordered = "Ordered"
//}

interface Order {
    orderID: any;
    medicineID: number;
    userID: number;

    medicineName: string;
    medicineCount: number;
    orderStatus: string;

    
}

async function fetchUser(): Promise<UserInfo[]> {
    const apiUrl = "http://localhost:5157/api/User";
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return await response.json();
  }
// addUser
async function addUser(user: UserInfo): Promise<void>  {
    const response = await fetch("http://localhost:5157/api/User",{
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
    
}


//fetch Medicine
async function fetchMedicine(): Promise<Medicine[]> {
    const apiUrl = 'http://localhost:5157/api/Medicine';
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch medicine');
    }
    return await response.json();
  }
//addMedicine
async function addMedicine(medicine: Medicine): Promise<void> {
    const response = await fetch('http://localhost:5157/api/Medicine', {
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
  }

//fetch Order
async function fetchOrder(): Promise<Order[]> {
    const apiUrl = 'http://localhost:5157/api/Order';
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch Order');
    }
    return await response.json();
  }


//addOrder
async function addOrder(order: Order): Promise<void> {
    const response = await fetch('http://localhost:5157/api/Order', {
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
  }


//Update Medicine
async function updateMedicine(id: number, medicine: Medicine): Promise<void> {
    const response = await fetch(`http://localhost:5157/api/Medicine/${id}`, {
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
  }
//updateUser
  async function updateUser(id: number, userInfo: UserInfo): Promise<void> {
    const response = await fetch(`http://localhost:5157/api/User/${id}`, {
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
  }
//Update Order
async function updateOrder(id: number, order: Order): Promise<void> {
    const response = await fetch(`http://localhost:5157/api/Order/${id}`, {
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
  }

//delete Medicine
async function deleteMedicine(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5157/api/Medicine/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete Medicine');
    }
    //renderContacts();
  }

//delete Order
async function deleteOrder(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5157/api/Order/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete Order');
    }
    //renderContacts();
  }

//let OrderList: Array<Order> = new Array<Order>();



function newUser() {
    let newUser = document.getElementById('newUser') as HTMLDivElement;
    let existingUser = document.getElementById('existingUser') as HTMLDivElement;
    newUser.style.display = "block";
    existingUser.style.display = "none";
}

function signUp() {

    if (NewUserEmailStatus == true &&
        NewUserPasswordStatus == true &&
        //NewUserConfirmPasswordStatus == true &&
        NewUserPhoneNumberStatus == true) {
        let newUserEmail = (document.getElementById('email') as HTMLInputElement).value;
        let newUserPassword = (document.getElementById('password') as HTMLInputElement).value;
        let newUserConfirmPassword = (document.getElementById('cpassword') as HTMLInputElement).value;
        let newUserPhoneNumber = (document.getElementById('newUserPhonenumber') as HTMLInputElement).value;
        let newUserBalance = 0;

        let user:UserInfo={
            userID: undefined,
            email: newUserEmail,
            password: newUserPassword,
            confirmPassword: newUserConfirmPassword,
            phoneNumber: newUserPhoneNumber,
            userBalance: newUserBalance
        }
        addUser(user);
        home();
         

    }
    else {
        alert("Please fill out the form fully.")
    }

}

function home(){
    
    CurrentUserEmail="";
    let home=document.getElementById('home') as HTMLDivElement;
    home.style.display="block";
    let newUser = document.getElementById('newUser') as HTMLDivElement;
    let existingUser = document.getElementById('existingUser') as HTMLDivElement;
    newUser.style.display = "none";
    existingUser.style.display = "none";
}

function checkEmail(paramEmail: string) {
    let newUserEmail = (document.getElementById('email') as HTMLInputElement).value;
    let newUserEmailMessage = document.getElementById(paramEmail + "Message") as HTMLLabelElement;
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
function checkPassword(paramPassword: string){
    let newUserPassword=(document.getElementById('password') as HTMLInputElement).value;
    let newUserPassMessage=document.getElementById(paramPassword + "Message") as HTMLLabelElement;
    let newUserPasserRegex=/^\w{5,7}$/;

    if(newUserPasserRegex.test(newUserPassword)){
        NewUserPasswordStatus=true;
        newUserPassMessage.style.visibility="hidden";
    }
    else{
        NewUserPasswordStatus=false;
        newUserPassMessage.innerHTML="Please enter valid password. Password should have atleast 5 letter atmost 7 letter";
        newUserPassMessage.style.visibility="visible";
        newUserPassMessage.style.color="tomato";
        newUserPassMessage.style.marginLeft="10px";
    }
}



function checkPhoneNumber(paramPhone: string) {
    let newUserPhoneNumber = (document.getElementById('newUserPhonenumber') as HTMLInputElement).value;
    let newUserPhoneNumberMessage = document.getElementById(paramPhone + "Message") as HTMLLabelElement;
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

async function existingUser() {
    let existingUser = document.getElementById('existingUser') as HTMLDivElement;
    existingUser.style.display = "block";
    //let home=document.getElementById('home') as HTMLDivElement;
    let newUser = document.getElementById('newUser') as HTMLDivElement;
    newUser.style.display = "none"
    const userList=await fetchUser();
    let availableUser = document.getElementById('availableUser') as HTMLLabelElement;
    availableUser.innerHTML = "<h2>Available User</h2>";


    for (let i = 0; i < userList.length; i++) {

        availableUser.innerHTML += `User Email : ${userList[i].email} <br>`;
    }

}

async function SignIn() {
    let noExistingUserIdChecker: boolean = false;
    let existingUserEmail = document.getElementById("existingUserEmail") as HTMLInputElement;

    let existingUserEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const userList=await fetchUser();

    if (existingUserEmailRegex.test(existingUserEmail.value)) {

        for (let i = 0; i < userList.length; i++) {
            if (userList[i].email == existingUserEmail.value) {

                CurrentUserId = userList[i].userID;
                CurrentUserEmail = userList[i].email;
                CurrentUserPassword=userList[i].password;
                

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
}

function menuPage() {
    let menubar = document.getElementById('menubar') as HTMLDivElement;
    menubar.style.display = "block";
    let medicineinfo = document.getElementById('medicineinfo') as HTMLDivElement;
    medicineinfo.style.display = "none";
    let purchase = document.getElementById('purchase') as HTMLDivElement;
    purchase.style.display = "none";
    let cancel = document.getElementById('cancel') as HTMLDivElement;
    cancel.style.display = "none";
    let topup = document.getElementById('topup') as HTMLDivElement;
    topup.style.display = "none";
    let existingUser = document.getElementById('existingUser') as HTMLDivElement;
    existingUser.style.display = "none";
    let home = document.getElementById('home') as HTMLDivElement;
    home.style.display = "none";
    let historyDisplay = document.getElementById('historyDisplay') as HTMLLabelElement;
    historyDisplay.style.display = "none";
    let showBalance = document.getElementById('showBalance') as HTMLDivElement;
    showBalance.style.display = "none";
    let cancelDisplay = document.getElementById('cancelDisplay') as HTMLLabelElement;
    cancelDisplay.style.display = "none";
}

async function medicinedata() {
    let medicineinfo = document.getElementById('medicineinfo') as HTMLDivElement;
    medicineinfo.style.display = "block";
    const medicine= await fetchMedicine();
    //let purchase = document.getElementById('purchase') as HTMLDivElement;
    //purchase.style.display = "none";
    const tableBody = document.querySelector("#dataTable1 tbody") as HTMLTableSectionElement;
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

}

let medicinename: string;
let medicinecount: number;
let medicineprice: number;
let medicinedate: Date;
function Add() {
    let AddDiv = document.getElementById("AddDiv") as HTMLDivElement;
    AddDiv.style.display = 'block';
}

 
async function addPush() {
    medicinename = (document.getElementById("medicinename") as HTMLInputElement).value;
    medicinecount = parseInt((document.getElementById("medicinecount") as HTMLInputElement).value);
    medicineprice = parseInt((document.getElementById("medicineprice") as HTMLInputElement).value);
    medicinedate = new Date((document.getElementById("medicinedate") as HTMLInputElement).value);
    const medicineList= await fetchMedicine();
    if (currentMedicineId==null){
        let medicine: Medicine={
            medicineID: undefined,
            medicineName: medicinename,
            medicinePrice: medicineprice,
            medicineCount: medicinecount,
            expiryDate: medicinedate
        }
        addMedicine(medicine);
        medicinedata();
        
    }
    else{
        for (let i=0; i<medicineList.length; i++){
            if (medicineList[i].medicineID==currentMedicineId){
                medicineList[i].medicineName=medicinename;
                medicineList[i].medicinePrice=medicineprice;
                medicineList[i].medicineCount=medicinecount;
                medicineList[i].expiryDate=medicineList[i].expiryDate;
                medicinedata();
                updateMedicine(currentMedicineId,medicineList[i]);
            }
        }
    }
    
    let AddDiv = document.getElementById("AddDiv") as HTMLDivElement;
    AddDiv.style.display = 'none';
}

async function demo (item:number) {
    let medicine= await fetchMedicine();
    medicine = medicine.filter((items) => items.medicineID!== item);
    deleteMedicine(item);
    medicinedata();
}


//edit Medicine




let currentMedicineId: number | null;

async function edit(items: number){
    let emedname=document.getElementById("medicinename") as HTMLInputElement;
    let emedcount=document.getElementById("medicinecount") as HTMLInputElement;
    let emedprice=document.getElementById("medicineprice") as HTMLInputElement;
    let emeddate=document.getElementById("medicinedate") as HTMLInputElement;
    let AddDiv=document.getElementById("AddDiv") as HTMLDivElement;
    AddDiv.style.display="block";
    const medicineList= await fetchMedicine();
    const item = medicineList.find((item) => item.medicineID == items);
    if (item) {
        currentMedicineId=Number(item.medicineID);
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
        updateMedicine(currentMedicineId,item);
    }
    //medicineID: number;
    //medicineName: string;
    //medicineCount: number;
    //medicinePrice: number;
    //expiryDate: Date;
}




async function purchase() {
    let medicineinfo = document.getElementById('medicineinfo') as HTMLDivElement;
    medicineinfo.style.display = "none";
    const tableBody = document.querySelector("#dataTable tbody") as HTMLTableSectionElement;
    tableBody.innerHTML = "";
    const medicineList= await fetchMedicine();
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
    let purchase = document.getElementById("purchase") as HTMLDivElement;
    purchase.style.display = "block";

}

let selectID: number;
function add1(item: number) {

    let purchasedetails = document.getElementById('purchasedetails') as HTMLDivElement;
    purchasedetails.style.display = "block";
    selectID = item;
}

async function medicineListCheck() {
    let medicineInfo = document.getElementById('medicineInfo') as HTMLLabelElement;

    let medicineList = document.getElementById('medicineList') as HTMLSelectElement;
    const medicinelist=await fetchMedicine();

    let medicineName = medicineList[medicineList.selectedIndex].innerHTML;

    for (let i = 0; i < medicinelist.length; i++) {

        if (medicinelist[i].medicineName == medicineName) {
            medicineInfo.innerHTML = `Medicine Id : ${medicinelist[i].medicineID} --- Medicine Name : ${medicinelist[i].medicineName} --- Medicine Count : ${medicinelist[i].medicineCount} --- Medicine Price : ${medicinelist[i].medicinePrice} `;

            displayRequiredCount();
        }

    }
}



function displayRequiredCount() {
    //let medicineInfo = document.getElementById('medicineInfo') as HTMLLabelElement;
    let requiredCount = document.getElementById('requiredCount') as HTMLDivElement;

    //medicineInfo.style.display = "none";
    requiredCount.style.display = "block";
}



async function buyMedicine() {



    let proceed: boolean = true;
    let finalMedicineRequiredCount: number = 0;

    //let medicineList = document.getElementById('medicineList') as HTMLSelectElement;
    let medicineRequiredCount = (document.getElementById('medicineRequiredCount') as HTMLInputElement).value;

    //let medicineName = medicineList[medicineList.selectedIndex].innerHTML;

    let medicineRequiredCountRegex = /^\d{1,3}$/;
    const medicinelist=await fetchMedicine();
    const orderList=await fetchOrder();
    if (medicineRequiredCountRegex.test(medicineRequiredCount) && +medicineRequiredCount > 0) {
        for (let i = 0; i < medicinelist.length; i++) {

            if (medicinelist[i].medicineID == selectID) {


                if (medicinelist[i].medicineCount > 0) {

                    if ((medicinelist[i].medicineCount - +medicineRequiredCount) < 0) {
                        proceed = confirm(`We only have ${medicinelist[i].medicineCount} ${medicinelist[i].medicineName}. Do you want to buy ${medicinelist[i].medicineCount} ${medicinelist[i].medicineName}?`)

                        if (proceed) {
                            finalMedicineRequiredCount = medicinelist[i].medicineCount;
                        }
                    }
                    else {
                        finalMedicineRequiredCount = +medicineRequiredCount;
                    }

                    if (proceed) {
                        medicinelist[i].medicineCount = medicinelist[i].medicineCount - finalMedicineRequiredCount;
                        updateMedicine(selectID,medicinelist[i]);
                        let order: Order={
                            orderID: undefined,
                            medicineID: medicinelist[i].medicineID,
                            userID: CurrentUserId,
                            medicineName: medicinelist[i].medicineName,
                            medicineCount: finalMedicineRequiredCount,
                            orderStatus: "Ordered"
                        }
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
}

async function Topup() {
    let topup = document.getElementById('topup') as HTMLDivElement;
    let currentBalance = document.getElementById('currentBalance') as HTMLLabelElement;
    topup.style.display = "block";
    let userList=await fetchUser();
    //currentBalance.style.display="block";
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].userID == CurrentUserId) {
            currentBalance.innerHTML = userList[i].userBalance.toString();
            
        }
    }
}
async function recharge() {
    let topup = (document.getElementById('topup')) as HTMLDivElement;
    topup.style.display = "block";
    let amount = (document.getElementById('amount')) as HTMLInputElement;
    let amount1=Number(amount.value);
    // let recharge = document.getElementById('recharge') as HTMLElement;
    // recharge.style.display = "block";
    let afterTopup=document.getElementById('afterTopup') as HTMLElement;
    let rechargebalance = (document.getElementById('rechargebalance')) as HTMLLabelElement;
    rechargebalance.style.display="block";
    let userList=await fetchUser();
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].userID == CurrentUserId) {
            
            userList[i].userBalance += amount1;
            afterTopup.innerHTML = userList[i].userBalance.toString();
            const item :UserInfo ={
                userID: CurrentUserId,
                email: userList[i].email,
                password: userList[i].password,
                confirmPassword: userList[i].confirmPassword,
                phoneNumber: userList[i].phoneNumber,
                userBalance: userList[i].userBalance
            }
            updateUser(CurrentUserId,item);
            
        }
    }
}
async function showHistory() {
    
    let historyDisplay = document.getElementById('historyDisplay') as HTMLLabelElement;
    historyDisplay.style.display = "block";
    const orderList=await fetchOrder();
    let historyDisplaytable = document.querySelector("#historyDisplay tbody") as HTMLTableSectionElement;
    historyDisplaytable.innerHTML = "";
    

    orderList.forEach((item) => {
        if (item.userID == CurrentUserId ) {
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


    let medicinedata = document.getElementById('medicinedata') as HTMLDivElement;
    medicinedata.style.display = "none";
    let purchase = document.getElementById('purchase') as HTMLDivElement;
    purchase.style.display = "none";
    let showBalance = document.getElementById('showBalance') as HTMLDivElement;
    showBalance.style.display = "none";
}

async function ShowBalance() {
    let showBalance = document.getElementById('showBalance') as HTMLDivElement;
    showBalance.style.display = "block";
    const userList=await fetchUser();
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].userID == CurrentUserId) {
            let currentBalance = document.getElementById('balance') as HTMLLabelElement;
            currentBalance.innerHTML = `Your Available Balance is ${userList[i].userBalance.toString()}`
        }
    }
}

async function cancel() {
    let purchase = document.getElementById("purchase") as HTMLDivElement;
    purchase.style.display = "none";
    let topup = (document.getElementById('topup')) as HTMLDivElement;
    topup.style.display = "none";
    let historyDisplay = document.getElementById('historyDisplay') as HTMLLabelElement;
    historyDisplay.style.display = "none";
    let showBalance = document.getElementById('showBalance') as HTMLDivElement;
    showBalance.style.display = "none";
    let cancelDisplay = document.getElementById('cancelDisplay') as HTMLLabelElement;
    cancelDisplay.style.display = "block";
    const tableBody = document.querySelector("#cancelDisplay tbody") as HTMLTableSectionElement;
    tableBody.innerHTML = "";
    const orderList=await fetchOrder();
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
}

async function Remove(count: number) {
    const orderList=await fetchOrder();
    const medicineList=await fetchMedicine();
    orderList.forEach((item) => {
        if (item.orderID == CurrentOrderId) {
            item.orderStatus = "Cancelled";
            updateOrder(item.orderID,item);
            medicineList.forEach((items) => {
                if (items.medicineID == item.medicineID) {
                    items.medicineCount += item.medicineCount;
                    
                    updateMedicine(items.medicineID,items);
                    
                }
            })
        }
    })
    cancel();
}

