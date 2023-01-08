// import HeaderButton from "./HeaderButton";
// import styles from "./Header.module.css";

// const Header = ({ currentUser, logout }) => {
//   return (
//     <header className={styles.container}>
//       <HeaderButton link={"/home"} text={"Home"} />
//       {!currentUser && (
//         <>
//           <HeaderButton link={"/register"} text={"Register"} />
//           <HeaderButton link={"/login"} text={"Login"} />
//         </>
//       )}
//       {currentUser && (
//         <>
//           <HeaderButton link={"/posts"} text={"Posts"} />
//           <HeaderButton link={"/logout"} text={"Log Out"} customCb={logout} />
//           <div>
//             Hello,{" "}
//             <span className={styles.username}>{currentUser.username}</span>!
//           </div>
//         </>
//       )}
//     </header>
//   );
// };

// export default Header;
