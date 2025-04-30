import { useState } from "react";

export default function Register() {

    const handleSubmit = async (e) => {
        e.preventDefault()

        const name = useState("");
        const email = useState("");
        const username = useState("");
        const password = useState("");
    }

    return (
        <section className="h-100">
        <div className="container h-100">
            <div className="row justify-content-sm-center h-100">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                <div className="text-center d-flex justify-content-center">
                <img
                    src="https://gestaoparque.imd.ufrn.br/gestao/arquivo/by-name/23fa93cd-b8ac-4fa7-ae60-a086d3c34c03.png?key=34837e5c4e6469ec6016cf9b41e54abdf6f01080cbd8e3006120c524fc9ab2b7"
                    alt="logo"
                    className="w-100"
                />
                </div>
                <div className="card shadow-lg">
                <div className="card-body p-5">
                    <h1 className="fs-4 card-title fw-bold mb-4">Register</h1>
                    <form
                    method="POST"
                    className="needs-validation"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    >
                    <div className="mb-3">
                        <label className="mb-2 text-muted" htmlFor="name">
                        Name
                        </label>
                        <input
                        id="name"
                        type="text"
                        className="form-control"
                        name="name"
                        required
                        autoFocus
                        />
                        <div className="invalid-feedback">Name is required</div>
                    </div>

                    <div className="mb-3">
                        <label className="mb-2 text-muted" htmlFor="name">
                        Username
                        </label>
                        <input
                        id="username"
                        type="text"
                        className="form-control"
                        name="username"
                        required
                        autoFocus
                        />
                        <div className="invalid-feedback">Name is required</div>
                    </div>

                    <div className="mb-3">
                        <label className="mb-2 text-muted" htmlFor="email">
                        E-Mail Address
                        </label>
                        <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        required
                        />
                        <div className="invalid-feedback">Email is invalid</div>
                    </div>

                    <div className="mb-3">
                        <label className="mb-2 text-muted" htmlFor="password">
                        Password
                        </label>
                        <input
                        id="password"
                        type="password"
                        className="form-control"
                        name="password"
                        required
                        />
                        <div className="invalid-feedback">Password is required</div>
                    </div>

                    <div className="align-items-center d-flex">
                        <button type="submit" className="btn btn-primary ms-auto">
                        Register
                        </button>
                    </div>
                    </form>
                </div>
                <div className="card-footer border-0">
                    <div className="text-center">
                    Already have an account?{" "}
                    <a href="login" className="text-dark">
                        Login
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}
