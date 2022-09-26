import "../styles/globals.css";

if (process.isClient) {
  sessionStorage.setItem(
    "avatar",
    "https://avatars.dicebear.com/api/micah/default.svg?background=%23ffffff"
  );
  sessionStorage.setItem("username", "default0x0");
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
