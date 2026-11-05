//To provide test data & objects/elements for whole application
import {Page} from '@playwright/test';
export class Global {
constructor(public page : Page) {
}
//******************Test Data ****************** */
public url      : string  = "https://sureshitacademy.in/hrms/login.php";
public username : string = "sureshit";
public password : string = "sureshit";
public empfirstname : string = "Sureshit";
public emplastname  : string = "Academy";
//******************objects / elements*********** */
public textbox_loginname : string = "//input[@name='txtUserName']";
public textbox_password  : string = "//input[@name='txtPassword']";
public button_login      : string = "//input[@name='Submit']";
public link_logout       : string = "//a[text()='Logout']";
public frame_empInfo     : string = "//iframe[@id='rightMenu']";
public button_add        : string = "//input[@value='Add']";
public textbox_empfirstname : string = "//input[@name='txtEmpFirstName']";
public textbox_emplastname  : string = "//input[@name='txtEmpLastName']";
public button_save          : string = "//input[@id='btnEdit']";
}