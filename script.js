
const pi = 3.14159265359;

function umfangResult(){
    setTimeout(function () {
        let result = (pi*2)*document.querySelector("#umfangInput").value;
        document.querySelector("#umfangOutput").value = result.toFixed(2);
    },1)  
}

function flächeResult(){
    setTimeout(function () {
        let result = pi*(document.querySelector("#flächeInput").value*document.querySelector("#flächeInput").value)
        document.querySelector("#flächeOutput").value = result.toFixed(2);
    },1)  
}


