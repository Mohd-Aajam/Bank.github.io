   let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

        function sendMoney(){
           var enterName = document.getElementById("enterName").value;
           var enterAmount = parseInt(document.getElementById("enterAmount").value);
           
           let maxAmount =  5000;         
           if (enterAmount >maxAmount) 
           {
              alert("Insufficient Balance.")
           }
            else {

              var findUserBankAccount = enterName + " BankBalance";
              var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerText) + enterAmount;
              var myAccountBal = myAccountBalance - enterAmount;

            // alert on successful transaction
              document.getElementById("myAccountBalance").innerText = myAccountBal;
              document.getElementById(findUserBankAccount).innerHTML = finalAmount;
              alert('Successful Transaction !!  Rs. '+enterAmount +' is sent to '+enterName+'@email.com.')


              var createPTag = document.createElement("li");
              var textNode = document.createTextNode('Rs.'+enterAmount + 'is sent to recepient with Email-id'+enterName+'@email.com ');
              createPTag.appendChild(textNode);
              var element = document.getElementById("transaction-history-body");
              element.insertBefore(createPTag, element.firstChild);
           }
        }