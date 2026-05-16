import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow-lg w-[400px]">

        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
          Client Login
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded-lg mb-5"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-3 rounded-lg mb-5"
        />

        <Link to="/dashboard">

          <button className="w-full bg-blue-900 text-white py-3 rounded-lg">
            Login
          </button>

        </Link>

      </div>

    </div>
  )
}

export default Login