import { useEffect } from "react";
import { useUsers } from "../context/UserContext.jsx";
import Sidebar from "../components/Sidebar.jsx";
import UsersList from "./UsersPage.jsx";

function Admin() {
	const { getUsers, users } = useUsers();

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<>
			<div className="flex p-4">
				<Sidebar />
				<div className="w-[80%] min-h-screen ml-[20%] bg-zinc-800 px-6 rounded-xl overflow-auto">
					<UsersList users={users}/>
				</div>
			</div>
		</>
	);
}

export default Admin;
