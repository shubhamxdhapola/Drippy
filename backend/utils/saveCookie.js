export const saveCookie = (jwtToken, res) => {
    res.cookie('jwt', jwtToken, {
        httpOnly: true,        
        secure: true,          
        sameSite: 'strict',    
        maxAge: 7 * 24 * 60 * 60 * 1000, 
    })
}