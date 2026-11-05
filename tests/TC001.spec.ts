// To provide actual automation scripts 
import {test} from '@playwright/test';
import { General } from '../lib/General';
test('@Smoke_TC001 - Login and Logout', async ({ page }) => {
    let obj = new General(page);
    await obj.openApplication();
    await obj.login();
    await obj.logout();
});