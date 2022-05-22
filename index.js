
      
           AOS.init()
             
        						
            //function for the loader
  		const rotate=()=>{
  		        
				 document.querySelector("#loader").style.display="none";
  				document.querySelector("#whole-body").style.display="block";
 		   		}
    
     //it should rotate for 1 secs more once the whole body has been loaded succesfully
    const load=()=>{
    setInterval(rotate,100); 
    }
   