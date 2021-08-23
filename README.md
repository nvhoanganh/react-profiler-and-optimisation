
# Reat testing - Agenda
- testing stateless function (utilities)
- testing custom React Hook 
- testing simple React component with useState and useEffect hooks
- testing simple React component with Fetch using Mock Service Worker - calling API on mount 
- testing simple React component with Fetch using Mock Service Worker - calling API on click event
- testing simple React component with Global State (Recoil)
- e2e testing React App using Playwright

# add e2e tests to react app

- use CodeGen feature and have the test written for you
```bash
npm i -D concurrently
npm i -D @playwright/test
npx playwright install
npx concurrently --kill-others "npm run start" "npx playwright codegen --viewport-size  \"1200, 720\" localhost:3000"
```

- copy the generated code to `e2e/app.spec.ts` file
- add the following scripts to the script file

```json
    "test:e2e": "playwright test -c e2e",
		"test:e2e:debug": "PWDEBUG=1 playwright test",
    "test:e2e:ci": "concurrently --kill-others \"npm run start\" \"sleep 5 && npm run test:e2e\"",
    "test:e2e:ci:updatesnapshot": "concurrently --kill-others --success first \"npm run start\" \"sleep 5 && npm run test:e2e -- --update-snapshots\"",
		"test:e2e:headed": "playwright test --headed"
```

- run the test `npm run test:e2e:ci`
