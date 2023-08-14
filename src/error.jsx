import Head from "./components/head";

function Error() {
  return (
    <>
        <Head defaultTitle="Error" />
        <div class="errorTitle">404 Error</div>
        <div class="errorText">This page does not exist!</div>
    </>
  );
}

export default Error;