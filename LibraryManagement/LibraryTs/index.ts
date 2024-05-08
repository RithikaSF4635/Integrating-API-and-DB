
let CurrentUserId: number;
let CurrentUserName: string;
let CurrentUserEmail: string;
let CurrentUserPassword: string;
let  CurrentUserCardNumber: string;
let CurrentUser: UserInfo;
let CurrentUserBalance: number;

let CurrentBorrowID: number;

let NewUserNameStatus = false;
let NewUserEmailStatus = false;
let NewUserPasswordStatus = false;

let NewUserPhoneNumberStatus = false;




interface UserInfo {
    userID: any;
    userName: string;
    gender: string;
    department: string;
    phoneNumber: string;
    email: string;
    password: string;
    userBalance: number;
}


interface Book {
    bookID: any;
    bookName: string;
    authorName: string;
    bookCount: number;
}

interface Borrow {
    borrowID: any;
    bookID: number;
    userID: number;
    borrowedDate: Date;
    borrowBookCount: number;
    status: string;
    paidFineAmount: number;
}

//fetchUserInfo
async function fetchUser(): Promise<UserInfo[]> {
    const apiUrl = "http://localhost:5177/api/UserInfo";
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return await response.json();
  }

  // addUser
async function addUser(user: UserInfo): Promise<void>  {
    const response = await fetch("http://localhost:5177/api/UserInfo",{
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


//updateUser
async function updateUser(id: number, userInfo: UserInfo): Promise<void> {
    const response = await fetch(`http://localhost:5177/api/UserInfo/${id}`, {
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




//fetchBorrow
async function fetchBorrow(): Promise<Borrow[]> {
    const apiUrl = "http://localhost:5177/api/Borrow";
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch borrow');
    }
    return await response.json();
  }

// addBorrow
async function addBorrow(borrow: Borrow): Promise<void>  {
    const response = await fetch("http://localhost:5177/api/Borrow",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(borrow)
    });
    if (!response.ok) {
        throw new Error('Failed to add borrow');
      }
      
    
}



//updateBorrow
async function updateBorrow(id: number, borrow: Borrow): Promise<void> {
    const response = await fetch(`http://localhost:5177/api/Borrow/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(borrow)
    });
    if (!response.ok) {
      throw new Error('Failed to update borrow');
    }
    
  }



//fetchBook
async function fetchBook(): Promise<Book[]> {
    const apiUrl = "http://localhost:5177/api/Book";
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch book');
    }
    return await response.json();
  }

// addBook
async function addBook(book: Book): Promise<void>  {
    const response = await fetch("http://localhost:5177/api/Book",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    if (!response.ok) {
        throw new Error('Failed to add book');
      }
      
    
}

//updateBook
async function updateBook(id: number, book: Book): Promise<void> {
    const response = await fetch(`http://localhost:5177/api/Book/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });
    if (!response.ok) {
      throw new Error('Failed to update book');
    }
    
  }


//delete Borrow
async function deleteBorrow(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5177/api/Borrow/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete borrow');
    }
    
  }
//delete Book
async function deleteBook(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5177/api/Book/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete Book');
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
        let newUserGender = (document.getElementById('gender') as HTMLInputElement).value;
        let newUserDepartment = (document.getElementById('department') as HTMLInputElement).value;
        let newUserPhoneNumber = (document.getElementById('newUserPhonenumber') as HTMLInputElement).value;
        let newUserEmail = (document.getElementById('email') as HTMLInputElement).value;
        let newUserPassword = (document.getElementById('password') as HTMLInputElement).value;
        let newUserConfirmPassword = (document.getElementById('cpassword') as HTMLInputElement).value;
        let newUserBalance = 0;


        let user:UserInfo={
            userID: undefined,
            userName: newUserName,
            gender: newUserGender,
            department: newUserDepartment,
            phoneNumber: newUserPhoneNumber,
            email: newUserEmail,
            password: newUserPassword,
            //confirmPassword: newUserConfirmPassword,
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
                CurrentUserName = userList[i].userName;
                CurrentUserEmail = userList[i].email;
                CurrentUserPassword=userList[i].password;
                CurrentUserBalance=userList[i].userBalance;
                CurrentUser=userList[i];
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
    let historyDisplay1 = document.getElementById('historyDisplay') as HTMLTableElement;
    historyDisplay1.style.display = "none";
    let borrow = document.getElementById('borrow') as HTMLDivElement;
    borrow.style.display = "none";
    let historyDisplay = document.getElementById('borrowHistoryExport') as HTMLTableElement;
    historyDisplay.style.display = "none";
    let returnHistoryDisplay = document.getElementById('returnHistoryDisplay') as HTMLLabelElement;
    returnHistoryDisplay.style.display = "none";
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
    let borrow = document.getElementById('borrow') as HTMLDivElement;
    borrow.style.display = "none";
    let historyDisplay = document.getElementById('borrowHistoryExport') as HTMLTableElement;
    historyDisplay.style.display = "none";
    let returnHistoryDisplay = document.getElementById('returnHistoryDisplay') as HTMLLabelElement;
    returnHistoryDisplay.style.display = "none";
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
                userName: CurrentUserName,
                gender: userList[i].gender,
                department: userList[i].department,
                phoneNumber: userList[i].phoneNumber,
                email: userList[i].email,
                password: userList[i].password,
                userBalance: userList[i].userBalance
            }
            updateUser(CurrentUserId,item);
        }
    }
}

async function showHistory() {

    let borrowHistoryExport = document.getElementById('borrowHistoryExport') as HTMLLabelElement;
    borrowHistoryExport.style.display = "block";
    let historyDisplay = document.getElementById('historyDisplay') as HTMLLabelElement;
    historyDisplay.style.display = "block";
    const borrowList= await fetchBorrow();
    let historyDisplaytable = document.querySelector("#historyDisplay tbody") as HTMLTableSectionElement;
    historyDisplaytable.innerHTML = "";
    

    borrowList.forEach((item) => {
        if (item.userID == CurrentUserId ) {
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


    let borrow = document.getElementById('borrow') as HTMLDivElement;
    borrow.style.display = "none";
    let topup = document.getElementById('topup') as HTMLDivElement;
    topup.style.display = "none";
    let showBalance = document.getElementById('showBalance') as HTMLDivElement;
    showBalance.style.display = "none";
}

async function ExportData(){
    const a=document.querySelector('a') as HTMLAnchorElement;
    let data:string="BookID,UserID,Borrowed Date,Borrow Book Count,Status,Paid Fine Amount";
    const borrowList=await fetchBorrow();
    borrowList.forEach((item)=>{
        if (CurrentUserId == item.userID){
            data=data+`\n`+`${item.bookID},${item.userID},${item.borrowedDate.toString().substring(0,10)},${item.borrowBookCount},${item.status},${item.paidFineAmount}\n`;
        }
        
    })   
    const blob= new Blob([data],{type:'text/csv'});
    const url=URL.createObjectURL(blob);
    a.href=url;
    a.download='borrowDetails.csv';
}


async function BorrowBook() {
    
    const tableBody = document.querySelector("#dataTable tbody") as HTMLTableSectionElement;
    tableBody.innerHTML = "";
    const bookList= await fetchBook();
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
    let borrow = document.getElementById("borrow") as HTMLDivElement;
    borrow.style.display = "block";
    let borrowdetails = document.getElementById('borrowdetails') as HTMLDivElement;
    borrowdetails.style.display = "none";
}

let selectID: number;
async function add(item: number) {
    let borrowdetails = document.getElementById('borrowdetails') as HTMLDivElement;
    borrowdetails.style.display = "block";
    selectID = item;

}

async function borrow() {


    let flag: boolean=true;
    //let proceed: boolean = true;
    let finalBookRequiredCount: number = 0;

    //let medicineList = document.getElementById('medicineList') as HTMLSelectElement;
    let bookRequiredCount = (document.getElementById('bookRequiredCount') as HTMLInputElement).value;

    //let medicineName = medicineList[medicineList.selectedIndex].innerHTML;

    let RequiredCountRegex = /^\d{1,3}$/;
    const bookList=await fetchBook();
    const borrowList=await fetchBorrow();
    if (RequiredCountRegex.test(bookRequiredCount) && +bookRequiredCount > 0) {
        for (let i = 0; i < bookList.length; i++) {

            if (bookList[i].bookID == selectID) {

                flag=false;
                if (+bookRequiredCount <= bookList[i].bookCount){
                    let count: number=0;
                    borrowList.forEach((item) =>{
                        if (CurrentUserId == item.userID && item.status=="Borrowed"){
                            count++;
                        }

                    });
                    if (count===3){
                        alert("You have borrowed 3 books already");
                    }
                    else if (count > 3){
                        alert(`You can have maximum of 3 borrowed books. Your already borrowed books count is ${count} and requested count is ${bookRequiredCount}, which exceeds 3`)
                    }
                    else
                    {
                        let fine: number=0;
                        bookList[i].bookCount = bookList[i].bookCount - +bookRequiredCount;
                        updateBook(selectID,bookList[i]);

                        let borrow: Borrow={
                            borrowID: undefined,
                            bookID: bookList[i].bookID,
                            userID: CurrentUserId,
                            borrowedDate: new Date(),
                            borrowBookCount: +bookRequiredCount,
                            status: "Borrowed",
                            paidFineAmount: fine
                        }
                        addBorrow(borrow);
                        alert("Book Borrowed Successfully.");

                    }
                }
                else
                {
                    alert("Books are not available for the selected count");
                    borrowList.forEach((items) => {
                        if (selectID==items.bookID && items.status=="Borrowed"){
                            alert(`The book will be available on ${items.borrowedDate}`)
                        }
                    })
                }


               
            }

        }
        if (flag){
            alert("Invalid Book ID, Please enter valid ID");
        }
    }
    else {
        alert("Please enter valid Required Count");
    }
}

async function ReturnBook() {
    let returnHistoryDisplay = document.getElementById('returnHistoryDisplay') as HTMLLabelElement;
    returnHistoryDisplay.style.display = "block";
    let borrow = document.getElementById('borrow') as HTMLDivElement;
    borrow.style.display = "none";
    let topup = document.getElementById('topup') as HTMLDivElement;
    topup.style.display = "none";
    let showBalance = document.getElementById('showBalance') as HTMLDivElement;
    showBalance.style.display = "none";
    const returnHistoryDisplaytable = document.querySelector("#returnHistoryDisplay tbody") as HTMLTableSectionElement;
    returnHistoryDisplaytable.innerHTML = "";
    const borrowList= await fetchBorrow();
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
}


async function Return(selectedBorrowID: number) {
    const borrowList=await fetchBorrow();
    borrowList.forEach((item) => {
        if (selectedBorrowID == item.borrowID && item.status== "Borrowed"){
            let num: number=15;
            //date.setDate(date.getDate() + days)
            let date1 = new Date(item.borrowedDate);
             let date2 = date1.getDate();
            date1.setDate(date2 + num);
            let returnDate: Date=new Date();
            let days: number=returnDate.getTime() - date1.getTime();
            let days1 = Math.round(days / (1000 * 3600 * 24));
            if (returnDate > date1){
                let fine: number=days1*1;
                if (CurrentUserBalance>fine)
                {
                    CurrentUserBalance-=fine;
                    
                    updateUser(CurrentUserId,CurrentUser);
                    item.paidFineAmount=fine;
                    item.status="Returned";
                    updateBorrow(selectedBorrowID,item);
                    alert("Book returned successfully");
                }
                else{
                    alert("Insufficient balance. Please rechange and proceed")
                }
            }
            else{
                item.status="Returned";
                updateBorrow(selectedBorrowID,item);
                alert("Book returned successfully");
            }
        }
    })
    ReturnBook();
}