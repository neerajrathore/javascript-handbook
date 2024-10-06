**DOM Manipulation in JavaScript**

The Document Object Model (DOM) represents the structure of a webpage as a tree of objects.
DOM manipulation allows developers to update the content and style of web pages without needing to
reload them. 

**Accessing DOM Elements**
**1. getElementById**
    let element = document.getElementById('myElement');
    console.log(element); 
  
 Outputs the element with id="myElement"

**2. getElementsByClassName**
    let elements = document.getElementsByClassName('myClass');
    console.log(elements); 

Outputs a collection of elements with class="myClass"

**3. querySelector**
    let firstElement = document.querySelector('.myClass');
    console.log(firstElement); 

Outputs the first element with class="myClass"

**Manipulating DOM Elements**
    
**1. Changing Text Content**
    let element = document.getElementById('myElement');
    element.textContent = 'New text content';

Changes the text inside the element

**2. Modifying Attributes**
    let link = document.querySelector('a');
    link.setAttribute('href', 'https://example.com');

 Changes the href attribute

   
    






**Using of DOM MANIPULATION for a Login Page (along with local storage too)**


      lusername = [];
      lpassword = [];
      
      loadFromLocal();// Load any stored usernames and passwords from localStorage when the page loads
      
      console.log(lusername, lpassword)
      
      
      function changetoSign()
      {
          document.querySelector(".signupFORM").style.display = "block";
          document.querySelector(".loginFORM").style.display = "none";
      }
      
      function changetoLog()
      {
          document.querySelector(".signupFORM").style.display = "none";
          document.querySelector(".loginFORM").style.display = "block";
      }
      // var userArray = []; 
      // var passwordArray = [];
      
      
      // lusername = lusername?lusername=lusername.split(","):lusername=[];
      // if(lpassword){
      //     lpassword=lpassword.split(",");
      // }
      // else{
      //     lpassword=[];
      // }
      
      function DOLOGIN()
      {
          // Get the values entered by the user for username and password
          let username = document.querySelector("#login_user").value;
          let password = document.querySelector("#login_Pass").value;
      
          let flag = false;
              for(let i =0;i<lusername.length;i++){
                  if (username == lusername[i] && password == lpassword[i])
                  {
                      flag = true;
                      break;
                  }
                  }
              if(flag){
                  alert("User Present");
                  window.location.href = "https://www.youtube.com/";
              } else{
                  alert("User not found");
                  location.reload();
              }
      } 
      
      function DOSIGNUP(){
           // Get the values entered by the user for signup fields
          let newUsername = document.querySelector("#signup_username").value;
          let newPassword = document.querySelector("#signup_Pass").value;
          let confirmPassword = document.querySelector("#signup_confirm_Pass").value;
          let newEmail = document.querySelector("#signup_Email").value;
      
          if (newPassword === "" || newUsername === "" || newEmail === "") {
              alert("Bhar de Bhai/Bahen!!");
          } else if (newPassword === confirmPassword) {
              lusername.push(newUsername);
              lpassword.push(newPassword);
              savetoLocal();
              alert("Sign-up Successful");
          } else {
              alert("Chlna be phir se bhar");
          }
      }
      
      
      function savetoLocal(){
          // Function to save usernames and passwords to localStorage
          localStorage.setItem('uname',lusername);
          localStorage.setItem('pass',lpassword);
      }
      
      
      
      function loadFromLocal() {
          let storedUsername = localStorage.getItem('uname');
          let storedPassword = localStorage.getItem('pass');
      
          lusername = storedUsername ? storedUsername.split(",") : [];
          lpassword = storedPassword ? storedPassword.split(",") : [];
      }
      
      
      
      // Function to handle forgotten password logic (currently not fully done)
      function forgotPassword(){
          let show_password = prompt("Enter Username ");
          for(let i =0;i<userArray.length;i++){
              if (show_password == userArray[i] )
              {
                 alert("Password is: "+ passwordArray[i]);
              } else{
                  alert("Username not found")
              }
              }
      }
      
      // Function to display the list of users in a table format (for dashboard purposes)
      function getUsers() {
          for (let i = 0; i < lusername.length; i++) {
              let tableRow = document.createElement('tr');
              let tableData = document.createElement('td');
              let tableData1 = document.createElement('td');
              let tableData2 = document.createElement('td');
              
              
              tableData.innerHTML = i + 1; 
              tableData1.innerHTML = lusername[i];
              tableData2.innerHTML = `
                  <div class="action-btns">
                      <button class="btn btn-edit" onclick="editUser(${i})">Edit</button>
                      <button class="btn btn-delete" onclick="deleteUser(${i})">Delete</button>  
                      <button class="btn btn-ban" onclick="banUser(${i})">Ban</button>   
                      <button class="btn btn-admin" onclick="cAdmin(${i})">Admin</button> 
                  </div>  
              `;
              
              tableRow.appendChild(tableData);
              tableRow.appendChild(tableData1);
              tableRow.appendChild(tableData2);
              document.querySelector('#table-body').appendChild(tableRow);
          }
      }
      
    

    

**Conclusion**
DOM manipulation is a core aspect of JavaScript that allows developers to dynamically 
change the content, structure, and appearance of web pages. By understanding how to 
access and manipulate the DOM, you can create highly interactive and dynamic user experiences.
