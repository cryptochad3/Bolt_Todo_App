import { useState } from 'react'
import NotesModal from './NotesModal'

export default function TodoItem({ todo, onToggle, onDelete, onUpdateNotes }) {
  const [showNotes, setShowNotes] = useState(false)

  return (
    <div className="border-b">
      <div className="flex items-center gap-2 p-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-4 h-4"
        />
        <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.text}
        </span>
        <button
          onClick={() => setShowNotes(true)}
          className="px-2 py-1 text-blue-600 hover:text-blue-800 flex items-center gap-1"
        >
          <span>📝</span>
          {todo.notes?.subject && (
            <span className="text-xs text-gray-500">({todo.notes.subject})</span>
          )}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-2 py-1 text-red-600 hover:text-red-800"
        >
          ×
        </button>
      </div>
      {showNotes && (
        <NotesModal
          notes={todo.notes}
          onUpdate={(notes) => onUpdateNotes(todo.id, notes)}
          onClose={() => setShowNotes(false)}
        />
      )}
    </div>
  )
}
