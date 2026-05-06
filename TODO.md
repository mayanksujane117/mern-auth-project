# Auth Project Bug Fixes - TODO

## Approved Plan Steps (in progress):

### 1. **✅ Planning Complete** - Bugs identified: Singup typo, undefined Navigation, empty pages, casing issues, backend junk import.

### 2. **✅ File Renames & Backend Fix** - Signup.jsx created (delete old Singup.jsx manually), AuthController cleaned.
   - Rename `Frontend/src/Pages/Singup.jsx` → `Frontend/src/Pages/Signup.jsx`.
   - Fix `Frontend/src/Pages/home.jsx` → export as `Home` (PascalCase).

### 3. **✅ Backend & Frontend Pages Implemented** - Login/Home/Signup forms with API/auth logic. App routes fixed.
   - Edit `Backend/controllers/AuthController.js`: Remove invalid `CommandFailedEvent` import.

### 4. **✅ App.jsx Complete** - Added Navigation bar, auth checks, clean routes.
   - Edit `Frontend/src/App.jsx`: Fix imports, add simple Navigation, auth checks.
   - Implement `Frontend/src/Pages/Login.jsx`: Form + API login.
   - Implement `Frontend/src/Pages/Signup.jsx`: Form + API register.
   - Implement `Frontend/src/Pages/Home.jsx`: Protected home with logout.

### 5. **✅ Fixed App.jsx syntax, added ToastContainer, ESLint tweaks.** Delete old files manually.
   - Backend: `cd Backend && npm start`.
   - Frontend: `cd Frontend && npm run dev`.
   - Test full flow: Signup → Login → Home.

### 6. **✅ Complete** - Use `attempt_completion`.

Updated as steps complete.
