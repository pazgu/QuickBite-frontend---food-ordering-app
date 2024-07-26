import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
    auth0Id: string;
    email: string;
  };
  
  export const useCreateMyUser = () => {
  
    const createMyUserRequest = async (user: CreateUserRequest) => {
      const response = await fetch(`${API_BASE_URL}/api/my/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      if (!response.ok) {
        throw new Error("Failed to create user");
      }
    };
  
    const {
      mutateAsync: createUser,
      isLoading,
      isError,
      isSuccess,
    } = useMutation(createMyUserRequest);
    //handle operations like creating, updating, or deleting data.
    //It allows UI updates before the server confirms the change, then automatically rolls back if there's an error
  
    return {
      createUser,
      isLoading,
      isError,
      isSuccess,
    };
  };
  