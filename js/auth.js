checkAuthUser();
function checkAuthUser() { 
    // check is user is authenticated 
    if (!sessionStorage.authUser) { 
        sessionStorage.clear();
        localStorage.clear();
        window.location.href = 'login.html';
    }
}