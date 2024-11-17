export default function NotesModal({ notes, onUpdate, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl shadow-xl">
        <div className="border-b p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Notes</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div>
            <input
              type="text"
              value={notes.subject}
              onChange={(e) => onUpdate({ ...notes, subject: e.target.value })}
              placeholder="Subject"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="border rounded-lg">
            <div className="border-b bg-gray-50 px-3 py-2 flex gap-2">
              <button className="hover:bg-gray-200 px-2 py-1 rounded">B</button>
              <button className="hover:bg-gray-200 px-2 py-1 rounded italic">I</button>
              <button className="hover:bg-gray-200 px-2 py-1 rounded underline">U</button>
              <span className="border-r mx-2"></span>
              <button className="hover:bg-gray-200 px-2 py-1 rounded">📎</button>
            </div>
            <textarea
              value={notes.body}
              onChange={(e) => onUpdate({ ...notes, body: e.target.value })}
              placeholder="Write your notes here..."
              className="w-full p-3 min-h-[200px] focus:outline-none"
              rows="8"
            />
          </div>
        </div>

        <div className="border-t p-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
