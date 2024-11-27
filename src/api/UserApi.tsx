import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";
import { User } from "../types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyUserRequest = async (): Promise<User> => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user details");
    }
    return response.json();
  };

  const {
    data: currentUser,
    isLoading,
    error,
  } = useQuery("fetchCurrentUser", getMyUserRequest);
  //fetchCurrentUser is a unique key for the specific query

  if (error) {
    toast.error(error.toString());
  }

  return {
    currentUser,
    isLoading,
  };
};

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
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

type UpdateMyUserRequest = {
  name: string;
  addressLine1: string;
  city: string;
  country: string;
  // images: File[];
};

export const useUpdateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyUserRequest = async (formData: UpdateMyUserRequest) => {
    const accessToken = await getAccessTokenSilently();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("addressLine1", formData.addressLine1);
    form.append("city", formData.city);
    form.append("country", formData.country);

    // Check if images exist before trying to append them
    // if (formData.images && formData.images.length > 0) {
    //   formData.images.forEach((image) => {
    //     form.append("images", image);
    //   });
    // }

    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: form,
    });

    if (!response.ok) {
      throw new Error("Failed to update user");
    }
    return response.json();
  };

  const {
    mutateAsync: updateUser,
    isLoading,
    isSuccess,
    error,
    reset,
  } = useMutation(updateMyUserRequest);

  if (isSuccess) {
    toast.success("User profile updated!");
  }

  if (error) {
    toast.error(error.toString());
    reset(); //Clearing any error state, resetting the isSuccess and isLoading
  }

  return {
    updateUser,
    isLoading,
  };
};
