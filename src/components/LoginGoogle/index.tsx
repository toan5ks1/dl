import { GoogleLogin } from 'react-google-login';

const LoginGoogle: React.FC = () => {
  return (
    <GoogleLogin
      clientId="329223162919-iihqvlgnhcjk418iem78qs1am73j87n5.apps.googleusercontent.com"
      // render={(renderProps) => (
      //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
      //     This is my custom Google button
      //   </button>
      // )}
      buttonText="Login"
      onSuccess={(res) => {
        console.log(res);
      }}
      onFailure={(res) => {
        console.log(res);
      }}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default LoginGoogle;
