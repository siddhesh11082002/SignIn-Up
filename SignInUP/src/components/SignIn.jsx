import {useState} from 'react';

function SignIn(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = (e) =>{
        // Stops page reload
        e.preventDefault();

        console.log("Email: ",email);
        console.log("Password: ",password);
    };

    return(
        <div className="sign-in-container">
            <h2>Welcome Back</h2>

        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    required
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </div>

            <div className="checkbox-group">
                <input type="checkbox" id="terms" name="terms" required />
                <label htmlFor="terms">I agree to all Term, Privacy Policy and Fees</label>
            </div>

            <button type="submit">Sign In</button>
        </form>
        
            <div className="forgot-password">
                <p>
                    Forgot Login Detail ? <a href="#">Reset</a>
                </p>
            </div>


            <p>or</p>

            <div className="social-sign-in">
                <button type="button">Sign in With Google</button>
            </div>

            <div className="dont-have-account">
                <p>
                    Don't have an account ? <a href="#">Now Sign Up</a>
                </p>
            </div>
        </div>
    );
}

export default SignIn;