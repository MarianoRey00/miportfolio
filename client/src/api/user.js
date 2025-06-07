import axios from "./axios.js";

export const getUserRequest = (username) => axios.get(`/user/${username}`);

export const getPublicUserRequest = (username) =>
	axios.get(`/user/profile/${username}`);

export const getUsersRequest = () => axios.get("/users");

export const editUserRequest = (id, user) =>
	axios.put(`/user/${id}/edit`, user);

export const editUserPictureRequest = (id, user) =>
	axios.put(`/user/${id}/edit-picture`, user, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});

export const editUserPasswordRequest = (id, user) =>
	axios.put(`/user/${id}/edit-password`, user);

export const deleteUserRequest = (id) => axios.delete(`/user/${id}`);
