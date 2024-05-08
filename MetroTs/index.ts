
let CurrentUserId: number;
let CurrentUserName: string;
let CurrentUserEmail: string;
let CurrentUserPassword: string;
let  CurrentUserCardNumber: string;
let CurrentUser: UserInfo;
let CurrentUserBalance: number;

let CurrentTravelID: number;

let NewUserNameStatus = false;
let NewUserEmailStatus = false;
let NewUserPasswordStatus = false;
let NewUserConfirmPasswordStatus = false;
let NewUserPhoneNumberStatus = false;


interface UserInfo {

    userID: any;
    cardNumber: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword:string;
    phoneNumber: string;
    userBalance: number;

}

interface Travel {
    travelID: any;
    cardNumber: string;
    fromLocation: string;
    toLocation: string;
    dateTravel: Date;
    travelCost: number;
}


interface Ticket{
    ticketID: any;
    fromLocation: string;
    toLocation: string;
    ticketPrice: number;
}


//fetchUserInfo
async function fetchUser(): Promise<UserInfo[]> {
    const apiUrl = "http://localhost:5201/api/UserInfo";
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return await response.json();
  }

// addUser
async function addUser(user: UserInfo): Promise<void>  {
    const response = await fetch("http://localhost:5201/api/UserInfo",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Failed to add user');
      }
      
    
}

//fetchTravel
async function fetchTravel(): Promise<Travel[]> {
    const apiUrl = "http://localhost:5201/api/Travel";
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch travel');
    }
    return await response.json();
  }

// addTravel
async function addTravel(travel: Travel): Promise<void>  {
    const response = await fetch("http://localhost:5201/api/Travel",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(travel)
    });
    if (!response.ok) {
        throw new Error('Failed to add travel');
      }
      
    
}

//fetchTicket
async function fetchTicket(): Promise<Ticket[]> {
    const apiUrl = "http://localhost:5201/api/Ticket";
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch ticket');
    }
    return await response.json();
  }

// addTicket
async function addTicket(ticket: Ticket): Promise<void>  {
    const response = await fetch("http://localhost:5201/api/Ticket",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ticket)
    });
    if (!response.ok) {
        throw new Error('Failed to add ticket');
      }
      
    
}

//updateUser
async function updateUser(id: number, userInfo: UserInfo): Promise<void> {
    const response = await fetch(`http://localhost:5201/api/UserInfo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    });
    if (!response.ok) {
      throw new Error('Failed to update user');
    }
    
  }


  //updateTravel
  async function updateTravel(id: number, travel: Travel): Promise<void> {
    const response = await fetch(`http://localhost:5201/api/Travel/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(travel)
    });
    if (!response.ok) {
      throw new Error('Failed to update travel');
    }

  }


  //updateTicket
  async function updateTicket(id: number, ticket: Ticket): Promise<void> {
    const response = await fetch(`http://localhost:5201/api/Ticket/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ticket)
    });
    if (!response.ok) {
      throw new Error('Failed to update ticket');
    }
    
  }


  //delete Ticket
async function deleteTicket(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5201/api/Ticket/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete Ticket');
    }
    
  }
//delete Travel
async function deleteTravel(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5201/api/Travel/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete Travel');
    }
    
  }



// let UserArrayList: Array<User> = new Array<User>();

// UserArrayList.push(new User("rithi",  9789011226, 150));
// UserArrayList.push(new User("prathi",  9789012345, 100));

function home(){
    CurrentUserEmail="";
    
    let home=document.getElementById('home') as HTMLDivElement;
    home.style.display="block";
    let newUser = document.getElementById('newUser') as HTMLDivElement;
    let existingUser = document.getElementById('existingUser') as HTMLDivElement;
    newUser.style.display = "none";
    existingUser.style.display = "none";
}


function newUser() {
    let newUser = document.getElementById('newUser') as HTMLDivElement;
    let existingUser = document.getElementById('existingUser') as HTMLDivElement;
    newUser.style.display = "block";
    existingUser.style.display = "none";
}




function signUp() {

    if (NewUserNameStatus == true &&
        NewUserEmailStatus == true &&
        NewUserPasswordStatus == true &&
        NewUserPhoneNumberStatus == true) {
        let newUserName = (document.getElementById('newUserName') as HTMLInputElement).value;
        let cardNumber = (document.getElementById('cardNumber') as HTMLInputElement).value;
        let newUserEmail = (document.getElementById('email') as HTMLInputElement).value;
        let newUserPassword = (document.getElementById('password') as HTMLInputElement).value;
        let newUserConfirmPassword = (document.getElementById('cpassword') as HTMLInputElement).value;
        let newUserPhoneNumber = (document.getElementById('newUserPhonenumber') as HTMLInputElement).value;
        let newUserBalance = 0;


        let user:UserInfo={
            userID: undefined,
            cardNumber: cardNumber,
            userName: newUserName,
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

function checkNewUserName(paramNewUserName: string) {
    let newUserName = (document.getElementById(paramNewUserName) as HTMLInputElement).value;
    let newUserNameMessage = document.getElementById(paramNewUserName + "Message") as HTMLLabelElement;
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

        availableUser.innerHTML += `|User Name : ${userList[i].userName} | User Email : ${userList[i].email}<br>`;
    }

}

async function SignIn() {
    let noExistingUserIdChecker: boolean = false;
    let existingUserEmail = document.getElementById("existingUserEmail") as HTMLInputElement;
    let userList=await fetchUser();

    let existingUserEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (existingUserEmailRegex.test(existingUserEmail.value)) {

        for (let i = 0; i < userList.length; i++) {
            if (userList[i].email == existingUserEmail.value) {

                CurrentUserId = userList[i].userID;
                CurrentUserCardNumber=userList[i].cardNumber;
                CurrentUserName = userList[i].userName;
                CurrentUserEmail = userList[i].email;
                CurrentUserPassword=userList[i].password;
                CurrentUserBalance=userList[i].userBalance
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
}


function menuPage(){
    let menubar = document.getElementById('menubar') as HTMLDivElement;
    menubar.style.display = "block";
    let existingUser = document.getElementById('existingUser') as HTMLDivElement;
    existingUser.style.display = "none";
    let home = document.getElementById('home') as HTMLDivElement;
    home.style.display = "none";
    let showBalance = document.getElementById('showBalance') as HTMLDivElement;
    showBalance.style.display = "none";
    let topup = document.getElementById('topup') as HTMLDivElement;
    topup.style.display = "none";
    let travel = document.getElementById('travel') as HTMLDivElement;
    travel.style.display = "none";
    let historyDisplay = document.getElementById('historyDisplay') as HTMLTableElement;
    historyDisplay.style.display = "none";
}

function Exit() {
    let home=document.getElementById('home') as HTMLDivElement;
    home.style.display="block";
    let menubar = document.getElementById('menubar') as HTMLDivElement;
    menubar.style.display = "none";
    let existingUser = document.getElementById('existingUser') as HTMLDivElement;
    existingUser.style.display = "none";
    let showBalance = document.getElementById('showBalance') as HTMLDivElement;
    showBalance.style.display = "none";
    let topup = document.getElementById('topup') as HTMLDivElement;
    topup.style.display = "none";
    let travel = document.getElementById('travel') as HTMLDivElement;
    travel.style.display = "none";
    let historyDisplay = document.getElementById('historyDisplay') as HTMLTableElement;
    historyDisplay.style.display = "none";
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

async function Topup() {
    let topup = document.getElementById('topup') as HTMLDivElement;
    let currentBalance = document.getElementById('currentBalance') as HTMLLabelElement;
    topup.style.display = "block";
    let userList =await fetchUser();
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].userID == CurrentUserId) {
            currentBalance.innerHTML = userList[i].userBalance.toString();

        }
    }
}
async function recharge() {
    let topup = (document.getElementById('topup')) as HTMLDivElement;
    topup.style.display = "none";
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
                cardNumber: CurrentUserCardNumber,
                userName: CurrentUserName,
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


async function Travel() {
    const ticketList=await fetchTicket();
    let travel=document.getElementById('travel') as HTMLDivElement;
    travel.style.display="block";
    const tableBody=document.querySelector('#travelDisplay tbody') as HTMLTableRowElement;
    tableBody.innerHTML="";
    ticketList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML=`
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

}

async function BookTravel(bookTicketID: number) {
    let ticketList=await fetchTicket();
    let userList=await fetchUser();
    let proceed: boolean=true;

    for (let i=0; i<ticketList.length; i++) {
        if (ticketList[i].ticketID == bookTicketID) {
            if (CurrentUserBalance < ticketList[i].ticketPrice) {
                alert("You have insufficient Balance.");
            }
            else{
                userList.forEach((item) => {
                    if (CurrentUserId==item.userID) {
                        const newTravelHistory: Travel = {
                            travelID:undefined,
                            travelCost: ticketList[i].ticketPrice,
                            fromLocation: ticketList[i].fromLocation,
                            toLocation: ticketList[i].toLocation,
                            dateTravel: new Date(),
                            cardNumber: item.cardNumber
                        }
                        addTravel(newTravelHistory);
                        CurrentUserBalance=item.userBalance - ticketList[i].ticketPrice;
                        const updateUserBalance: UserInfo = {
                            userID: CurrentUserId,
                            userName: item.userName,
                            cardNumber: item.cardNumber,
                            email: item.email,
                            password: item.password,
                            confirmPassword: item.confirmPassword,
                            phoneNumber: item.phoneNumber,
                            userBalance: CurrentUserBalance
                        }
                        updateUser(CurrentUserId,updateUserBalance);
                    }
                })
                alert("Booking Successfull....");
            }
        }
    }
    Travel();
}


async function showHistory() {
    const travelList=await fetchTravel();
    let historyDisplay = document.getElementById('historyDisplay') as HTMLLabelElement;
    historyDisplay.style.display = "block";
    let historyDisplaytable = document.querySelector("#historyDisplay tbody") as HTMLTableSectionElement;
    historyDisplaytable.innerHTML = "";

    travelList.forEach((item) => {
        if (item.cardNumber == CurrentUserCardNumber) {
            CurrentTravelID = item.travelID;
            const row = document.createElement("tr");
            row.innerHTML=`
                <td>${item.travelID}</td>
                <td>${item.cardNumber}</td>
                <td>${item.fromLocation}</td>
                <td>${item.toLocation}</td>
                <td>${item.dateTravel.toString().split('T')[0].split('-').reverse().join('/')}</td>
                <td>${item.travelCost}</td>
            `;
            historyDisplaytable.appendChild(row);
        }
    })

}