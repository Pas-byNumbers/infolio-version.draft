

export const userLogInFetch = userInfo => {
  return async dispatch => {
    const resp = await fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ userInfo })
    });
    const credentials = await resp.json();
    if (credentials.message) {
      // Here you should have logic to handle invalid login credentials.
      // This assumes your Rails API will return a JSON object with a key of
      // 'message' if there is an error
      alert(credentials.message);
    } else {
      let user_json = JSON.parse(credentials.user)
      localStorage.setItem("token", credentials.jwt);
      dispatch(loginUser(user_json));
    }
  };
};

export const userCreate = userInfo => {
  return async dispatch => {
    const resp = await fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ userInfo })
    });
    const credentials = await resp.json();
    if (credentials.message) {
      alert(credentials.message);
      // Here you should have logic to handle invalid creation of a user.
      // This assumes your Rails API will return a JSON object with a key of
      // 'message' if there is an error with creating the user, i.e. invalid username
    } else {
      let user_json = JSON.parse(credentials.user)
      localStorage.setItem("token", credentials.jwt);
      dispatch(loginUser(user_json));
    }
  };
};

// ANOTHER WAY TO DO IT
// export function loginUserFetch(userInfo){
//   return dispatch=>fetch('http://localhost:3000/login', {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userInfo)
//       })
//       .then(r=>r.json())
//       .then(data=>{
//           if(data.error){
//               alert(data.error)
//           }else{
//            let user_json = JSON.parse(data.user) 
//            localStorage.setItem("token", data.jwt)
//            dispatch(loginUser(user_json))
//           }
//        })
// }
// export function createUser(userinfo){
//   return dispatch=>fetch('http://localhost:3000/signup', {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userinfo)
//       }).then(r=>r.json())
//          .then(data=>{
//          if(data.error){
//              alert(data.error)
//          }else{
//           localStorage.setItem("token", data.jwt)
//           dispatch(loginUser(data.user))
//          }
//       })
// }