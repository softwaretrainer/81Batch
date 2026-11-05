import {test} from '@playwright/test';
import { General } from '../lib/General';

test.describe('Regression Suite', () => {
test('TC001 - Login and Logout', async ({ page }) => {
    let obj = new General(page);
    await obj.openApplication();
    await obj.login();
    await obj.logout();
});
test('TC002_Add New Employee',async ({ page })=>{
    //--Test Steps
    const obj = new General(page);
    await obj.openApplication();
    await obj.waitStmt();
    await obj.login();
    await obj.waitStmt();
    await obj.addEmployee();
    await obj.waitStmt();
    await obj.logout();
    await obj.waitStmt();
});
});