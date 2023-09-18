export const useGetUserInfo = () => {
    const authData = localStorage.getItem("auth");
    console.log("Raw authData from local storage:", authData);
  
    if (!authData) {
      // Handle the case where the local storage data is not set yet
      return { name: null, profilePhoto: null, userId: null, isAuth: false };
    }
  
    const parsedData = JSON.parse(authData);
    console.log("Parsed authData:", parsedData);
  
    const { name, profilePhoto, userId, isAuth } = parsedData;
    return { name, profilePhoto, userId, isAuth };
  };
  