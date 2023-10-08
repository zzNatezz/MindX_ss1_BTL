// function hover for "buid, learn and connet"
function hover(x){
    // const Build = document.getElementById("Build")
    // const Learn = document.getElementById("Learn")
    // const Connect = document.getElementById("Connect")
    const Build = "Build";
    const Learn = "Learn";
    const Connect = "Connect";
    if(x === Build){
        document.getElementById("hover_build").style.display = "block";
        document.getElementById("for_learn").style.display = "none";
        document.getElementById("for_connect").style.display = "none";
        document.getElementById("for_build").style.display = "block";
    }
    else if (x === Learn){
        document.getElementById("hover_build").style.display = "block";
        document.getElementById("for_build").style.display = "none";
        document.getElementById("for_connect").style.display ="none";
        document.getElementById("for_learn").style.display = "block";
    }
    else if (x === Connect){
        document.getElementById("hover_build").style.display = "block";
        document.getElementById("for_build").style.display = "none";
        document.getElementById("for_learn").style.display ="none";
        document.getElementById("for_connect").style.display = "block";
    }
}
function n_hover(){
    document.getElementById("hover_build").style.display = "none"
};


// sort main_content-1
let elSort = document.getElementById("category");
elSort.addEventListener("change", function(){
    let sortContent = document.querySelectorAll('.Case_Study, .Chinese, .DeFi, .Korean, .Nodes, .Setup, .Sui_move, .Fundamentals, .Tutorials' );
    let caStudy = document.querySelectorAll('.Case_Study');
    let Chinese = document.querySelectorAll('.Chinese');
    let deFi = document.querySelectorAll('.DeFi');
    let funDa = document.querySelectorAll('.Fundamentals');
    let koRean =document.querySelectorAll('.Korean');
    let Nodes =document.querySelectorAll('.Nodes');
    let setUp =document.querySelectorAll('.Setup');
    let suiMove =document.querySelectorAll('.Sui_move');
    let tuTo =document.querySelectorAll('.Tutorials');
    for(let i = 0; i < sortContent.length; i++){
        sortContent[i].style.display = "none"
        if(this.selectedIndex === 0){
            for(let z = 0; z<caStudy.length; z++){
                caStudy[z].style.display = "block"
            }
        }
        if(this.selectedIndex === 1){
            for(let z = 0; z<Chinese.length; z++){
                Chinese[z].style.display = "block"
            }
        }
        if(this.selectedIndex === 2){
            for(let z = 0; z<deFi.length; z++){
                deFi[z].style.display = "block"
            }
        }
        if(this.selectedIndex === 3){
            for(let z = 0; z<funDa.length; z++){
                funDa[z].style.display = "block"
            }
        }
        if(this.selectedIndex === 4){
            for(let z = 0; z<koRean.length; z++){
                koRean[z].style.display = "block"
            }
        }
        if(this.selectedIndex === 5){
            for(let z = 0; z<Nodes.length; z++){
                Nodes[z].style.display = "block"
            }
        }
        if(this.selectedIndex === 6){
            for(let z = 0; z<setUp.length; z++){
                setUp[z].style.display = "block"
            }
        }
        if(this.selectedIndex === 7){
            for(let z = 0; z<suiMove.length; z++){
                suiMove[z].style.display = "block"
            }
        }
        if(this.selectedIndex === 8){
            for(let z = 0; z<tuTo.length; z++){
                tuTo[z].style.display = "block"
            }
        }     
    }
    
},false);


//function for App Tools & Infrastructure
