import logo from '../../../assets/logos/LogoName2.png'
const SignUp = () => {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <div className="flex flex-col items-center">
        <img src={logo} className='w-48 mb-8' alt="" />
        <h1 className="text-3xl font-semibold">Sign Up</h1>
        <p className="text-sm">Sign in to access your account</p>
      </div>
      <div className="form-group">
        <div className="form-field">
          <label className="form-label">Name</label>

          <input
            placeholder="Type here"
            type="text"
            className="input max-w-full"
          />
          <label className="form-label">
            <span className="form-label-alt">Please your complete name.</span>
          </label>
        </div>
        <div className="form-field">
          <label className="form-label">Email address</label>

          <input
            placeholder="Type here"
            type="email"
            className="input max-w-full"
          />
          <label className="form-label">
            <span className="form-label-alt">Please enter a valid email.</span>
          </label>
        </div>
        <div className="form-field">
          <label className="form-label">Password</label>
          <div className="form-control">
            <input
              placeholder="Type here"
              type="password"
              className="input max-w-full"
            />
          </div>
        </div>
        <div className="form-field pt-5">
          <div className="form-control justify-between">
            <button type="button" className="btn btn-primary w-full">
              Sign up
            </button>
          </div>
        </div>

        <div className="form-field">
          <div className="form-control justify-center">
            <a className="link link-underline-hover link-primary text-sm">
             You have account? Sign in.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
