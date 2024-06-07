import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
	const { isAuthenticated, logout, user } = useAuth();

	return (
		<>
			<header className="sticky top-0 z-10">
				<nav className=" flex justify-between text-black bg-orange-50 py-6 px-[40px] h-20 text-lg border-b border-black font-normal">
					<div className="">
						<Link to="/">
							<svg
								width="200"
								height="50"
								viewBox="0 0 388 101"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6 70L385 67.9787"
									stroke="url(#paint0_linear_0_1)"
									stroke-width="5"
									stroke-linecap="round"
								/>
								<path
									d="M18.398 64.2857C15.1343 64.0177 11.9482 63.4884 9.09098 61.6646C-1.68064 54.7888 4.44178 43.2538 13.6734 38.2893C22.579 33.5001 35.7857 31.7173 45.6081 34.5956C56.9768 37.927 44.999 49.9748 39.4985 52.2641C38.4866 52.6852 36.9213 52.7716 36.2281 51.9226C33.9169 49.0918 38.343 43.241 39.4489 42.0886C46.4058 34.8388 64.206 29.071 72.694 37.116C79.149 43.234 75.9194 55.8419 74.5488 63.082L67.9688 97.9255"
									stroke="#1E2330"
									stroke-width="6"
									stroke-linecap="round"
								/>
								<circle
									cx="100.986"
									cy="28.992"
									r="3.53072"
									transform="rotate(-7.28231 100.986 28.992)"
									fill="#1E2330"
								/>
								<circle
									cx="339.953"
									cy="26.1947"
									r="3.53072"
									transform="rotate(-7.28231 339.953 26.1947)"
									fill="#1E2330"
								/>
								<path
									d="M107.204 61.2756C114.125 60.3876 119.743 60.1287 126.283 57.3031C131.848 54.8984 138.502 50.5391 141.089 44.8137C142.754 41.1274 142.273 34.8594 138.507 32.1815C134.38 29.2466 129.303 32.3758 126.55 35.0966C121.545 40.0435 116.148 50.32 113.524 56.2742C110.278 63.6415 107.496 72.7673 105.721 80.6527C104.584 85.7039 104 90.8433 104 96"
									stroke="#1E2330"
									stroke-width="6"
									stroke-linecap="round"
								/>
								<path
									d="M75 66C81.6889 63.7663 95.9098 54.8392 99.282 37C96.8874 44.9023 97.2635 61.2699 107 61.4951"
									stroke="#1E2330"
									stroke-width="6"
								/>
								<path
									d="M169.718 54.2556C166.945 60.8986 160.153 63.7659 154.893 61.5701C149.634 59.3743 146.898 52.5287 149.671 45.8856C152.445 39.2425 159.237 36.3752 164.496 38.5711C169.755 40.7669 172.492 47.6125 169.718 54.2556Z"
									stroke="#1E2330"
									stroke-width="6"
								/>
								<path
									d="M149.249 48.1762C157.98 50.3239 166.005 49.761 174.452 46.2987"
									stroke="#1E2330"
									stroke-width="6"
									stroke-linecap="round"
								/>
								<path
									d="M371.993 52.0528C369.219 58.6958 362.428 61.5631 357.168 59.3673C351.909 57.1714 349.172 50.3258 351.946 43.6828C354.72 37.0397 361.511 34.1724 366.771 36.3682C372.03 38.5641 374.767 45.4097 371.993 52.0528Z"
									stroke="#1E2330"
									stroke-width="6"
								/>
								<path
									d="M351.781 48.0102C360.744 48.7108 368.571 46.8514 376.344 42.0626"
									stroke="#1E2330"
									stroke-width="6"
									stroke-linecap="round"
								/>
								<path
									d="M302.23 52.0528C299.456 58.6958 292.665 61.5631 287.405 59.3673C282.146 57.1714 279.409 50.3258 282.183 43.6828C284.957 37.0397 291.748 34.1724 297.008 36.3682C302.267 38.5641 305.004 45.4097 302.23 52.0528Z"
									stroke="#1E2330"
									stroke-width="6"
								/>
								<path
									d="M282.018 48.0102C290.981 48.7108 298.808 46.8514 306.581 42.0626"
									stroke="#1E2330"
									stroke-width="6"
									stroke-linecap="round"
								/>
								<path
									d="M304 43.9333C316.571 38.0088 329.141 2.99996 319.19 3C303.723 3.00006 311.207 75.3297 326.523 56.8596C330.126 52.7274 336.77 40.7773 338.234 34.7882C335.982 44.0022 341.027 65.3786 354 58.7446"
									stroke="#1E2330"
									stroke-width="6"
								/>
								<path
									d="M200.566 56.0885C209.609 50.7122 215.575 42.1655 221.114 33.2445C224.297 28.1191 227.041 22.6929 229.444 17.1633C229.514 17.002 232.321 10.215 229.41 16.5911C225.593 24.9523 221.865 33.4092 218.783 42.0729C216.723 47.8639 214.019 50.7442 217.584 57.0582C220.598 62.3974 225.714 62.0899 231.212 60.9555"
									stroke="#1E2330"
									stroke-width="6"
									stroke-linecap="round"
								/>
								<path
									d="M213.009 24.592C224.263 23.4971 235.551 23.9465 246.841 23.8651"
									stroke="#1E2330"
									stroke-width="6"
									stroke-linecap="round"
								/>
								<path
									d="M231 61C242.715 57.7776 251.602 49.1874 260.747 40.801C266.085 35.9067 271.197 30.1284 273.462 23.0972C273.871 21.8297 274.554 18.4795 273.039 17.3857C271.678 16.4031 270.673 17.4898 269.432 18.506C260.089 26.1607 253.32 38.0914 247.996 48.5878C244.953 54.5858 242.293 60.7779 239.808 67.0262C237.479 72.8781 232.319 86.488 232.042 94.1879C231.688 104.055 243.27 91.775 244.279 90.717C251.539 83.1023 259.717 70.1143 252.964 59.6986C251.55 57.5183 249.657 56.5672 247.113 56.5214C246.87 56.5171 242.75 56.66 242.715 57.3295C242.571 60.0613 260.621 56.3654 261.281 56.1541C269.639 53.4781 276.594 49.0143 282 42.2702"
									stroke="#1E2330"
									stroke-width="6"
									stroke-linecap="round"
								/>
								<path
									d="M173.237 47.1144C176.154 45.0076 179.187 43.333 181.635 40.5899C183.187 38.8505 184.74 36.7253 184.781 34.2863C184.814 32.311 183.759 30.3234 182.634 28.7616C182.602 28.7164 182.198 28.1378 182.14 28.6142C182.049 29.3541 182.677 30.0812 183.16 30.5295C187.092 34.1773 194.395 31.8449 198.64 30.1296C199.221 29.895 199.783 29.6169 200.345 29.3403C200.759 29.1366 201.724 28.2543 201.566 28.6879C201.512 28.8349 201.349 28.9143 201.25 29.0352C200.36 30.1187 199.444 31.289 198.767 32.5079C196.413 36.7436 195.034 41.345 194.557 46.1673C194.319 48.5747 193.649 55.6868 197.283 56.6486C199.46 57.2248 202.286 55.5842 204.028 54.586C206.673 53.0705 209.452 51.1396 211.195 48.5771"
									stroke="#1E2330"
									stroke-width="6"
									stroke-linecap="round"
								/>
								<defs>
									<linearGradient
										id="paint0_linear_0_1"
										x1="6.00267"
										y1="70.5"
										x2="385.003"
										y2="68.4787"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#0E7490" />
										<stop offset="0.49" stop-color="#B91C1C" />
										<stop offset="1" stop-color="#FACC15" />
									</linearGradient>
								</defs>
							</svg>
						</Link>
					</div>
					<ul className="flex flex-row gap-10">
						{isAuthenticated ? (
							<>
								<li>
									<Link to="/admin">Admin</Link>
								</li>
								<li className="bg-[#1E2330] text-orange-50 w-40 h-12 mt-[-10px] text-center">
									<Link
										to="/"
										onClick={() => {
											logout();
										}}
										className="block mt-[10px]"
									>
										Logout
									</Link>
								</li>
								<li>
									<Link to="/profile">Perfil</Link>
								</li>
							</>
						) : (
							<>
								<li className="">
									<Link to="/login">Ingresar</Link>
								</li>
								<li className="bg-[#1E2330] text-orange-50 w-40 h-12 mt-[-10px] text-center">
									<Link className="block mt-[10px]" to="/register">
										Registrarse
									</Link>
								</li>
							</>
						)}
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Navbar;