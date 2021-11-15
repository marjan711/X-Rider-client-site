import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,getIdToken} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase=()=>{
    const[user,setUsers]=useState({});
    const[error,setError]=useState('');
    const[isLoading,setLoading]=useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
   

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

     const signInUsingGoogle=(location, history)=>{
       setLoading(true);
       signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setLoading(false));
       
        
     }

     
    // Creating new user using email& password

     const createUser=(email,password,name,history)=>{
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {  
          setError('');
          const newUser = { email, displayName: name };
          setUsers(newUser);
          saveUser(email, name, 'POST');
          // send name to firebase after creation
          updateProfile(auth.currentUser, {
              displayName: name
          }).then(() => {
          }).catch((error) => {
          });
          history.replace('/');
      })
      .catch((error) => {
          setError(error.message);
          console.log(error);
      })
      .finally(() => setLoading(false));;
         

          
        
     }
    // Login With email & password
     const handleUserLogin = (email, password,location,history) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT');

            const destination = location?.state?.from || '/';
            history.replace(destination);
            console.log(result.user);
            setError('');
          })
          .finally(()=>setLoading(false))
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
          });
          
      };

      const updateName=(name)=>{
          
        updateProfile(auth.currentUser,{displayName: name}) 
          .then((result) => {
            
          })
      }
    //  to oberserve users state
    useEffect(()=>{
       const unsubsribed= onAuthStateChanged(auth, (user) => {
            if (user) {
             setUsers(user);
             getIdToken(user)
             .then(idToken => {
              setToken(idToken);
          })
            
            } else {
              setUsers({})
            }
            setLoading(false)
          });
          return ()=> unsubsribed;
    },[auth])

     const logOut=()=>{
        setLoading(true)
         signOut(auth)
         .then(()=>{})
         .finally(()=>setLoading(false))
     }

    //  for admin 
    useEffect(() => {
      fetch(`https://protected-scrubland-08359.herokuapp.com/users/${user.email}`)
          .then(res => res.json())
          .then(data => setAdmin(data.admin))
  }, [user?.email])
  

     const saveUser = (email, displayName, method) => {
      const user = { email, displayName };
      fetch('https://protected-scrubland-08359.herokuapp.com/users', {
          method: method,
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
          .then()
  }
  

    return {
        user,
        signInUsingGoogle,
        createUser,
        handleUserLogin,
        logOut,
        error,
        updateName,
        isLoading,
        saveUser,
        admin,
        token

        
    }
}

export default useFirebase;