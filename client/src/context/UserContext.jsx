import { createContext, useContext, useState, useEffect } from "react";
import {
  getUserRequest,
  getUserByIdRequest,
  getPublicUserRequest,
  getUsersRequest,
  editUserRequest,
  editUserPictureRequest,
  editUserPasswordRequest,
  deleteUserRequest,
  verifyEmailRequest,
  changePasswordRequest,
} from "../api/user.js";
import { useAuth } from "../context/AuthContext.jsx";

const UserContext = createContext();

export const useUsers = () => {
  const context = useContext(UserContext);
  return context;
};

export function UserProvider({ children }) {
  const [userLoading, setUserLoading] = useState(false);
  const [userSaveLoading, setUserSaveLoading] = useState(false);
  const { authUser } = useAuth();
  const [errors, setErrors] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    username: "",
    picture: {},
    biography: "",
    networks: {
      instagram: "",
      tiktok: "",
      facebook: "",
      x: "",
      youtube: "",
      linkedin: "",
      spotify: "",
      pinterest: "",
      github: "",
    },
  });

  const getUser = async () => {
    try {
      setUserLoading(true);
      const res = await getUserRequest(authUser.username);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setUserLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (authUser) {
        await getUser();
      }
    })();
  }, [authUser]);

  const getPublicUser = async (username) => {
    const res = await getPublicUserRequest(username);
    return res.data;
  };

  const getUserById = async (id) => {
    const res = await getUserByIdRequest(id);
    return res.data;
  };

  const getUsers = async () => {
    const res = await getUsersRequest();
    setUsers(res.data);
  };

  const editUser = async (id, user) => {
    try {
      setUserSaveLoading(true);
      const res = await editUserRequest(id, user);
      setUser(res.data);
      setErrors([]);
      return true;
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors);
      } else {
        setErrors([
          {
            message: "Error con el servidor, reintentar mas tarde",
          },
        ]);
      }
      return false;
    } finally {
      setUserSaveLoading(false);
    }
  };

  const editUserPicture = async (id, user) => {
    try {
      setUserSaveLoading(true);
      const res = await editUserPictureRequest(id, user);
      setUser(res.data);
      setErrors([]);
      return true;
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors);
      } else {
        setErrors([
          {
            message: "Error con el servidor, reintentar mas tarde",
          },
        ]);
      }
      return false;
    } finally {
      setUserSaveLoading(false);
    }
  };

  const editUserPassword = async (id, user) => {
    try {
      setUserSaveLoading(true);
      const res = await editUserPasswordRequest(id, user);
      setUser(res.data);
      setErrors([]);
      return true;
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors);
      } else {
        setErrors([
          {
            message: "Error con el servidor, reintentar mas tarde",
          },
        ]);
      }
      return false;
    } finally {
      setUserSaveLoading(false);
    }
  };

  const deleteUser = async (id) => {
    try {
      setUserSaveLoading(true);
      await deleteUserRequest(id);
      return true;
    } catch (error) {
      console.log(errors);
    } finally {
      setUserSaveLoading(false);
    }
  };

  const verifyEmail = async (email) => {
    try {
      await verifyEmailRequest(email);
      return true;
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors);
      }
    }
  };

  const changePassword = async (email, password) => {
    try {
      await changePasswordRequest(email, password);
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        users,
        getUser,
        getUserById,
        getPublicUser,
        getUsers,
        editUser,
        editUserPicture,
        editUserPassword,
        deleteUser,
        errors,
        setErrors,
        userLoading,
        userSaveLoading,
        verifyEmail,
        changePassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
