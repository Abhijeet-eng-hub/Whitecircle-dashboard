import { FaHome, FaFileUpload, FaBell, FaUser } from "react-icons/fa"

function Dashboard() {

  const handleUpload = () => {
    alert("Document Uploaded Successfully!")
  }

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-72 bg-blue-900 text-white p-6">

        <h1 className="text-3xl font-bold mb-12">
          Whitecircle
        </h1>

        <ul className="space-y-8 text-lg">

          <li className="flex items-center gap-3 hover:text-gray-300 cursor-pointer">
            <FaHome />
            Dashboard
          </li>

          <li className="flex items-center gap-3 hover:text-gray-300 cursor-pointer">
            <FaFileUpload />
            Upload Documents
          </li>

          <li className="flex items-center gap-3 hover:text-gray-300 cursor-pointer">
            <FaBell />
            Notifications
          </li>

          <li className="flex items-center gap-3 hover:text-gray-300 cursor-pointer">
            <FaUser />
            Profile
          </li>

        </ul>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">

        {/* Top */}
        <div className="flex justify-between items-center mb-10">

          <div>
            <h2 className="text-4xl font-bold">
              Welcome Back 👋
            </h2>

            <p className="text-gray-600 mt-2">
              Manage your tax and compliance services
            </p>
          </div>

          <button className="bg-blue-900 text-white px-6 py-3 rounded-xl">
            Logout
          </button>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold">
              GST Status
            </h3>

            <p className="mt-4 text-green-600 font-semibold">
              Filed Successfully
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold">
              Pending Documents
            </h3>

            <p className="mt-4 text-red-500 font-semibold">
              3 Documents Pending
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold">
              Notifications
            </h3>

            <p className="mt-4 text-blue-900 font-semibold">
              2 New Updates
            </p>
          </div>

        </div>

        {/* Upload Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mt-10">

          <h3 className="text-2xl font-bold mb-6">
            Upload Documents
          </h3>

          <input
            type="file"
            className="border p-3 rounded-lg w-full"
          />

          <button
            onClick={handleUpload}
            className="mt-6 bg-blue-900 text-white px-6 py-3 rounded-lg"
          >
            Upload Now
          </button>

        </div>

        {/* Filing History */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mt-10">

          <h3 className="text-2xl font-bold mb-6">
            Filing History
          </h3>

          <table className="w-full">

            <thead>
              <tr className="text-left border-b">
                <th className="py-3">Type</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="py-4">GST Return</td>
                <td className="text-green-600">Completed</td>
                <td>12 May 2026</td>
              </tr>

              <tr className="border-b">
                <td className="py-4">ITR Filing</td>
                <td className="text-yellow-500">Pending</td>
                <td>08 May 2026</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default Dashboard