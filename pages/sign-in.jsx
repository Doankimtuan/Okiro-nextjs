import Image from 'next/image';
export default function SignIn() {
  return (
    <div className="login">
      <div className="login__bg">
        <Image
          src="/2020/11/photo-1590374504314-295374f053e4.jpeg"
          width="800"
          height="100%"
          alt="background sign in"
        />
      </div>

      <div className="login__container">
        <div className="login__logo">
          <a href="#">
            <Image src="/2020/11/okiro.svg" width="113px" height="54px" alt="Okiro" />
          </a>
        </div>
        <div className="login__content">
          <form data-members-form="signin">
            <h1>Sign in to Okiro</h1>
            <label htmlFor="signin">Your email address</label>
            <input data-members-email="" id="signin" type="email" required="" />
            <button className="global__button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
