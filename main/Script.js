
    document.getElementById('menu-btn').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    });
    function sumbit(){
        console.log('hi')
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let tel = document.getElementById("tel").value.trim();
        let pat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
        let pat1=/[0-9]/
    
        if (!pat.test(email)) { 
            alert("Enter a valid email format.");
            return;
        }
        if (pat1.test(name)) { 
            alert("Enter a valid namee format.");
            return;
        }
        if(len(tel)< 10){
        alert("Enter a valid Number")
            return;
        }
    
        alert("Sucess")
    }