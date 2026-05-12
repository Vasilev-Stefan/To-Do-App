export default function Body() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-screen bg-gray-200">
      <div className="bg-white rounded-xl shadow-xl p-4">
        <p className="text-2xl font-bold mb-6 text-center">Pending</p>
        <div className="space-y-3">
          <div className="bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200">
            Design homepage
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-xl p-4">
        <p className="text-2xl text-center font-bold mb-6">Active</p>
        <div className="space-y-3">
          <div className="bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200">Finish the design</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-xl p-4">
        <p className="text-2xl text-center font-bold mb-6">Completed</p>
        <div className="space-y-3">
          <div className="bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200">Header component</div>
        </div>
      </div>
    </div>
  );
}
