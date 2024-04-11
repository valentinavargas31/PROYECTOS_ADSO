/**
 * Author: MAIRA MEDINA
 * Update Date:
 * Descriptions:
 * 
 */

/**This funtions is general for validate the form HTML */
function validateForm() {
/**This is the variable declarations*/
    var objForm=document.getElementById("form_login");
    var elements=objForm.querySelectorAll("input");
    for(let i=0;i<elements.length;i++){
        console.log(elements[i].value);
        if(elements[i].value == ""){
            alert("Valide los datos ingresados");
            elements[i].focus();
            return false;
        }
    }
}
/**
 * Author: MAIRA MEDINA
 * Update Date:
 * Descriptions: This functions is for get form object and validate
 * Return:value boolean
 * Parameter: 
 * @id is identification the form
 * @e is event the form
 */
function getData(id,e) {
        var objForm=document.getElementById(id);
        var elements=objForm.querySelectorAll("input");
        var elementsLeng=elements.length;
        for(let i=0;i<elementsLeng;i++){
            let element=elements[i];
            if(element.value=="" || element.length==0){
                alert("Error: Validate Element");
                element.classList.add('errorInput');
                e.preventDefault();
                return false;
            }else{
                element.classList.remove('errorInput');
            }
        }
        //getDataJson();
        e.preventDefault();
        return  false;
    }
    //getDataJson();
/**
 * Author:MAIRA MEDINA 
 * Update Date:
 * Descriptions: This functions is for get form object and validate
 * Return:value boolean
 * Parameter: 
 * @id is identification the form
 * @e is event the form
 */

function clearData(id) {
    var objForm=document.getElementById(id);
    var elements=objForm.querySelectorAll("input, select");
    var elementsLeng=elements.length;
    for(let i=0;i<elementsLeng;i++){
        let element=elements[i];
        element.value = "";
    }
}

function formDisabled(id) {
    var objForm=document.getElementById(id);
    var elements=objForm.querySelectorAll("input, select");
    var elementsLeng=elements.length;
    for(let i=0;i<elementsLeng;i++){
        let element=elements[i];
        element.disabled = true;
    }
}

function formEnable(id) {
    var objForm=document.getElementById(id);
    var elements=objForm.querySelectorAll("input, select");
    var elementsLeng=elements.length;
    for(let i=0;i<elementsLeng;i++){
        let element=elements[i];
        element.disabled = false;
    }
}

function formEnableEdit(id) {
    var objForm = document.getElementById(id);
    var elements = objForm.querySelectorAll("input, select");
    var elementsLeng = elements.length;
    for (let i = 0; i < elementsLeng; i++) {
        let element = elements[i];
        if (element.getAttribute('name') === 'user_email') {
            element.disabled = true; // Bloquear el campo "user_email"
        } else {
            element.disabled = false; // Desbloquear los demás campos
        }
    }
}

function createUser (id) {
    clearData(id);
    formEnable(id);
    showModal();
}

function editUser(id) {
    clearData(id); // Limpiar los datos del formulario
    formEnableEdit(id); // Desbloquear todos los campos excepto el campo "user_email"
    showModal(); // Mostrar el modal
}

function deleteUser(id) {
    let getConfirm=window.confirm("Seguro desea Eliminar?");
    //console.log(getConfirm);
    if(getConfirm){
    alert("OK DELETE");
    }else{
    alert("ERROR DELETE");
    }
}

function viewUser(id) {
    // Supongamos que tienes la información que deseas mostrar almacenada en un objeto userInfo
    var userInfo = {
        user_email: "maira@gmail.com",
        user_password: "123450",
        user_password_repeat: "123450",
        user_role: "Admin",
        user_state: "Activo",
        // Otros campos de información
    };

    // Llenar los campos del formulario con la información del objeto userInfo
    var objForm = document.getElementById(id);
    var elements = objForm.querySelectorAll("input, select");
    var elementsLength = elements.length;
    for (let i = 0; i < elementsLength; i++) {
        let element = elements[i];
        if (userInfo.hasOwnProperty(element.name)) {
            element.value = userInfo[element.name];
        }
    }
    formDisabled(id); // Deshabilitar la edición del formulario
    showModal(); // Mostrar el modal
}

function showModal() {
    var myModal = new bootstrap.Modal(document.getElementById("modalUser"), {});
    myModal.show();
}

function hiddenModal() {
    var myModal = new bootstrap.Modal(document.getElementById("modalUser"), {});
    myModal.hidden();
}
//input_disabled