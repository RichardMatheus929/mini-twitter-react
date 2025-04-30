import { useState } from "react";
import { login } from "../api/endpoints/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await login({
        email,
        password,
      });

      console.log(response.data);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || "Erro ao fazer login");
    }
  };

  return (
    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="text-center mt-4 mb-3 d-flex justify-content-center">
              <img
                src="https://gestaoparque.imd.ufrn.br/gestao/arquivo/by-name/23fa93cd-b8ac-4fa7-ae60-a086d3c34c03.png?key=34837e5c4e6469ec6016cf9b41e54abdf6f01080cbd8e3006120c524fc9ab2b7"
                alt="logo"
                className="w-100"
              />
            </div>
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h1 className="fs-4 card-title fw-bold mb-4">Login <span style={{color: "#1d9bf0"}}>mini-twitter</span></h1>
                <form
                  onSubmit={handleSubmit}
                  className="needs-validation"
                  noValidate
                  autoComplete="off"
                >
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="email">
                      E-Mail Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoFocus
                    />
                    <div className="invalid-feedback">Email is invalid</div>
                  </div>

                  <div className="mb-3 bg-blue-100">
                    <div className="mb-2 w-100">
                      <label className="text-muted" htmlFor="password">
                        Password
                      </label>
                    </div>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <div className="invalid-feedback">Password is required</div>
                  </div>

                  <div className="d-flex align-items-center">
                    <button type="submit" className="btn btn-primary ms-auto">
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer py-3 border-0">
                <div className="text-center">
                  Don't have an account?{" "}
                  <a href="register" className="text-dark">
                    Create One
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center mt-5 text-muted">
              Copyright &copy; project mini-twitter - 2025  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
