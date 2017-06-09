//Utgå från bankAccount.js från uppgift 17. Föreställ dig hur en applikation som hanterar ett bankkonto skulle kunna se ut. Skriv ner vad applikationen kan ha för state. Skriv också ner Actions som man skulle kunna använda i en sådan applikation, minst tre stycken. Skriv dessutom en Reducer-funktion som skapar nya state baserat på dina Actions.
//Lämna in uppgiften på samma sätt som tidigare uppgifter, genom att länka till ett repo på GitHub som innehåller en fil.
//


//STATE
let initialState = {
    account:{
		    name : 'person',
            accountNo: 0851-777777,
            balance : '0',
		    openAccount : true, 
        },
	
 }



//ACTIONS

const greate = "GREATE";
const deposit = "DEPOSIT";
const withdraw = "WITHDRAW";
const transfer= "TRANSFER";
const closingAccount = "CLOSINGACCOUNT";

//createa new account

function newAccount(name, accountNo, balance) {
  const action = {
    type: CREATE,
    name: name,
    accountNo: accountNo,
    balance: balance
  }
  return { action.type, action.name, action.accountNo, action.balance}
}


// Deposit

function depositD(amount) {
  const action = {
    type: DEPOSIT,
    amount: amount
  }
  return { action.type, action.amount}
}


// Withdraw

function withdrawW(amount) {
  const action = {
    type: WITHDRAW,
    amount: amount
  }
  return { action.type, action.amount}
}


// TransferFunds

function transferT(amount, destinationAccount) {
  const action = {
    type: TRANSFER,
    amount: amount,
    destinationAccount: destinationAccount
  }
    return { action.type, action.amount, action.destinationAccount}
}


//  closingAccount

function closingAccount(amount, destinationAccount)  {
   const action ={
    type: "CLOSINGACCOUNT",
    amount:amount,
    destinationAccount:destinationAccount,
    openAccount:false
  }
  retunr {action.type,action.amount,action.destinationAccount}





// REDUCER 

function reducer(state=initialState, action) {
    switch(action.type) {
		case GREATE:
			return {
				     name: action.name,
                     accountNo: action.accountNo,
                     balance: action.balance
			}
        case DEPOSIT:
            return {
                balance: state.balance + action.amount
            };
        
            
        case WITHDRAW :
            return {
                balance: state.balance - action.amount
            };
        
            
        case TRANSFER:
            return {
                balance: state.balance - action.amount
            };
       
			
		case CLOSINGACCOUNT:
            return {
              openAccount:action.openAccount;
            }
		
     }
}
export defalut reducer;